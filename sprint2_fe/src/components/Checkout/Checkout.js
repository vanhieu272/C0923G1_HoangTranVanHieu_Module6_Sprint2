// import React, { useState } from 'react';
//
// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
// import {toast} from "react-toastify";
//
//
//
// export const Checkout = ({totalPriceAll}) => {
//     const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
//     const [currency, setCurrency] = useState(options.currency);
//
//     // const onCurrencyChange = ({ target: { value } }) => {
//     //     setCurrency(value);
//     //     dispatch({
//     //         type: "resetOptions",
//     //         value: {
//     //             ...options,
//     //             currency: value,
//     //         },
//     //     });
//     // }
//
//     const onCreateOrder = async (data,actions, total) => {
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     amount: {
//                         value: total.toString(),
//                     },
//                 },
//             ],
//         });
//     }
//
//     const onApproveOrder = (data,actions) => {
//         return actions.order.capture().then((details) => {
//             const name = details.payer.name.given_name;
//
//
//             toast.success(`Purchased successfully !!`);
//         });
//     }
//
//     return (
//         <div className="checkout">
//             {isPending ? <p>LOADING...</p> : (
//                 <>
//                     {/*<select value={currency} onChange={onCurrencyChange}>*/}
//                     {/*    <option value="USD">💵 USD</option>*/}
//                     {/*    <option value="EUR">💶 Euro</option>*/}
//                     {/*</select>*/}
//                     <PayPalButtons
//                         style={{ layout: "vertical" }}
//                         createOrder={(data, actions) => onCreateOrder(data, actions, totalPriceAll)}
//                         onApprove={(data, actions) => onApproveOrder(data, actions)}
//                     />
//                 </>
//             )}
//         </div>
//     );
// }