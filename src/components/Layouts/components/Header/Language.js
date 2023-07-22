import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Language() {
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
                            Tiếng Việt
                        </Button>
                        <Button none_1 to={'/mat-khau-bao-mat'}>
                            EngLish
                        </Button>
                    </PopperWrapper>
                </div>
            )}
        >
            <div>
                <Button className={cx('btn')} none_1 rightIcon={<FontAwesomeIcon icon={faGlobeAfrica} />}>
                    Tiếng Việt
                </Button>
            </div>
        </Tippy>
    );
}

export default Language;
