import React, { Component } from 'react';
import './App.css';


/*Some regular expressions to match field inputs with*/
const nameRegExp = RegExp(/^[A-Za-z]+$/);
const emailRegExp = RegExp(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/);
const phoneRegExp = RegExp(/^[2-9]\d{9}$/);
const blogRegExp = RegExp(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/)



/*formValid checks our errors record to see if they are empty stringdor not, if they are
then the form is valid, if not, it is invalid */
export const formValid = errors => {
  let valid = true
  Object.values(errors).forEach(val => {
    if (val.length > 0) { valid = false }
  });
  return valid
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      blog: null,
      complete: false,
      submitted: false,
      errors: {
        name: "unedited",
        email: "unedited",
        phone: "unedited",
        blog: "unedited",
      }
    };
  }

  /**handleSubmit prevents default and will check if the current input is a valid
   * form, if it is, it will set the state complete field to true.
   */
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    let errors = this.state.errors;
    console.log(formValid(errors));
    if (formValid(this.state.errors)) {
      this.setState({ complete: true });
    }
    else {
      this.setState({ complete: false });
    }
  };

  /**handleChange handles change for all of the text input fields. It will switch
   * on the different input fields and check if the text matches the regular 
   * expressions defined above, if they don't the error field is set to a string.
   */
  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "name":
        errors.name = value.length < 30 && value.length > 3 &&
          nameRegExp.test(value) ? "" : "Name should be between 3 and 30 English letters only.";
        break;
      case "email":
        errors.email = emailRegExp.test(value) && value.length > 3 ? "" : "Invalid email address";
        break;
      case "phone":
        errors.phone = phoneRegExp.test(value) ? "" : "Invalid phone number"
        break;
      case "blog": errors.blog = blogRegExp.test(value) ? "" : "Invalid blog URL"
        break;
      default: break;
    }
    this.setState({ edited: true });
    this.setState({ errors, [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <div className="formContainer">
        <div className="formContents"> <h1>Contact Form</h1>
          <form className="form-class" onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <div className="label">
                <label htmlFor="name">Name: </label>
              </div>
              <div className="input">
                <input type="text"
                  className=""
                  placeholder="Enter your name"
                  noValidate
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="email">
              <div className="label">
                <label htmlFor="email">Email: </label>
              </div>
              <div className="input">
                <input type="email"
                  className=""
                  placeholder="Enter your email"
                  noValidate
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="message-box">
              <div className="label"></div>
              <div className="input">
                <div className="message"> We'll never share your email with anyone else.</div>
              </div>
            </div>

            <div className="phone">
              <div className="label">
                <label htmlFor="phone">Phone: </label>
              </div>
              <div className="input">
                <input type="text"
                  className=""
                  placeholder="Enter your phone Number"
                  noValidate
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="blog">
              <div className="label">
                <label htmlFor="blog">Blog: </label>
              </div>
              <div className="input">
                <input type="text"
                  className=""
                  placeholder="Enter your blog url"
                  noValidate
                  name="blog"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="submitForm">
              <button type="submit">Verify</button>
              {this.state.complete && this.state.submitted &&
                <span className="completeMessage">Form is complete</span>}
              {(!this.state.complete) && this.state.submitted &&
                <span className="completeMessage">Form is incomplete</span>}

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
