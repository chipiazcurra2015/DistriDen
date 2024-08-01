import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../image/logo.jpg';
import { login } from '../../Redux/Actions/action';

function Login() {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(userName, password));
    if (isAuthenticated) {
      navigate('/home');
    }
  };

  return (
    <div className='container-fluid'>
      <form className='mx-auto mt-5 form-login' onSubmit={handleLogin}>
        <h4 className='text-center'>Login</h4>
        <img src={logo} className='text-center' alt="Depolivia Logo" width="180px" />
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input
            type="email"
            onChange={(e) => { setUserName(e.target.value) }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            onChange={(e) => { setPassword(e.target.value) }}
            className="form-control"
            id="exampleInputPassword1"
          />
          <div id="emailHelp" className="form-text">Forget Password</div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login;
