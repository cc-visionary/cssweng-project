import React, { useState } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
import { Link } from 'react-router-dom';
>>>>>>> a263d0f (Finished the login view)

import { SpecialInput } from '../components';
import { UserService } from '../services';
import { getUser } from '../utils/store';

import Logo from '../assets/images/login/logo.png';

import '../assets/styles/pages/Login.css';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [loginError, setLoginError] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    UserService.login(username, password)
      .then(() => {
        if (getUser().userType === 'moderator') props.history.push('/admin');
        else props.history.push('/customer');
      })
      .catch((err) => {
        const { success, error } = err.response.data;
        if (!success) setLoginError(error);
        setPassword('');
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div id="login-page">
      <div className="inner-login">
        <img src={Logo} alt="Logo" />
        <h1 className="login-title">THIS SCRAPBOOK BELONGS TO...</h1>
        <form>
          <SpecialInput
            type="text"
            value={username}
            onChange={setUsername}
            name="username"
            placeholder="Username"
            onKeyPress={handleKeyPress}
            required
          />
          <br />
          <SpecialInput
            type="password"
            value={password}
            onChange={setPassword}
            name="password"
            placeholder="Password"
            onKeyPress={handleKeyPress}
            required
          />
          <br />
          <span className="login-error">{loginError}</span>
          <button type="button" className="login-button" onClick={handleLogin}>
            Log In
          </button>
        </form>
        <Link to="/signup" className="create-an-account">
          Create an account
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
};

Login.defaultProps = {
  history: null,
};

export default Login;
