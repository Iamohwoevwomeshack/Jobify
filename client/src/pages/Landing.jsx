import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='devdemy' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quos
            voluptas modi repellendus hic laborum ipsam asperiores minus iste a
            eaque minima perferendis, animi veniam nemo vero quidem dolore in.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
