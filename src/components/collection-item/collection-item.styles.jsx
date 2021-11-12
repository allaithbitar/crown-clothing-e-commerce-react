import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const CollectionItemBackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${(props) => props.backgroundImage};
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const CollectionItemPrice = styled.span`
  width: 10%;
`;
