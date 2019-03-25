import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { formValid } from './App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const errors = {
  name: "unedited",
  email: "unedited",
  phone: "unedited",
  blog: "unedited",
};
test('formValid unedited', () => {
  const withErr = formValid(errors);
  expect(withErr).toBeFalsy();
});

const noErrors = {
  name: "",
  email: "",
  phone: "",
  blog: "",
};
test('formValid perfect', () => {
  const withoutErr = formValid(noErrors);
  expect(withoutErr).toBeTruthy();
});

const someErrors = {
  name: "",
  email: "this email is wrong",
  phone: "phone is invalid",
  blog: "",
};
test('formValid perfect', () => {
  const withSomeErr = formValid(someErrors);
  expect(withSomeErr).toBeFalsy();
});

console.log(formValid(errors))

