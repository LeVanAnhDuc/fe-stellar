import style from './BookRoom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

 
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function Search(){
    return(
        <div className={cx('Search')}>
            <div className={cx('exit')}>
            
                 <FontAwesomeIcon icon={faXmark} />
             </div> 
            <div className={cx('date')}>
            Ngày nhập phòng: 
            <input type="date" />
            Ngày trả phòng:
            <input type="date" />

           </div>
          
        </div>
    )
}
export default Search;