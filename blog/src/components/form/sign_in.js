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
        <label>
          Email
          <input type="email" value={email} onChange={changeEmail} placeholder="reacttest@gmail.com" required />
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

export default SignIn;
