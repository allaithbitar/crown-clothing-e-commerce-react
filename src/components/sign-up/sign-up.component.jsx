import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      return;
    }
    const { signUpStart } = this.props;
    const { displayName, email, password } = this.state;
    signUpStart({ displayName, email, password });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I already have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleInputChange}
            label="Display Name"
            type="text"
          />
          <FormInput
            name="email"
            value={this.state.email}
            handleChange={this.handleInputChange}
            label="Email"
            type="text"
          />
          <FormInput
            handleChange={this.handleInputChange}
            type="text"
            name="password"
            value={this.state.password}
            label="Password"
          />
          <FormInput
            handleChange={this.handleInputChange}
            type="text"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});
export default connect(null, mapDispatchToProps)(SignUp);
