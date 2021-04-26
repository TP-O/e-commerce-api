# ORM
Interact with tables in a database via an object.

## Creating Model
You can create a model using `ModeMaker` class.
- `table`: the name of the table.
- `columns`: the colums of the table.
- `fillable`: the columns that user can change its value.
- `relationships`: the relationships of the table. 

```js
import { Maker } from '@modules/database/core/orm/maker';
import { container } from 'tsyringe';

const Book = container.resolve(Maker).make({
  table: 'books',
  columns: [
    'id',
    'name',
    'author_id',
  ],
  fillable: [
    'name',
    'author_id',
  ],
  relationships: {},
});
```

## Methods

### create
Create data in the table.

```js
import { Book } from 'path/to/model';

const { success, error } = await Book.create([{
  name: 'book 01',
  author_id: 1,
}]);
```

### update
Update data in the table.

```js
import { Book } from 'path/to/model';

const { success, error } = await Book
  .where([['id', '=', 'v:1']])
  .update({
    name: 'book 01 updated',
  });
```

### delete
Delete data in the table.

```js
import { Book } from 'path/to/model';

const { success, error } = await Book
  .where([['id', '=', 'v:1']])
  .delete();
```

### all
Get all data in the table.

```js
import { Book } from 'path/to/model';

const { data, error } = await Book.all();
```

### get
Execute a query in the table.

```js
import { Book } from 'path/to/model';

const { success, error } = await Book
  .select('*')
  .where([['id', '>', 'v:2']])
  .get();
```

### with
Get data with its [relationship](#Relationships)

```js
import { Book } from 'path/to/model';

const { success, error } = await Book
  .select('*')
  .with('authors')
  .where([['books.id', '>', 'v:2']])
  .get();
```

## Relationships

### hasOne

```js
import { Maker } from '@modules/database/core/orm/maker';
import { container } from 'tsyringe';

const Price = container.resolve(Maker).make({
  table: 'prices',
  columns: [
    'id',
    'price',
    'book_id',
  ],
  fillable: [
    'price',
    'book_id',
  ],
  relationships: {},
});

const Book = container.resolve(Maker).make({
  table: 'books',
  columns: [
    'id',
    'name',
  ],
  fillable: [
    'name',
  ],
  relationships: {
    hasOne: [{
      name: 'price',
      localKey: 'id', // column of books
      foreignKey: 'book_id', // column of prices
      relatedModel: Price,
    }],
  },
});
```

### hasMany

```js
import { Maker } from '@modules/database/core/orm/maker';
import { container } from 'tsyringe';

const Book = container.resolve(Maker).make({
  table: 'books',
  columns: [
    'id',
    'name',
    'author_id',
  ],
  fillable: [
    'name',
    'author_id',
  ],
  relationships: {},
});

const Author = container.resolve(Maker).make({
  table: 'authors',
  columns: [
    'id',
    'name',
  ],
  fillable: [
    'name',
  ],
  relationships: {
    hasMany: [{
      name: 'books',
      ownerKey: 'id', // column of authors
      foreignKey: 'author_id', // column of books
      relatedModel: Book,
    }],
  },
});
```

### belongsTo

```js
import { Maker } from '@modules/database/core/orm/maker';
import { container } from 'tsyringe';

const Author = container.resolve(Maker).make({
  table: 'authors',
  columns: [
    'id',
    'name',
  ],
  fillable: [
    'name',
  ],
  relationships: {},
});

const Book = container.resolve(Maker).make({
  table: 'books',
  columns: [
    'id',
    'name',
    'author_id',
  ],
  fillable: [
    'name',
    'author_id',
  ],
  relationships: {
    belongsTo: [{
      name: 'author',
      ownerKey: 'id', // columns of authors
      foreignKey: 'author_id', // column of books
      relatedModel: Author,
    }],
  },
});
```

### belongsToMany

```js
import { Maker } from '@modules/database/core/orm/maker';
import { container } from 'tsyringe';

const Author = container.resolve(Maker).make({
  table: 'authors',
  columns: [
    'id',
    'name',
  ],
  fillable: [
    'name',
  ],
  relationships: {},
});

const Book = container.resolve(Maker).make({
  table: 'books',
  columns: [
    'id',
    'name',
  ],
  fillable: [
    'name',
  ],
  relationships: {
    belongsToMany: [{
      name: 'authors',
      ownerKey: 'id', // column of authors
      assetKey: 'id', // column of books
      pivot: {
        table: 'author_books', // name of pivot table
        ownerKey: 'author_id', // column references the ownerKey
        assetKey: 'book_id', // column references the assetKey
      },
    }],
  },
});
```
