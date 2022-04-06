import { ItemAction, ItemsActionTypes, ItemsState } from "../../types/items";


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
      const newUsers = state.items.filter(
        (item: any) => item.id !== action.payload
      );

      if (state.items.length !== 1) {
        return { ...state, items: newUsers };
      }

    case ItemsActionTypes.FILTER__ITEM:
      const data = action.payload;
      const filteredBrand = state.items.filter((item: any) =>
        item.brand.includes(data.brand)
      );
      const filteredModel = filteredBrand.filter((item: any) =>
        item.model.includes(data.model)
      );

      const filteredYear = filteredModel.filter((item: any) =>
        item.year.includes(data.year)
      );

      const filteredBody = filteredModel.filter((item: any) =>
        item.body.includes(data.body)
      );

      const filteredMileageFrom = filteredBody.filter((item: any) =>
        Number(item.mileage) >= Number(data.mileage_from)
      );

      const filteredMileageTo = filteredMileageFrom.filter((item: any) =>
        Number(item.mileage) <= Number(data.mileage_to)
      );

      const filteredPriceFrom = filteredMileageTo.filter((item: any) =>
        Number(item.price) >= Number(data.price_from)
      );

      const filteredPriceTo = filteredPriceFrom.filter((item: any) =>
        Number(item.price) <= Number(data.price_to)
      );
      
      return {...state, items: filteredPriceTo};

    default:
      return state;
  }
};
