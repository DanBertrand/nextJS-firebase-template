import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../pages/index';
import { getAuth, signOut } from 'firebase/auth';
import Link from 'next/link';

const Status = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  if (user) {
    return (
      <>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </>
    );
  }
  return (
    <>
      <Link href="/login">
        <a>Login</a>
      </Link>{' '}
      <Link href="/signup">
        <a>Register</a>
      </Link>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <span>TurboChav</span>
      <Status />
    </>
  );
};

export default Navbar;
