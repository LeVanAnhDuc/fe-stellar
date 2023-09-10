import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import config from '../../../config';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { authApi, userApi } from '../../../apis/index.js';

const cx = classNames.bind(styles);

function Account({ name = 'Name', onClick }) {
    const [userName, setUserName] = useState('Anonymous');
    const navigate = useNavigate();

    useEffect(() => {
        // Gọi API và cập nhật userName khi component mount
        async function fetchUserName() {
            await userApi
                .getUserName()
                .then((response) => {
                    setUserName(response.data.data.userName);
                })
                .catch((error) => {
                    console.error('Error ftching user name:', error);
                });
        }

        fetchUserName();
    }, [userName]);

    const handelLogout = async () => {
        await authApi
            .logout()
            .then(() => {
                localStorage.clear();
                navigate('/dang-nhap');
            })
            .catch(() => {
                localStorage.clear();
                navigate('/dang-nhap');
            });
    };

    return (
        <Tippy
            // visible={true}
            offset={[0, -5]}
            interactive={true}
            delay={[0, 300]}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-list', 'custom-popper')}>
                        <Button none_1 to={config.Routes.infoAccount} className={cx('btn')} onClick={onClick}>
                            Thông tin tài khoản
                        </Button>
                        <Button none_1 to={config.Routes.passwordAndSecuruty} className={cx('btn')} onClick={onClick}>
                            Mật khẩu và bảo mật
                        </Button>
                        <Button none_1 to={config.Routes.listOfTransaction} className={cx('btn')} onClick={onClick}>
                            Danh sách giao dịch
                        </Button>
                        <Button none_1 className={cx('btn')} onClick={handelLogout}>
                            Đăng xuất
                        </Button>
                    </PopperWrapper>
                </div>
            )}
        >
            <div>
                <Button className={cx('btn')} none_1 rightIcon={<FontAwesomeIcon icon={faAngleDown} />}>
                    {userName}
                </Button>
            </div>
        </Tippy>
    );
}

export default Account;
