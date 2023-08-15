export interface BoxItem {
  row: number;
  col: number;
}

export interface Box extends Array<BoxItem> {}

export interface Grid extends Array<Box> {}
