import React, { useState } from "react";

const FormValidation = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let { name, email, password, confirmPassword } = user;
  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  function getUserInfo(e) {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("All field requireds");
      setSuccess("");
    } else if (!name.includes(" ")) {
      setError("Please enter your first name and last name");
      setSuccess("");
    } else if (!email.includes("@")) {
      setError("Please enter valid email");
      setSuccess("");
    } else if (password !== confirmPassword) {
      setError("Please enter same password");
      setSuccess("");
    } else {
      setSuccess("Form Submited Successfully");
      setError("");
      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }
  return (
    <div className="signup">
      {error ? <h4>{error}</h4> : ""}
      {success ? <h4>{success}</h4> : ""}
      <form onSubmit={getUserInfo}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleInput}
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleInput}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInput}
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleInput}
          name="confirmPassword"
        />
        <button> Submit </button>
      </form>
    </div>
  );
};
export default FormValidation;
