/* eslint-disable max-len */
import React, { useState } from 'react';
import { getUser, signInUserFunction } from '../../state/services/fetch-utils';
import { NavLink, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
export default function SignIn({ setCurrentUser }) {
  const [signInUser, setSignInUser] = useState({ email: '', password: '' });

  async function handleSignIn(e) {
    e.preventDefault();
    await signInUserFunction(signInUser);
    const user = await getUser();
    setCurrentUser(user);
  }
  return (
    <div>
      <form onSubmit={handleSignIn}>
        <h4>Sign In</h4>
        <label>
          email
          <input
            className="sign-in-input"
            value={signInUser.email}
            onChange={(e) => setSignInUser({ ...signInUser, email: e.target.value })}
          />
        </label>
        <label>
          password
          <input
            className="sign-in-input"
            value={signInUser.password}
            type="password"
            onChange={(e) => setSignInUser({ ...signInUser, password: e.target.value })}
          />
        </label>
        <button className="sign-in-button">Sign In</button>
      </form>
      <NavLink to="/signup">Sign Up Here</NavLink>
    </div>
  );
}
