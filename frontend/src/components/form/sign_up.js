import React, { useState } from 'react';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUserName = (e) => setUserName(e.target.value)
  const changeEmail = (e) => setEmail(e.target.value)
  const changePassword = (e) => setPassword(e.target.value)

  const submitSignUp = e => {
    e.preventDefault();
    alert(`${userName}, ${email}, ${password}`)
  }

  return (
    <>
      <form onSubmit={submitSignUp}>
        <div className="form_area sign_up">
          <ul>
            <li>
              <label for="user_name">User Name</label>
              <input id="user_name" type="text" value={userName} onChange={changeUserName} required />
            </li>
            <li>
              <label for="email">Email</label>
              <input id="email" type="email" value={email} onChange={changeEmail} required />
            </li>
            <li>
              <label for="password">Password</label>
              <input id="password" type="password" value={password} onChange={changePassword} required />
            </li>

          </ul>
          <div className="btn_area">
            <input type="submit" value="SignUp" />
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
