export const setItems = (users) => ({
  type: 'SET_ITEMS',
  payload: users,
});

export const addItem = (data) => ({
  type: 'ADD_ITEM',
  payload: data,
});

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});

export const searchItem = (value) => ({
  type: 'SEARCH_ITEM',
  payload: value,
});

export const setDefaultItems = (value) => ({
  type: 'SEARCH_ITEM',
  payload: value,
});
