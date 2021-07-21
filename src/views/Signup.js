import React from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../firebase/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Signup.css';

function SignUp(props) {

    //Invoke useForm hook with these methods to use
    const { register, handleSubmit, reset } = useForm();

    //Create some state
    const [isLoading, setLoading] = useState(false);

    // Do something with data when form is submitted - something being handle the user
    const onSubmit = async (data) => {
      // Grabbing created user
      let newUser;
      setLoading(true);
      try {
        newUser = await signup(data);
        reset();
      } catch(error) {
        console.log(error);
      }

      if (newUser) {
        props.history.push(`/profile/${newUser.uid}`);
      } else {
        setLoading(false);
      }
    }
      

    // This is getting the form class name and saying if isLoading, add class 'loading' or else empty to act as a toggle.?
    const formClassname = `form-signup form ${isLoading ? 'loading' : ''}`;

    return (
            <div className="form-wrapper">
              
              <div className="form-content">
                <h2>Signup Form</h2> 
                <form className={formClassname} onSubmit={handleSubmit(onSubmit)}>
                  <label>
                    First Name:
                    <input 
                      type="text" 
                      name="firstName"
                      {...register('firstName')} />   
                    </label>
                  <label>
                    Last Name:
                    <input 
                      type="text" 
                      name="lastName" 
                      {...register('lastName')} />
                  </label>
                  <label>
                    Email:
                    <input 
                      type="text" 
                      name="email" 
                      {...register('email')} />
                  </label>
                  <label>
                    password:
                    <input 
                      type="text" 
                      name="password" 
                      {...register('password')} />
                  </label>
                  <input 
                    type="submit" 
                    value="Signup" 
                    className="submit"/>
                  <div className="login_wrapper">
                <Link to="/login">Login</Link>
                </div>
                </form>
              </div>
            </div>
    )
}

export default SignUp