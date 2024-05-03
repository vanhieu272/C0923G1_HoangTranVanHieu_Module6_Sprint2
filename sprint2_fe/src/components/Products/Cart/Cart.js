import HeaderSalesPage from "../../Header/HeaderSalesPage";
import Footer from "../../Foooter/Footer";
import Table from 'react-bootstrap/Table';
import React from "react";
import "./Cart.css";
import Form from "react-bootstrap/Form";
import {Field, Formik} from "formik";
import {PayPalButton} from "react-paypal-button-v2";
import {toast} from "react-toastify";
import Swal from "sweetalert2";

export default function Cart() {


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