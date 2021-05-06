# Database module

A builder query for TypeScript.

- [Methods](#Methods)
  - [create](#create)
  - [createIfNotExists](#createIfNotExists)
  - [drop](#drop)
  - [dropIfExists](#dropIfExists)
  - [createIndex](#createIndex)
  - [table](#table)
  - [insert](#insert)
  - [update](#update)
  - [delete](#delete)
  - [select](#select)
  - [addSelection](#addSelection)
  - [where](#where)
  - [orWhere](#orWhere)
  - [andWhere](#andWhere)
  - [whereNot](#notWhere)
  - [join](#join)
  - [groupBy](#groupBy)
  - [orderBy](#orderBy)
  - [limit](#limit)
  - [min, max, sum, avg, count](#aggregate)
  - [raw](#raw)
- [Result](#Result)

## Methods

### create

Create the table.

```js
import 'reflection-metadata';
import { container } from 'tsyringe';
import { Database } from '@modules/database/core/database';

const Database = container.resolve(Database);

const { data, status, error } = await Database.create(
  table: 'books',
  columns: {
    id: {
      type: 'BIGINT',
      unsigned: true,
      required: true, // not null
    },
    name: {
      type: 'VARCHAR(50)',
      require: true,
      unique: true, // unique value
    },
    author_id: {
      type: 'BIGINT',
      unsigned: true,
      required: true,
    },
  },
  primaryKey: {
    colums: ['id'],
  },
  foreignKeys: [
    {
      column: 'author_id',
      table: 'authors',
      referencedColumn: 'id',
      onDelete: 'cascade',
    },
  ],
  uniqueColumns: [
    {
      columns: ['author_id'],
    },
  ],
);

/*
CREATE TABLE books (
  id BIGINT UNSIGNED,
  name: VARCHAR(50) NOT NULL UNIQUE,
  author_id: BIGINT UNSIGNED NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (author_id) REFERENCES authors(id),
  UNIQUE (author_id)
);
*/
```

### createIfNotExists

The same as [create](#create), but it is executable only if the table does not exist.

### drop

Drop the table

```js
const { status, error } = await Database.drop('books');

// DROP TABLE books;
```

### dropIfExists

The same as [drop](#drop), but it is executable only if the table exists.

### createIndex

Create the index for the table.

```js
const { status, error } = await Database.createIndex({
  name: 'IndexName',
  unique: false,
  table: 'books',
  columns: ['name'],
});

// CREATE INDEX IndexName ON books(name);
```

### table

Select the table.

```js
Database.table('books'); // Select table table books
```

### insert

Insert data into the selected table.

```js
const { status, error } = await Database.table('books').insert(
  ['id', 'name', 'author_id'],
  [
    ['1', 'book 01', '1'],
    ['2', 'book 02', '1'],
  ],
);

/*
INSERT INTO TABLE books  (id, name, author_id)
  VALUES
    ('1', 'book 01', '1'),
    ('2', 'bool 02', '1');
*/
```

### update

Update data in the selected table.

```js
const { status, error } = Database.table('books')
  .where([['id', '=', 'v:1']])
  .update({ name: 'book 01 updated' });

/*
UPDATE books
SET name = 'book 01 updated'
WHERE id = 1;
*/
```

### delete

Delete data in the selected table.

```js
const { status, error } = await Database.table('books')
  .where([['id', '=', 'v:1']])
  .delete();

// DELETE FROM books WHERE id = 1;
```

### select

Select the specific columns.

```js
const { data, error } = await Database.table('books')
  .select('id', 'name')
  .execute();

// SELECT id, name FROM books;
```

### addSelection

Select a few more columns.

```js
const { data, error } = await Database.table('books')
  .select('id', 'name')
  .addSelection('author_id')
  .execute();

// SELECT id, name, author_id FROM books;
```

### where

Start the conditions for the query.

```js
const { data, error } = await Database.table('books')
  .select('id', 'name')
  .where([
    ['id', '=', 'v:1'],
    ['name', '=', 'v:book01'],
  ])
  .execute();

// SELECT id, name FROM books WHERE id = '1' AND name = 'book01';
```

### orWhere

Use OR operators to connect the conditions.

```js
const { data, error } = await Database.table('books')
  .select('id', 'name')
  .where([['id', '=', 'v:1']])
  .orWhere([['name', '=', 'v:book01']])
  .execute();

// SELECT id, name FROM books WHERE id = '1' OR (name = 'book01');
```

### andWhere

Use AND operators to connect the conditions.

```js
const { data, error } = await Database.table('books')
  .select('id', 'name')
  .where([['id', '=', 'v:1']])
  .andWhere([['name', '=', 'v:book01']])
  .execute();

// SELECT id, name FROM books WHERE id = '1' AND (name = 'book01');
```

### whereNot

Use NOT operators.

```js
const { data, error } = await Database.table('books')
  .select('id', 'name')
  .where([['id', '=', 'v:1']])
  .whereNot([['name', '=', 'v:book01']], 'AND')
  .execute();

// SELECT id, name FROM books WHERE id = '1' AND NOT (name = 'book01');
```

### Nested where

```js
const { data, error } = await Database
  .table('books')
  .select('id', 'name')
  .where((q) => {
    q
      .where([['id', '=', 'v:1']])
      .notWhere([['name', '=', 'v:book01']]), 'OR');
  });

// SELECT id, name FROM books WHERE id = '1' OR NOT (name = 'book01');
```

### join

Join the tables.

```js
const { data, error } = await Database.table('books:b')
  .select('b.name', 'a.name')
  .join('authors:a', 'INNER JOIN')
  .on([['b.author_id', '=', 'a.id']])
  .execute();

/*
SELECT b.name, a.name
FROM books AS b
INNER JOIN authors AS a
ON b.author_id = a.id;
*/
```

### groupBy

Group the rows having the same value.

```js
Database.table('books:b')
  .select('a.name')
  .join('authors:a', 'RIGHT JOIN')
  .on([['b.author_id', '=', 'a.id']])
  .groupBy('b.name')
  .having([['COUNT(b.id)', '>', 'v:3']])
  .execute();

/*
SELECT a.name
FROM books AS b
RIGHT JOIN authors AS a
ON b.author_id = a.id
GROUP BY b.name
HAVING COUNT(b.id) > 3;
*/
```

### orderBy

Sort the result.

```js
const { data, error } = await Database.table('books')
  .select('*')
  .orderBy('id', 'DESC')
  .execute();

// SELECT * FROM books ORDER BY id DESC;
```

### limit

Select a limited number of rows.

```js
const { data, error } = await Database.table('books')
  .select('*')
  .limit('5')
  .execute();

// SELECT * FROM books LIMIT 5;
```

### aggregate

```js
Aggregate: min, max, sum, avg, count.

const { data, error } = await Database
  .table('books')
  .select('id', 'name', 'author_id')
  .count('id')
  .execute();

// SELECT id, name, COUNT(author_id) FROM books;
```

### raw

Excute raw query.

```js
const { status, data, error } = await Database.raw('SELECT * FROM books');
```

## Result
The result contains 3 properties:

- status: informations about data changing.

- data: [collection](https://github.com/ecrmnn/collect.js).

- error: message error.
