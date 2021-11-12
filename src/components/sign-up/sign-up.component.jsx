import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userCredentials.password !== userCredentials.confirmPassword) {
      return;
    }
    const { displayName, email, password } = userCredentials;
    signUpStart({ displayName, email, password });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="displayName"
          value={userCredentials.displayName}
          handleChange={(e) => handleInputChange(e)}
          label="Display Name"
          type="text"
        />
        <FormInput
          name="email"
          value={userCredentials.email}
          handleChange={(e) => handleInputChange(e)}
          label="Email"
          type="text"
        />
        <FormInput
          handleChange={(e) => handleInputChange(e)}
          type="text"
          name="password"
          value={userCredentials.password}
          label="Password"
        />
        <FormInput
          handleChange={(e) => handleInputChange(e)}
          type="text"
          name="confirmPassword"
          value={userCredentials.confirmPassword}
          label="Confirm password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});
export default connect(null, mapDispatchToProps)(SignUp);
