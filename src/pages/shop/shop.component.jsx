import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { lazy } from "react";
import { Suspense } from "react";
import Spinner from "../../components/spinner/spinner.component";

const CollectionOveriewContainer = lazy(() =>
  import("../../components/collections-overview/collection.overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shope-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOveriewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
