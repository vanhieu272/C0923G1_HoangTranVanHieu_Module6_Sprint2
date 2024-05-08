import Table from "react-bootstrap/Table";
import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import * as service from "../../../service/AccessoryService";
import {toast} from "react-toastify";
import Modal from "react-bootstrap/Modal";
import "./OrderHistory.css";

export default function OrderHistory() {
    const navigate = useNavigate();
    const [bills, setBill] = useState([])
    const [billDetail, setBillDetail] = useState([])
    const getBill = async () => {
        try {
            const rs = (await service.getBills()).data
            await setBill(rs)
        } catch (error) {
            navigate('/')
        }

    }
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const detailBill = async (id) => {
        try {
            const rs = (await service.getBillDetail(id)).data
            await setBillDetail(rs)
        } catch (error) {
            if (error.response.status == 500) {
                toast.error("no content")
                // navigate('/error')
            }
        }
        openModal();
    }


    useEffect(() => {
        document.title = "History Order";
        window.scrollTo(0, 0)
        getBill()
    }, []);

    const convertToVietnameseDateTime = (dateTime) => {
        const date = new Date(dateTime);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        const second = date.getSeconds().toString().padStart(2, '0');


        const formattedDateTime = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

        return formattedDateTime;
    }

    const USD = new Intl.NumberFormat('US', {
        style: 'decimal', // Sử dụng kiểu số thập phân
        minimumFractionDigits: 2, // Số lượng số thập phân tối thiểu là 0
        maximumFractionDigits: 2, // Số lượng số thập phân tối đa cũng là 0
    });

    return (
        <>
            <div className="container mt-5">
                <h2 className="my-3">Payment history</h2>
                <hr className="text-light"/>
                <div className="row mt-5">
                    <div>
                        <Table responsive="sm" variant="#282828">
                            <thead>
                            <tr>
                                <th>Invoice code</th>
                                <th className="text-center">Payment date</th>
                                <th className="text-center">Total paid</th>
                                <th className="text-center">Detail</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                bills && bills.map((val) => (
                                    <tr key={val.id}>
                                        <td>{val.code}</td>
                                        <td className="text-center">
                                            {convertToVietnameseDateTime(val.createDate)}
                                        </td>
                                        <td className="text-center">
                                            {USD.format(val.totalPrice)}
                                        </td>
                                        <td className="text-center"><p style={{cursor:'pointer'}} onClick={() => detailBill(val.id)}><i className="bi bi-receipt"></i></p>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                        <div className="mb-5">
                            <i style={{color: '#FEB31F'}}>* You have paid a total of $2400 for 13 items. Thank you for
                                your continued trust and support.</i>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={modalIsOpen} size="lg" onHide={() => setModalIsOpen(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <table id="modal-table">
                        <thead>
                        <tr>
                            <th  className="text-center">
                                No.
                            </th>
                            <th>

                            </th>
                            <th>
                                Product
                            </th>


                            <th  className="text-center">
                                Price
                            </th>
                            <th  className="text-center">
                                Quantity
                            </th>
                            <th className="text-center">
                                Total Price
                            </th>
                            <th>

                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            billDetail && billDetail.map((val, index) => (
                                <tr key={index}>
                                    <td className="text-center"> {index + 1} </td>
                                    <td className="text-center"><img src={val.accessorySize.accessory.thumbnailImg} alt="" /></td>
                                    <td>
                                        {val.accessorySize.accessory.name}
                                    </td>

                                    <td className="text-center"> {val.price} $</td>
                                    <td className="text-center"> {val.quantity} </td>
                                    <td className="text-center">
                                        {val.price} $
                                    </td>
                                    <td className="text-center">
                                        <NavLink style={{textDecoration: 'none', color: 'white'}} to={`/detail/${val.accessorySize.accessory.id}`}>
                                            Buy again
                                        </NavLink>
                                    </td>

                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </Modal.Body>

            </Modal>
        </>
    )
}