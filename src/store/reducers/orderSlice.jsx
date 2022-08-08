import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "input",
  initialState: {
    phone: "",
    address: "",
    status: "",
    email: "",
    taxNumber: "",
    totalPrice: 0,
  },
  reducers: {
    onDeliveryInput(state, action) {
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
    onPaymentInput(state, action) {
      if (!action.payload) return;
      state.status = true;
    },
    onInvoiceInput(state, action) {
      state.taxNumber = action.payload.taxNumber;
      state.email = action.payload.email;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { onDeliveryInput, onPaymentInput, onInvoiceInput } =
  orderSlice.actions;

// "phone": "0912345678",
// "address": "hhhhhhhhhhhh",
// "status": true,
// "email": "admin@gmail.com",
// "tax_number": "12345678",
// "total_price": "350"
