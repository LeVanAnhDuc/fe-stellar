import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return <h1 className={cx('wrapper')}>Header</h1>;
}

export default Header;
