import { collection, onSnapshot } from "@firebase/firestore";
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shope.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = collection(firestore, "collections");
    dispatch(fetchCollectionsStart());
    onSnapshot(
      collectionRef,
      (snapShot) => {
        const collectionMap = convertCollectionsSnapShotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      },
      (error) => dispatch(fetchCollectionFailure(error.message))
    );
  };
};
