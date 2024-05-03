import Table from "react-bootstrap/Table";
import React from "react";

export default function OrderHistory(){

    return(
        <>
            <div className="container mt-5">
                <h2 className="my-3">Shopping cart</h2>
                <hr className="text-light"/>
                <div className="row mt-5">
                    <div>
                        <Table responsive="sm" variant="#282828">
                            <thead>
                            <tr>
                                <th>Invoice code</th>
                                <th>Product</th>
                                <th></th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Size</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Due date</th>
                                <th className="text-center">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>HL-0001</td>
                                <td>
                                    <img src="https://heliosglobalbrand.com/cdn/shop/files/lotus-arrow-v2-helios_3_1728x.jpg?v=1713868999" alt="helios"/>

                                </td>
                                <td className="text-left">
                                    Lotus Ring V2 Helios
                                </td>
                                <td className="text-center">
                                    $95.00
                                </td>
                                <td className="text-center">
                                    Size 14
                                </td>
                                <td className="text-center">
                                    12
                                </td>
                                <td className="text-center">
                                    27/04/2024
                                </td>
                                <td className="text-center">
                                    $355.00
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <div className="mb-5">
                            <i style={{color: '#FEB31F'}}>* You have paid a total of $2400 for 13 items. Thank you for your continued trust and support.</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}