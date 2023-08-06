import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Language({ className }) {
    return (
        <Tippy
            // visible={true}
            offset={[35, -5]}
            interactive={true}
            delay={[0, 200]}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-list', 'custom-popper')}>
                        <Button none_1 to={'/#'} className={cx('btn')}>
                            Tiếng Việt
                        </Button>
                        <Button none_1 to={'/#'} className={cx('btn')}>
                            EngLish
                        </Button>
                    </PopperWrapper>
                </div>
            )}
        >
            <div>
                <Button className={cx('btn', className)} none_1 rightIcon={<FontAwesomeIcon icon={faGlobeAfrica} />}>
                    |
                </Button>
            </div>
        </Tippy>
    );
}

export default Language;
