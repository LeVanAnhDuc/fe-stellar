import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Account() {
    return (
        <Tippy
            // visible={true}
            offset={[-10, -5]}
            interactive={true}
            delay={[0, 300]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-list')}>
                        <Button none_1 to={'/thong-tin-tai-khoan'}>
                            Thông tin tài khoản
                        </Button>
                        <Button none_1 to={'/mat-khau-bao-mat'}>
                            Mật khẩu và bảo mật
                        </Button>
                        <Button none_1 to={'/danh-sach-giao-dich'}>
                            Danh sách giao dịch
                        </Button>
                    </PopperWrapper>
                </div>
            )}
        >
            <div>
                <Button className={cx('btn')} none_1 rightIcon={<FontAwesomeIcon icon={faAngleDown} />}>
                    Tài khoản
                </Button>
            </div>
        </Tippy>
    );
}

export default Account;
