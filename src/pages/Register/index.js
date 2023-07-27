import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
    return (
        <>
            <div className={cx('wrapper')}>
                <form action="" className={cx('form')}>
                    <h1>Register</h1>
                    <div className={cx('input-box')}>
                        <input type="tel" placeholder="Phone" required />
                        <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                    </div>
                    <div className={cx('input-box')}>
                        <input type="email" placeholder="Email" required />
                        <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                    </div>
                    <div className={cx('input-box')}>
                        <input type="password" placeholder="Password" required />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                    </div>
                    <div className={cx('input-box')}>
                        <input type="password" placeholder="Enter the password" required />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                    </div>

                    <Button type="submit" className={cx('btn')} to={'/dang-nhap'}>
                        Register
                    </Button>
                    <div className={cx('register-link')}>
                        Already have an account? <Link to={'/dang-nhap'}> Login</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
