import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <>
            <div className={cx('wrapper')}>
                <form action="" className={cx('form')}>
                    <h1>Login</h1>
                    <div className={cx('input-box')}>
                        <input type="text" placeholder="Username" required />
                        <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                    </div>
                    <div className={cx('input-box')}>
                        <input type="password" placeholder="Password" required />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                    </div>
                    <div className={cx('remember-forgot')}>
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="/#">Forgot password?</a>
                    </div>
                    <Button type="submit" className={cx('btn')}>
                        Login
                    </Button>
                    <div className={cx('register-link')}>
                        Don't have a account? <a href="/#"> Register</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignIn;
