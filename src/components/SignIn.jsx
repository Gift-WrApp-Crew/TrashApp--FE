/* eslint-disable max-len */
import { useState } from 'react';
import './SignIn.css';
import { getUser, signInUserFunction } from '../../state/services/fetch-utils';
import { NavLink } from 'react-router-dom';


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
      <form className="sign-in-form" onSubmit={handleSignIn}>
        <label>
          Email
          <input
            className="sign-in-input"
            value={signInUser.email}
            onChange={(e) => setSignInUser({ ...signInUser, email: e.target.value })}
          />
        </label>
        <label>
          Password
          <input
            className="sign-in-input"
            value={signInUser.password}
            type="password"
            onChange={(e) => setSignInUser({ ...signInUser, password: e.target.value })}
          />
        </label>
        <section>
          <button className="sign-in-button">Sign In</button>
          <NavLink className="link" to="/signup">
            Sign Up Here
          </NavLink>
        </section>
      </form>
    </div>
  );
}
