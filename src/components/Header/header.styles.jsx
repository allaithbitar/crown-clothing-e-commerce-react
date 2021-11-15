import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10;
    margin-bottom: 20px;
    justify-content: space-around;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70px;
  @media screen and (max-width: 800px) {
    width: 40px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  cursor: pointer;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
