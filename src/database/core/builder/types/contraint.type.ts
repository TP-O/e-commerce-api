export const required = () => {
  return 'NOT NULL';
};

export const unique = () => {
  return 'UNIQUE';
};

export const defaults = (value: string | number) => {
  return `DEFAULT ${value}`;
};

export const increment = () => {
  return 'AUTO_INCREMENT';
};

export const unsigned = () => {
  return 'UNSIGNED';
};

export const onUpdate = (value: string | number) => {
  return `ON UPDATE ${value}`;
};

export const onDelete = (value: string | number) => {
  return `ON DELETE ${value}`;
};
