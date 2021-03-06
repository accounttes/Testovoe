import { DataInterface } from "./../decompose/dataFormation";

export interface IUsers {
  items: Array<ItemInterface>;
}

export interface ItemsState {
  users: IUsers;
}

export interface ItemInterface {
  body: string;
  brand: string;
  mileage: string;
  model: string;
  price: string;
  year: string;
}

export enum ItemsActionTypes {
  SET_ITEMS = "SET_ITEMS",
  ADD_ITEM = "ADD_ITEM",
  REMOVE__ITEM = "REMOVE__ITEM",
  FILTER__ITEM = "FILTER__ITEM",
}

interface SetItemsAction {
  type: ItemsActionTypes.SET_ITEMS;
  payload: Array<ItemInterface>;
}
interface AddItemAction {
  type: ItemsActionTypes.ADD_ITEM;
  payload: any;
}
interface RemoveItemAction {
  type: ItemsActionTypes.REMOVE__ITEM;
  payload: number;
}

interface FilterItemAction {
  type: ItemsActionTypes.FILTER__ITEM;
  payload: any;
}

export type ItemAction =
  | SetItemsAction
  | AddItemAction
  | RemoveItemAction
  | FilterItemAction;
