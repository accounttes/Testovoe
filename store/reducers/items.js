const initialState = {
  items: [],
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };

    case 'ADD_ITEM':
      const newItems = [];
      state.items.map((item) => newItems.push(item));

      const newUser = action.payload;
      newUser.id = newItems.length + 1;
      newItems.push(newUser);

      return { ...state, items: newItems };

    case 'REMOVE_ITEM':
      const newUsers = state.items.filter((item) => item.id !== action.payload);

      if (state.items.length !== 1) {
        return { ...state, items: newUsers };
      }

    case 'SEARCH_ITEM':
      const newContacts = state.items.filter(
        (item) =>
          item.name.toLowerCase().includes(action.payload) ||
          item.username.toLowerCase().includes(action.payload),
      );

      return { ...state, items: newContacts };

    default:
      return state;
  }
};
