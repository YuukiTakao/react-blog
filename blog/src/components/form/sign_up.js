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
        <label>
          User Name
          <input type="text" value={userName} onChange={changeUserName} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={changeEmail} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={changePassword} required />
        </label>
        <input type="submit" value="SignUp" />
      </form>
    </>
  );
}

export default SignUp;
