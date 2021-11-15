import { withRouter } from "react-router";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./preview-collection.styles";

const PreviewCollectoin = ({ title, items, match, history, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer
      className="title"
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(PreviewCollectoin);
