import React, {useEffect, useRef, useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./ProductDetail.css";
import HeaderSalesPage from "../../Header/HeaderSalesPage";
import {Link} from "react-router-dom";
import Footer from "../../Foooter/Footer";

export default function ProductDetail() {

    const [imgIndex, setImgIndex] = useState(0);

    const handleSelectImage = (selectedIndex) => {
        setImgIndex(selectedIndex);
    };
    const imagePaths = ["https://heliosglobalbrand.com/cdn/shop/files/S925SilverRingREDDEVILRINGHeliosSilver_3_900x.jpg?v=1690885599"
        , "https://heliosglobalbrand.com/cdn/shop/files/S925SilverRingREDDEVILRINGHeliosSilver_5_900x.jpg?v=1690885599"];

    return (
        <>

            <div id="detail-product" className="container" style={{marginTop: "5%"}}>
                <h2>DETAIL</h2>
                <hr className="text-light"/>
                <div className="row mt-4">
                    <div className="img-detail col-lg-6 col-md-12 col-sm-12">
                        <Carousel interval={null} indicators={false} activeIndex={imgIndex} onSelect={handleSelectImage}>
                            {imagePaths.map((imagePath, i) => (
                                <Carousel.Item key={i}>
                                    <img
                                        className="d-block w-100"
                                        src={imagePath}
                                        alt="product"
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                            <ol className="p-0">
                                {imagePaths.map((imagePath, i) => (
                                    <li
                                        style={{listStyleType: 'none'}}
                                        key={i}
                                        onClick={() => handleSelectImage(i)}
                                        className={i === imgIndex ? "active" : ""}
                                    >
                                        <img
                                            className="mx-3 shadow rounded-1"
                                            src={imagePath}
                                            style={{ width: '100px', height: '100px' }}
                                            alt="product"
                                        />
                                    </li>
                                ))}
                            </ol>

                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-0 p-0">

                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <h6 className="opacity-75 mt-0 mb-3">Helios's Accessory</h6>
                        <h3 className="my-3">Helios Lotus Spring Ring </h3>
                        <h5 className="my-3" style={{color: '#FEB31F'}}>$314</h5>


                        <div className="row mt-5 justify-content-space-between ">
                            <div className="col-lg-6 col-md-12 col-sm-12 fs-5">Size</div>
                            <div className="col-lg-6 col-md-12 col-sm-12 text-end"><Link className="text-decoration-none text-white fs-5 pe-0" to={"/guide"}>Size guide</Link></div>
                        </div>
                        <div className="row mt-3 mx-0">
                            <select id="select-size" multiple>
                                <option selected value="10">Size 5</option>
                                <option value="11">Size 6</option>
                                <option value="12">Size 7</option>
                                <option value="13">Size 8</option>
                                <option value="14">Size 9</option>
                                <option value="15">Size 10</option>
                                <option value="16">Size 11</option>
                                <option value="17">Size 12</option>
                                <option value="18">Size 13</option>
                                <option value="19">Size 14</option>
                                <option value="20">Size 15</option>
                            </select>
                        </div>
                        <div className="row mt-3">
                            <p className="fs-5">In stock: 13</p>
                        </div>
                        <div className="row mx-0 d-flex justify-content-between">
                            <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                                <div className="quantity">
                                    <button className="btn-quantity"><i className="bi bi-dash-lg"></i></button>
                                    <input className="text-center text-light mx-1" />
                                    <button className="btn-quantity"><i className="bi bi-plus-lg"></i></button>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12 col-sm-12 p-0">
                                <div className="add-cart">
                                    <button className="btn-add-cart"><i className="bi bi-cart fs-5 pe-2"></i>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div style={{visibility: 'hidden'}} className="row mt-3">
                            <span><i>Note: Out of stock. <Link id="note" to="#">Contact us</Link></i></span>
                        </div>
                        <div className="row mt-3">
                            <h5 className="text-light mb-3">Description</h5>
                            <p>
                                Material: S925 Silver <br/>

                                Stone: CZ Stone <br/>

                                Warranty: All of our jewelry products come with a lifetime warranty. <br/>
                                <br/>
                                Note: <br/>

                                Custom Printed Packaging Box - Style and Personality - Only at Helios Global <br/>
                                On the lid of packaging box, we will print sincere expressions of gratitude, best wishes, names, quotes, and more, according to your request. We believe that this will make the box an unique item to accompany you through the years or a meaningful gift for your loved ones and friends. <br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5" id="propose">
                    <p className="fs-2">You may also like</p>
                </div>
            </div>

        </>
    )

}