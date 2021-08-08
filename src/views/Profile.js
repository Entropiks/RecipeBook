import React from 'react';
import { useSession } from '../firebase/UserProvider';
import './Profile.css';

const Profile = () => {
  const { user } = useSession();

  if (!user) {
    return null;
  }

  return (
    <div className="profile_wrapper">
      <p>Name : {user.displayName}</p>
      <p>Email: {user.email}</p>
      <p>ID: {user.uid}</p>
    </div>
  )
}

export default Profile