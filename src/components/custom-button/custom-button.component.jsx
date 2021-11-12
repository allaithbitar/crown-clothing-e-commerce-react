import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <CustomButtonContainer
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      inverted ? "iverted" : ""
    }
    custom-button`}
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
