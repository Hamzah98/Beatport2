import React from "react";

const LoginSignUpModal = props => {
  return (
    <div>
      <h1>WELCOME TO BEATPORT</h1>
      <p>Beatport is the world's largest electronic music store for DJs</p>
      <button>CREATE AN ACCOUNT</button>
      <p>Already have an account? Sign in</p>
      <input placeholder="Username" type="text" />
      <input placeholder="Password" type="password" />
      <input type="checkbox" name="remember-user" />
      <label htmlFor="remember-user">Remember me</label>
      <button>Login</button>
      <a href="#forgot-password">Forgot your username or password?</a>
    </div>
  );
};

export default LoginSignUpModal;
