import StyledWrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> App
          </h1>
          <p>
            I'm baby butcher shabby chic whatever, swag echo park you probably
            haven't heard of them tote bag salvia succulents kitsch. Franzen
            ascot Brooklyn solarpunk DSA health goth, bitters affogato migas
            direct trade live-edge listicle. Whatever adaptogen +1 tofu, viral
            freegan offal. Fit shoreditch flexitarian Brooklyn roof party
            mixtape man bun activated charcoal pinterest. Farm-to-table truffaut
            stumptown letterpress.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </StyledWrapper>
  );
};

export default Landing;
