import { all, call, put, takeLatest } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartAfterSignOut() {
  try {
    yield put(clearCart());
  } catch (error) {
    console.log(error);
  }
}

export function* onSignOutClearCart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartAfterSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutClearCart)]);
}
