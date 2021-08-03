import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { login } from '../firebase/auth';
import { useState } from 'react';

function Login(props) {

    //Invoke useForm hook with these methods to use
    const { register, handleSubmit, reset } = useForm();

    //Create some state
    const [isLoading, setLoading] = useState(false);

    // Do something with data when form is submitted - something being handle the user
    const onSubmit = async (data) => {
      // Grabbing created user
      let user;
      setLoading(true);
      try {
        user = await login(data);
        reset();
      } catch(error) {
        console.log(error);
      }

      if (user) {
        props.history.push(`/profile/${user.uid}`);
      } else {
        setLoading(false);
      }
    }
      
    // This is getting the form class name and saying if isLoading, add class 'loading' or else empty to act as a toggle.?
    const formClassname = `form-signup form ${isLoading ? 'loading' : ''}`;

    return (
            <div className="form-wrapper">
              <div className="form-content">
                <h2>Login Form</h2> 
                <form className={formClassname} onSubmit={handleSubmit(onSubmit)}>
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
                  <div className="login_wrapper">
                  <button className="login_button">
                    Login
                  </button>
                  <Link to="/signup">Sign Up</Link>
                  </div>
                </form>
              </div>
            </div>
    )
}

export default Login
