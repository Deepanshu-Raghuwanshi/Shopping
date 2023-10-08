import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  userLogin: true,
  shopData: [],
  smartPhone: [],
  laptops: [],
  fragrances: [],
  skincare: [],
  groceries: [],
  homeDecoration: [],
  furniture: [],
  tops: [],
  womensDresses: [],
  womensShoes: [],
  mensShirts: [],
  mensShoes: [],
  mensWatches: [],
  womensWatches: [],
  womensBags: [],
  womensJewellery: [],
  sunglasses: [],
  automotive: [],
  motorcycle: [],
  lighting: [],
  Header1Value: "",
  ShopItemId: "",
  cartId: [],
  cartItems: [],
};
export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addShopData: (state, action) => {
      state.shopData.push(action.payload);
    },
    addsmartPhones: (state, action) => {
      state.smartPhone.push(action.payload);
    },
    addlaptops: (state, action) => {
      state.laptops.push(action.payload);
    },
    addfragrances: (state, action) => {
      state.fragrances.push(action.payload);
    },
    addskincare: (state, action) => {
      state.skincare.push(action.payload);
    },
    addgroceries: (state, action) => {
      state.groceries.push(action.payload);
    },
    addhomeDecoration: (state, action) => {
      state.homeDecoration.push(action.payload);
    },
    addfurniture: (state, action) => {
      state.furniture.push(action.payload);
    },
    addtops: (state, action) => {
      state.tops.push(action.payload);
    },
    addwomensDresses: (state, action) => {
      state.womensDresses.push(action.payload);
    },
    addwomensShoes: (state, action) => {
      state.womensShoes.push(action.payload);
    },
    addmensShirts: (state, action) => {
      state.mensShirts.push(action.payload);
    },
    addmensShoes: (state, action) => {
      state.mensShoes.push(action.payload);
    },
    addmensWatches: (state, action) => {
      state.mensWatches.push(action.payload);
    },
    addwomensWatches: (state, action) => {
      state.womensWatches.push(action.payload);
    },
    addwomensBags: (state, action) => {
      state.womensBags.push(action.payload);
    },
    addwomensJewellery: (state, action) => {
      state.womensJewellery.push(action.payload);
    },
    addsunglasses: (state, action) => {
      state.sunglasses.push(action.payload);
    },
    addautomotive: (state, action) => {
      state.automotive.push(action.payload);
    },
    addmotorcycle: (state, action) => {
      state.motorcycle.push(action.payload);
    },
    addlighting: (state, action) => {
      state.lighting.push(action.payload);
    },
    AddHeader1Value: (state, action) => {
      state.Header1Value = action.payload;
    },
    AddShopItemId: (state, action) => {
      state.ShopItemId = action.payload;
    },
    AddCartItem: (state, action) => {
      state.cartId.push(action.payload);
    },
    emptyCart: (state, action) => {
      let items = state.cartItems;
      items.map((ele, index) => {
        if (ele.id === action.payload) {
          items.splice(index, 1);
        }
      });
      let idIndex = state.cartId.indexOf(action.payload);
      state.cartId.splice(idIndex, 1);
    },
    addQuantity: (state, action) => {
      if (state.cartItems.length == 0) {
        state.cartItems.push(action.payload);
      } else {
        let id = action.payload.id;
        var data = state.cartItems.find((ele) => ele.id === id);
        if (!data) {
          state.cartItems.push(action.payload);
        }
      }
    },
    cartQuantityIncrement: (state, action) => {
      state.cartItems.map((ele) => {
        if (ele.id === action.payload) {
          ele.quantity += 1;
        }
      });
    },
    cartQuantitydeccrement: (state, action) => {
      state.cartItems.map((ele) => {
        if (ele.id === action.payload) {
          ele.quantity -= 1;
        }
      });
    },
  },
});

export const {
  addShopData,
  addsmartPhones,
  addlaptops,
  addfragrances,
  addskincare,
  addgroceries,
  addhomeDecoration,
  addfurniture,
  addtops,
  addwomensDresses,
  addwomensShoes,
  addmensShirts,
  addmensShoes,
  addmensWatches,
  addwomensWatches,
  addwomensBags,
  addwomensJewellery,
  addsunglasses,
  addautomotive,
  addmotorcycle,
  addlighting,
  AddHeader1Value,
  AddShopItemId,
  AddCartItem,
  emptyCart,
  addQuantity,
  cartQuantityIncrement,
  cartQuantitydeccrement,
} = shopSlice.actions;
export default shopSlice.reducer;
