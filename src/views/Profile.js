import React, { useEffect, useState } from 'react';
import { useSession } from '../firebase/UserProvider';
import { firestore } from '../firebase/config';
import './Profile.css';

const Profile = () => {
  const { user } = useSession();
  const [userDocument, setUserDocument]= useState(null);

  useEffect(() => {
    const docRef = firestore.collection('users').doc(user.uid);
    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const documentData = doc.data();
        setUserDocument(documentData);
      }
    })
    return unsubscribe;
  }, [user.uid]);

  if (!userDocument) {
    return null;
  }

  return (
    <div className="profile_wrapper">
      {JSON.stringify(userDocument)}
      <div className="profile_form">
        <label>State<input type="text" name="availablehours"></input></label>
        <label>Available Hours<input type="text" name="availablehours"></input></label>
        <label>Phone<input type="text" name="phone"></input></label>
        
        <div>
          <p>Sports</p>
          <input type="checkbox" id="surf" name="surf" />
          <label for="horns">Surf</label>
          <input type="checkbox" id="skate" name="skate" />
          <label for="skate">Skate</label>
          <input type="checkbox" id="snow" name="snow" />
          <label for="snow">Snow</label>
  
        </div>
      </div>
    </div>
  )
}

export default Profile