import { collection, getDocs } from "@firebase/firestore";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  convertCollectionsSnapShotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";
import ShopActionTypes from "./shope.types";

export function* fetchCollectionAsync() {
  yield console.log("I AM FIRED");
  try {
    // const collectionRef = collection(firestore, "collections").get();
    const snapShot = yield getDocs(collection(firestore, "collections"));
    const collectionsMap = yield call(
      convertCollectionsSnapShotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
  // yield onSnapshot(
  //     collectionRef,
  //     (snapShot) => {
  //       const collectionMap = convertCollectionsSnapShotToMap(snapShot);
  //       // dispatch(fetchCollectionsSuccess(collectionMap));
  //     }
  //     // (error) => dispatch(fetchCollectionFailure(error.message))
  //   ).
  //   console.log(snapShot);
  //   const collectionsMap =
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
