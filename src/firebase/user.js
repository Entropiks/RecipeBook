import { firestore } from "./config";

export const createUserDocument = async (user) => {
  // get reference to firestore document
  const docRef = firestore.doc(`/users/${user.uid}`);

  // create user object
  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    rate: '',
    rating: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    sports: '', // Surf, Skate, Snow for now
    hoursavailable: '', // when is the filmer available to shoot
    mediatype: '' // video camera, drone, still shots etc
  }

  // write to cloud firestore
  return docRef.set(userProfile);
}