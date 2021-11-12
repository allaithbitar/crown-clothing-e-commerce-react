import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOveriewContainer from "../../components/collections-overview/collection.overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shope-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOveriewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
