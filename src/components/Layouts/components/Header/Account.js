import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Account({ name = 'Name', onClick }) {
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
                        <Button none_1 to={'/thong-tin-tai-khoan'} className={cx('btn')} onClick={onClick}>
                            Thông tin tài khoản
                        </Button>
                        <Button none_1 to={'/mat-khau-bao-mat'} className={cx('btn')} onClick={onClick}>
                            Mật khẩu và bảo mật
                        </Button>
                        <Button none_1 to={'/danh-sach-giao-dich'} className={cx('btn')} onClick={onClick}>
                            Danh sách giao dịch
                        </Button>
                    </PopperWrapper>
                </div>
            )}
        >
            <div>
                <Button className={cx('btn')} none_1 rightIcon={<FontAwesomeIcon icon={faAngleDown} />}>
                    {name}
                </Button>
            </div>
        </Tippy>
    );
}

export default Account;
