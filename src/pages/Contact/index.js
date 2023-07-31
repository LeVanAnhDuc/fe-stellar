import React from 'react';
import anh1 from "../../assets/images/anh1.png";
import anh3 from "../../assets/images/anh3.jpg";
import anh4 from "../../assets/images/anh4.jpg";
import anh6 from "../../assets/images/anh6.jpg";
import { Zoom } from "react-slideshow-image";
import Button from '../../components/Button';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import 'react-slideshow-image/dist/styles.css';
import './Contact.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'  



const images = [anh1, anh3, anh4, anh6];
const cx = classNames.bind(styles);
const zoomOutProperties = {
  duration: 1000,
  transitionDuration: 800,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,
};
const Slideshow = () => {
    return (
      <div className={cx('slide-container')}>
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%", height:"540" }} src={each} />
          ))}
        </Zoom>
      </div>
    );
  }
const FormShow = () => {
  return( 
    <div>
    <form className={cx('form_1')}>
      <label htmlFor="fname" style={{marginLeft:10,marginTop:5}}><b>Họ và Tên:</b></label>
      <input type="text" style={{ width:470, height:54}}></input> 
      </form>

      <form className={cx('form_1')}>
      <label htmlFor="fname"style={{marginLeft:10,marginTop:5}}><b>Email</b>:</label>
      <input type="text"  style={{width:"500px", height:54}}></input> 
      </form>
 
      <form  className={cx('form_1')} >
      <label htmlFor="fname"style={{marginLeft:10,marginTop:5}}><b>Message:</b></label>
      <input type="text" style={{width:475, height:159}}></input>
      </form>
      </div> 

  );
}
const Room = () => {
    return (
      <div className={cx('Column')}>
      <Container >  
     <Row>  
       <Col  className={cx('Col1')}>
          <div className={cx('Col_1')}>
            <div>
            <h1 className={cx('Tilte1')}><i><b>GỬI TIN NHẮN CHO CHÚNG TÔI</b></i></h1>
            <hr style={{width:"50%",marginLeft:140,height:"3px",backgroundColor:"black",marginBottom:30}}></hr>
            </div>
            <form style={{border:"none"}}>
            <FormShow></FormShow>
            <Button filled_1={true} type="submit" style={{marginLeft: 225,marginTop:30}}>Gửi tin nhắn</Button> 
            </form>
          </div>
        </Col>    
       <Col  className={cx('Col_1')}>  <div>
          <h1 className={cx('Tilte1')}><i><b>LIÊN HỆ VỚI CHÚNG TÔI</b></i></h1>
          <h2 className={cx('Tilte2')}><b>The Stellar Hotel</b></h2>
          <a style={{marginLeft:40}}>
          <h3>Địa chỉ liên hệ: 01 Võ Văn Ngân, P. Linh Chiểu, Q. Thủ Đức, TP. Hồ Chí Minh</h3>
          <h3>Điện thoại: (+84) 9465412XX</h3>
          <h3>Email: info@stellar.com.vn</h3>
          </a>
          <iframe className={cx('iframe')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.375736707316!2d106.76933281027874!3d10.850632389258081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e1!3m2!1svi!2s!4v1690684807626!5m2!1svi!2s"></iframe>
          </div>
        </Col>  
     </Row>  
     </Container>
     </div>

    )
}

function Contact() {
    return (
      <div>
          <Slideshow></Slideshow>
          <Room></Room>     
      </div>
    );
}

export default Contact;
