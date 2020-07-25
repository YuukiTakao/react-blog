import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => setEmail(e.target.value)
  const changePassword = (e) => setPassword(e.target.value)

  const submitSignIn = e => {
    e.preventDefault();
    // alert(`${email}, ${password}`)
  }

  return (
    <>
      <form onSubmit={submitSignIn}>
        <div className="form_area">
          <ul>
            <li>
              <label for="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={changeEmail}
                placeholder="reacttest@gmail.com"
                required
              />
            </li>
            <li>
              <label for="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={changePassword}
                required
              />
            </li>
          </ul>
          <div className="btn_area">
            <input type="submit" value="SignIn" />
          </div>
        </div>
      </form>
    </>
  );
}

export default SignIn;
