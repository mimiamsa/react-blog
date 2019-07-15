import React, { Component } from "react";
import APIHandler from "../api/Handler";
// dfont forget to install font-awesome
import "font-awesome/css/font-awesome.min.css";

const apiHandler = new APIHandler();

export default class Signup extends Component {
  state = {};

  constructor() {
    super();
    // below : create a ref to the DOM object
    this.avatarRef = React.createRef();
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // get the picked file
    const file = this.avatarRef.current.files[0];
    const { name, lastname, email, password, passwordConfirm, avatar } = this.state;

    // let's create a formData to simulate form post

    const fd = new FormData();

    fd.append("name", name);
    fd.append("lastname", lastname);
    fd.append("email", email);
    fd.append("password", password);
    // below, the file is appended (watch it's fd.set())
    if (file) fd.set("avatar", file, file.name);
    console.log("file ? ", file);

    apiHandler.post("/your-route-here", fd)
    .then(serverRes => console.log(serverRes))
    .catch(serverErr => console.error(serverErr));
  };

  // listens to clicks on the icon and simulate click on hidden file input
  toggleFilePicker = evt => this.avatarRef.current.click();

  render() {
    const { handleChange, handleSubmit, toggleFilePicker } = this;
    const { name, lastname, email, password, passwordConfirm } = this.state;
    return (
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <h1 className="title">Signup</h1>
        <label htmlFor="name">name</label>
        <input name="name" id="name" type="text" defaultValue={name} />
        <label htmlFor="lastname">lastname</label>
        <input
          name="lastname"
          id="lastname"
          type="text"
          defaultValue={lastname}
        />
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="text" defaultValue={email} />

        <label htmlFor="password">password</label>
        <input
          name="password"
          id="password"
          type="password"
          defaultValue={password}
        />
        <label htmlFor="passwordConfirm">confirm password (@todo)</label>
        <input
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
          defaultValue={passwordConfirm}
        />
        <label htmlFor="avatar">avatar</label>
        <i
          className="is-clickable fa fa-user-circle fa-lg"
          onClick={toggleFilePicker}
        />
        <input
          ref={this.avatarRef}
          id="avatar"
          name="avatar"
          type="file"
          className="is-hidden"
        />
        <hr/>
        <button className="btn">ok</button>
      </form>
    );
  }
}
