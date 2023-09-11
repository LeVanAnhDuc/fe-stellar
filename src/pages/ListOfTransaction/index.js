import styles from './ListOfTransaction.module.scss';
import classNames from 'classnames/bind';

import { Container, Row } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { listOfTransaction } from '../../assets/images/listOfTransaction';
import { bookingRoomApi } from '../../apis/index';

const cx = classNames.bind(styles);

function ListOfTransaction() {
    const [listItems, setlistItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [pageNumber, setPageNumber] = useState(1);
    const itemsPerPage = 4;

    const getListBooking = async (page, size = itemsPerPage) => {
        const res = await bookingRoomApi.getTransactionHistory(page, size);
        setlistItems(res.data.data);
    };
    const getTotalBooking = async () => {
        const res = await bookingRoomApi.getTotalTransactionHistory();
        setPageCount(Math.ceil(res.data.data.totalTransactionHistory / itemsPerPage));
    };
    useEffect(() => {
        getListBooking(pageNumber);
    }, [pageNumber]);

    useEffect(() => {
        getTotalBooking();
    }, []);

    const handlePageClick = (event) => {
        setPageNumber(event.selected + 1);
    };
    return (
        <>
            <div
                className={cx('hero')}
                style={{
                    backgroundImage: `url(${listOfTransaction})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    maxWidth: '100%',
                    height: '120px',
                }}
            >
                <Container>
                    <h1>DANH SÁCH GIAO DỊCH</h1>
                </Container>
            </div>
            <div className={cx('content-wrapper')}>
                <Container fluid="md" className={cx('my-container')}>
                    <Row className={cx('px-0', 'items')}>
                        {listItems.map((item, index) => {
                            return (
                                <div key={'item' + index} className={cx('px-0', 'item')}>
                                    <div>
                                        <span>Mã giao dịch:</span>
                                        <span>{item._id}</span>
                                    </div>
                                    <div>
                                        <span>Loại phòng:</span>
                                        <span>
                                            {item.typeRoom} [{item.quantity}]
                                        </span>
                                    </div>
                                    <div>
                                        <span>Ngày bắt đầu:</span>
                                        <span>{item.checkinDate}</span>
                                    </div>
                                    <div>
                                        <span>Ngày kết thúc:</span>
                                        <span>{item.checkoutDate}</span>
                                    </div>
                                    <div>
                                        <span>Tổng tiền:</span>
                                        <span>{item.totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                                    </div>
                                    <div>
                                        <span>Trạng thái:</span>
                                        <span>{item.status}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </Row>

                    <Row className={cx('px-0')}>
                        <ReactPaginate
                            breakLabel="..." // Nhãn cho dấu chấm lửng
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2} // Phạm vi của các trang được hiển thị.
                            marginPagesDisplayed={3} // Số lượng trang để hiển thị cho lề.
                            pageCount={pageCount} //Tổng số trang
                            previousLabel="< previous" // Nhãn cho nút previous.
                            renderOnZeroPageCount={null}
                            containerClassName={cx('pagination')} // Vùng chưa phân trang
                            pageLinkClassName={cx('page-link')} // Tên lớp trên thẻ a của từng phần tử trang.
                            previousLinkClassName={cx('page-link')} // Tên lớp trên thẻ a của nút previous.
                            nextLinkClassName={cx('page-link')}
                            breakLinkClassName={cx('page-link')}
                            pageClassName={cx('page-item')} // Tên lớp trên thẻ li của từng phần tử trang.
                            previousClassName={cx('page-item', 'previous-item')} // Tên lớp trên thẻ li của nút previous.
                            nextClassName={cx('page-item', 'next-item')}
                            breakClassName={cx('page-item')}
                            activeClassName={cx('active')}
                            disabledClassName={cx('disabled')}
                        />
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ListOfTransaction;
