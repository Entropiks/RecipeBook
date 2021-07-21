import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSession } from '../firebase/UserProvider'
import firebase from 'firebase'

// console.log({user});
const user = firebase.auth().currentUser;
console.log(user.uid);

const ProfileRedirect = ({ component: Component, ...rest }) => {
  const { user } = useSession;
  // console.log({user});

return (
  <Route 
    {...rest} 
    render={(props) => 
      !user ? ( 
        <Component {...props}/> 
      ) : (
        <Redirect to={{
          pathname: `/profile/${user.uid}`, 
          state: {from: props.location},
          }} />  
        )
      } 
  />
  )
}

export default ProfileRedirect;