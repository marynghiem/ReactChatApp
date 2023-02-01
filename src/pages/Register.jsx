import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mary's Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
