/** @format */

export type TheNews = {
  id: string;
  imageUrl: string;
  time: string;
  title: string;
  subtitle: string;
};
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface TheNewsSliceState {
  items: TheNews[];
  status: Status;
  //status: 'loading' | 'success' | 'error';
}
