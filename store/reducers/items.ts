import { ItemAction, ItemsActionTypes } from '../../types/items';

const initialState = {
  items: [],
};

export const items = (state = initialState, action: ItemAction) => {
  switch (action.type) {
    case ItemsActionTypes.SET_ITEMS:
      return { ...state, items: action.payload };

    case ItemsActionTypes.ADD_ITEM:
      const newItems = [];
      state.items.map((item) => newItems.push(item));

      const newUser = action.payload;
      newUser.id = newItems.length + 1;
      newItems.push(newUser);

      return { ...state, items: newItems };

    case ItemsActionTypes.REMOVE__ITEM:
      const newUsers = state.items.filter((item: any) => item.id !== action.payload);

      if (state.items.length !== 1) {
        return { ...state, items: newUsers };
      }

    case ItemsActionTypes.SEARCH__ITEM:
      if (typeof action.payload === 'object') {
        return { ...state, items: action.payload };
      } else {
        const newContacts = state.items.filter(
          (item: any) =>
            item.name.toLowerCase().includes(action.payload) ||
            item.username.toLowerCase().includes(action.payload),
        );

        return { ...state, items: newContacts };
      }

    default:
      return state;
  }
};
