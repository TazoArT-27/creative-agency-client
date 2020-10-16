import React, { useContext } from 'react';
import Logo from '../../images/logos/logo.png';
import google from '../../images/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button } from '@material-ui/core';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useLocation, useHistory, Link } from 'react-router-dom';
// import { UserContext } from '../../App';
import './Login.css';



const Login = () => {

    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){

        firebase.initializeApp(firebaseConfig);
    }

    
   
    const handleGoogleSignIn = () => {

        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {
            var token = result.credential.accessToken;
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
             setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // console.log(signedInUser);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    

    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(true)
      .then(function(idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function(error) {
        // Handle error
      });
    }
    return (
        <div className='container'>
            <div className="login-container text-center px-5">
              
                  <img className='mt-5 pt-5' style={{height: '110px'}} src={Logo} alt=""/>
              
              <div className="form-part px-5">
                
                  <h3 className="mt-5 mb-4 p-3">Login With</h3>
                  <button onClick={handleGoogleSignIn}  className="google-btn p-2" style={{
                  border: '1px solid lightGrey', 
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  outline: 'none'
                  }}>
                  <img style={{
                    height: '23px', 
                    width: '23px', 
                    
                  }} src={google} alt=""/>
                    <span className="mr-5 ml-5 px-5">Continue with Google</span>
                  </button>
                  <h6 className='mt-2'>Don't have an account? <span><Link to='/login' style={{color: '#3F90FC', textDecoration: 'underline'}}>Create an account</Link></span></h6>
              </div>
               
            </div>
        </div>
       
    );
};

export default Login;