export type EditType = {
  name: EditItem;
  number: EditItem;
  product: EditItem;
};

export type EditItem = {
  text: string | number;
  edit: boolean;
};
