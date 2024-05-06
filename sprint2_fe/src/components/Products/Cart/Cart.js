import HeaderSalesPage from "../../Header/HeaderSalesPage";
import Footer from "../../Foooter/Footer";
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState} from "react";
import "./Cart.css";
import Form from "react-bootstrap/Form";
import {Field, Formik} from "formik";
import {PayPalButton} from "react-paypal-button-v2";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import * as service from "../../../service/AccessoryService";

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
    const paymentt =async () => {
        try {
            const rs =await service.createOrder()
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
            confirmButtonText: "Oke"
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
            title: `Do you want to remove a product named <span class='al'> ${name} </span> from the cart?`,
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
                               <th className="text-center">Price</th>
                               <th className="text-center">Quantity</th>
                               <th className="text-center">Total</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                               <td><button id="remove-product"><i className="bi bi-x-octagon"></i></button></td>
                               <td>
                                   <img src="https://heliosglobalbrand.com/cdn/shop/files/lotus-arrow-v2-helios_3_1728x.jpg?v=1713868999" alt="helios"/>

                               </td>
                               <td className="text-left">
                                   Lotus Ring V2 Helios
                               </td>
                               <td className="text-center">
                                   $95.00
                               </td>
                               <td className="">
                                   <div className="cart-quantity">
                                       <button className="btn-quantity"><i className="bi bi-dash-lg"></i></button>
                                       <input className="text-center text-light mx-1" />
                                       <button className="btn-quantity"><i className="bi bi-plus-lg"></i></button>
                                   </div>
                               </td>
                               <td className="text-center">
                                   $355.00
                               </td>
                           </tr>
                           </tbody>
                       </Table>
                   </div>
                   <div className="col-lg-4">
                        <div id="sticky-col" className="p-3" style={{border: 'solid 1px #fff'}}>
                            <h4>Checkout</h4>
                            <Formik initialValues={
                                {
                                    email : "",
                                    name: "",
                                    phoneNumber:"",
                                    address: ""
                                }

                            }>
                            <Form>
                                <Field name="email" type="text" className="w-100 mt-4" placeholder="Email">

                                </Field>
                                <Field name="name" type="text" className="w-100 mt-4" placeholder="Full name">

                                </Field>
                                <Field name="phoneNumber" type="text" className="w-100 mt-4" placeholder="Phone number">

                                </Field>
                                <Field name="address" type="text" className="w-100 mt-4" placeholder="Address">

                                </Field>
                                <div className="row d-flex mt-4">
                                    <p>
                                        Total:
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <PayPalButton/>
                                </div>
                            </Form>
                            </Formik>
                        </div>
                   </div>

                </div>
            </div>
        </>
    )

}