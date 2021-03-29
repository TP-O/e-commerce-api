export interface PrimaryKey {
  name?: string;
  columns: string[];
}

export interface ForeignKey {
  name?: string;
  column: string;
  table: string;
  referencedColumn: string;
  onUpdate?: string;
  onDelete?: string;
}

export interface Unique {
  name?: string;
  columns: string[];
}

export interface Index {
  name: string;
  unique?: boolean;
  table: string;
  columns: string[];
}

export interface Constraint {
  required?: boolean;
  unique?: boolean;
  default?: string | number;
  increment?: boolean;
  unsigned?: boolean;
  onUpdate?: string;
  onDelete?: string;
}
