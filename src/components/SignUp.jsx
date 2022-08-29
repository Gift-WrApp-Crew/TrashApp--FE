/* eslint-disable max-len */
import React, { useState } from 'react';
import { getUser, signUpUserFunction } from '../../state/services/fetch-utils';
export default function SignUp({ setCurrentUser }) {
  const [signUpUser, setSignUpUser] = useState({ email: '', password: '', username: '' });

  async function handleSignUp(e) {
    e.preventDefault();
    await signUpUserFunction(signUpUser);
    const user = await getUser();
    setCurrentUser(user);
  }
  return (
    <div>
      <div className="sign-up">
        <form onSubmit={handleSignUp}>
          <h4>Sign Up</h4>
          <label>
            set username
            <input
              className="username-input"
              value={signUpUser.username}
              onChange={(e) => setSignUpUser({ ...signUpUser, username: e.target.value })}
            />
          </label>
          <label>
            email
            <input
              className="sign-up-input"
              value={signUpUser.email}
              onChange={(e) => setSignUpUser({ ...signUpUser, email: e.target.value })}
            />
          </label>
          <label>
            password
            <input
              className="sign-up-input"
              value={signUpUser.password}
              type="password"
              onChange={(e) => setSignUpUser({ ...signUpUser, password: e.target.value })}
            />
          </label>
          <button className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
