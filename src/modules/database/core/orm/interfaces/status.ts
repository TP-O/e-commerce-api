export interface Status {
  fieldCount?: number;
  affectedRows?: number;
  changedRows?: number;
  insertId?: number;
  serverStatus?: number;
  warningCount?: number;
  message?: string;
  procotol41?: boolean;
}
