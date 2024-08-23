
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/logo.png'

const Logo = () => {
    return (
        <div>
             <Link to='/'>
              <img
                className='block'
                src={logoImg}
                alt='logo'
                width='150'
                height='100'
              />
            </Link>
        </div>
    );
};

export default Logo;