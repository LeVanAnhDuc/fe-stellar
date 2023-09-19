import classNames from 'classnames/bind';
import styles from './PasswordAndSecurity.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authApi } from '../../apis';

const cx = classNames.bind(styles);

function PasswordAndSecurity() {
    // const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        await authApi
            .resetPass_SendOTP()
            .then((response) => {
                navigate('/doi-mat-khau');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-1')}>
                <div className={cx('back-ground')}>
                    <strong className={cx('strong-1')}>MẬT KHẨU & BẢO MẬT</strong>
                </div>
            </div>
            <div className={cx('section-2')}>
                <div className={cx('back-ground')}>
                    <Form className={cx('form')} noValidate onSubmit={handleSubmit}>
                        <Button className={cx('btn')} type="submit">
                            Đổi mật khẩu
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default PasswordAndSecurity;
