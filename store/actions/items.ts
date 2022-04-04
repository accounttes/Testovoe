import { ItemsActionTypes } from '../../types/items';
import { ItemInterface } from '../../pages/delete'

export const setItems = (users: Array<ItemInterface>) => ({
  type: ItemsActionTypes.SET_ITEMS,
  payload: users,
});

export const addItem = (data: any) => ({
  type: ItemsActionTypes.ADD_ITEM,
  payload: data,
});

export const removeItem = (id: number) => ({
  type: ItemsActionTypes.REMOVE__ITEM,
  payload: id,
});

export const searchItem = (value: string | any[]) => ({
  type: ItemsActionTypes.SEARCH__ITEM,
  payload: value,
});
