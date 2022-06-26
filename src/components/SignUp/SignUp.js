import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handleEmail = e =>{
        setEmail(e.target.value);
    }

    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const handleConfirmPassword = e =>{
        setConfirmPassword(e.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleCreateUser = e =>{
        e.preventDefault();
        
        if(password !== confirmPassword){
            setError("Your didn't passwords match");
            return;
        }
        if( password.length < 8){
            setError("Password should be mini 8 characters");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleCreateUser}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmail} type="email" name="email" id="" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input onBlur={handlePassword} type="password" name="password" id="" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required />
        </div>
        <p style={{'color': 'red'}}>{error}</p>

        <input className="form-submit" type="submit" value="Login" />
      </form>
      <p>
        Already have an account?{" "}
        <Link className="form-link" to="/login">
          Login
        </Link>
      </p>
      <hr />
    </div>
  );
};

export default SignUp;
