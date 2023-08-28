import styles from './ListOfTransaction.module.scss';
import classNames from 'classnames/bind';

import { Container, Row } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { listOfTransaction } from '../../assets/images/listOfTransaction';

const cx = classNames.bind(styles);
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function ListOfTransaction() {
    const [currentItems, setcurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, items]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
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
                        {currentItems.map((currentElement, index) => {
                            return (
                                <div key={'item' + index} className={cx('px-0', 'item')}>
                                    <div>
                                        <span>Mã giao dịch:</span>
                                        <span>DV001</span>
                                    </div>
                                    <div>
                                        <span>Tên giao dịch:</span>
                                        <span>Dịch vụ 1</span>
                                    </div>
                                    <div>
                                        <span>Ngày bắt đầu:</span>
                                        <span>01/01/2023</span>
                                    </div>
                                    <div>
                                        <span>Ngày kết thúc:</span>
                                        <span>01/01/2023</span>
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
