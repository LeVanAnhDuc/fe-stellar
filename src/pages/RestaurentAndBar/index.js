import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './RestaurentAndBar.module.scss';
import Button from '../../components/Button';
import Res1 from "../../assets/images/Res1.jpg";
import {Container , Row, Col} from 'react-bootstrap';
import classNames from 'classnames/bind';  
import styles from './RestaurentAndBar.module.scss';

const cx = classNames.bind(styles);


function RestaurentAndBar() {
    return (
        <div>
        <img className={cx('Image_header')} src={Res1}></img>
        <h1>RestaurentAndBar</h1>
        </div>
    )
}

export default RestaurentAndBar;
