import { ItemInterface } from '../pages/delete';

export interface ItemsState {
  users: { items: any[] };
}

export enum ItemsActionTypes {
  SET_ITEMS = 'SET_ITEMS',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE__ITEM = 'REMOVE__ITEM',
  SEARCH__ITEM = 'SEARCH__ITEM',
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

interface SearchItemAction {
  type: ItemsActionTypes.SEARCH__ITEM;
  payload: string | any[];
}

export type ItemAction = SetItemsAction | AddItemAction | RemoveItemAction | SearchItemAction;
