import HeaderSalesPage from "../../Header/HeaderSalesPage";
import Footer from "../../Foooter/Footer";
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from "react";
import "./Cart.css";
import Form from "react-bootstrap/Form";
import {Field, Formik} from "formik";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import * as service from "../../../service/AccessoryService";
import {PayPalButton} from "react-paypal-button-v2";


export default function Cart() {
    const [quantity, setQuantity] = useState(1)
    const [username, setUsername] = useState(localStorage.getItem("username"))
    const [shoppingCart, setShoppingCart] = useState([])
    const [totalPriceAll, setTotalPriceAll] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const getCart = async () => {
        try {
            const result = await service.getShoppingcart()
            await setShoppingCart(result)
            setTotalQuantity(0)
            setTotalPriceAll(0)
            if (result != null) {
                await result.map(async (val, index) => {
                    await setTotalQuantity(total => total + val.quantity)
                    await setTotalPriceAll(total => total + val.price)
                })
            }
        } catch (error) {

        }


    }
    const paymentt = async () => {
        try {
            const rs = await service.createOrder()
            await getCart()
            toast.success("Order success")
        } catch (error) {
            toast.error(error.response.data)
        }

    }

    const payment = () => {
        Swal.fire({
            icon: "success",
            title: `Do you want payment?`,
            showCancelButton: true,
            confirmButtonText: "OK"
        })
            .then((rs) => {
                if (rs.isConfirmed) {
                    paymentt()
                }
            })

    }
    const editQuantity = async (val, id, vQuantity, sessionProduct) => {
        if (vQuantity > 1 || val == 1) {
            await service.setShoppingcart(val, id, sessionProduct);
            getCart();
        }

    }
    const deleteShoppingCart = async (id, idP) => {
        await service.deleteShoppingcart(id, idP)
        Swal.fire({
            icon: "success",
            title: "Delete Cart success",
            timer: "3000"
        })
        getCart()
    }
    const deleteCart = async (id, name, idP) => {
        Swal.fire({
            icon: "warning",
            title: `Do you want to remove a product named <span> ${name} </span> from the cart?`,
            showCancelButton: true,
            confirmButtonText: "Oke"
        })
            .then((rs) => {
                if (rs.isConfirmed) {
                    deleteShoppingCart(id, idP)
                }
            })
    }
    useEffect(() => {
        document.title = "Shopping Cart";
        window.scrollTo(0, 0)
        getCart()
    }, []);

    const USD = new Intl.NumberFormat('US', {
        style: 'decimal', // Sử dụng kiểu số thập phân
        minimumFractionDigits: 2, // Số lượng số thập phân tối thiểu là 0
        maximumFractionDigits: 2, // Số lượng số thập phân tối đa cũng là 0
    });
    const initialOptions = {
        "client-id": "ATFZRK1PlWCDyPdK7LT_ShY4VZ5EJsT_DLuG2qkOcGQ05wVN4YbSgQJFC1BbqVaPFtEic1YgkC79bxEm",
        currency: "USD",
        intent: "capture",
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="my-3">Shopping cart</h2>
                <hr className="text-light"/>
                <div className="row mt-5">
                    <div id="scroll-col" className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <Table responsive="sm" variant="#282828">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th></th>
                                <th>Size</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {shoppingCart ? (shoppingCart.map((value, index) => (
                                    <tr>
                                        <td>
                                            <button id="remove-product"><i className="bi bi-x-octagon"></i></button>
                                        </td>

                                        <td>
                                            {
                                                value.accessorySize.quantity < 1 ?
                                                    <img alt="sold out"
                                                         src="https://w7.pngwing.com/pngs/514/528/png-transparent-sold-out-text-overlay-safety-management-architectural-engineering-convention-business-sold-out-miscellaneous-text-logo.png"/> :
                                                    <img src={value.accessorySize.accessory.thumbnailImg} alt="helios"/>
                                            }
                                        </td>

                                        <td className="text-left">
                                            {
                                                value.accessorySize.accessory.name
                                            }
                                        </td>
                                        <td>
                                            {
                                                value.accessorySize.size.name
                                            }
                                        </td>
                                        <td className="text-center">
                                            $ {USD.format(value.accessorySize.price)}
                                        </td>
                                        <td className="">
                                            <div className="cart-quantity">
                                                <button
                                                    onClick={() => editQuantity(0, value.id, value.quantity, value.accessorySize)}
                                                    className="btn-quantity"><i className="bi bi-dash-lg"></i></button>
                                                <input disabled value={value.quantity}
                                                       className="text-center text-light mx-1"/>
                                                <button
                                                    onClick={() => editQuantity(1, value.id, value.quantity, value.products)}
                                                    className="btn-quantity"><i className="bi bi-plus-lg"></i></button>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            $ {USD.format((value.accessorySize.price * value.quantity))}
                                        </td>
                                    </tr>
                                )
                            )) : (<div>a</div>)}

                            </tbody>
                        </Table>
                    </div>
                    <div className="col-lg-4">
                        <div id="sticky-col" className="p-3" style={{border: 'solid 1px #fff'}}>
                            <h4>Checkout</h4>
                            {shoppingCart[0] && (
                                <>
                                    <div className="w-100 mt-4 d-flex"><b className="col-4">Email:</b> {shoppingCart[0].user.email}</div>
                                    <div className="w-100 mt-4 d-flex"><b className="col-4">Full Name:</b> {shoppingCart[0].user.name}</div>
                                    <div className="w-100 mt-4 d-flex"><b className="col-4">Phone Number:</b> {shoppingCart[0].user.phoneNumber}</div>
                                    <div className="w-100 mt-4 d-flex"><b className="col-4">Address:</b> {shoppingCart[0].user.address}</div>
                                </>
                            )}
                            <div className="w-100 row d-flex mt-4 ">
                                <div className="col-4 fw-bold">
                                    Total:
                                </div>
                                <div className="col-8"> $ {USD.format(totalPriceAll)}</div>
                            </div>
                            <div className="mt-4">
                                {/*<PayPalButton*/}
                                {/*    */}
                                {/*/>*/}

                                    <PayPalButton
                                        amount={totalPriceAll}
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={(details, data) => {
                                            paymentt()

                                            // OPTIONAL: Call your server to save the transaction
                                            return fetch("/paypal-transaction-complete", {
                                                method: "post",
                                                body: JSON.stringify({
                                                    orderID: data.orderID
                                                })
                                            });
                                        }}
                                        onError={(e) =>{
                                            toast.error("Payment fail!!")
                                        }}
                                    />


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}