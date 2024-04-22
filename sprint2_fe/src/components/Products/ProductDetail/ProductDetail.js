import React, {useEffect, useRef, useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./ProductDetail.css";
import HeaderSalesPage from "../../Header/HeaderSalesPage";
import {Link} from "react-router-dom";

export default function ProductDetail() {

    const [imgIndex, setImgIndex] = useState(0);

    const handleSelectImage = (selectedIndex) => {
        setImgIndex(selectedIndex);
    };
    const imagePaths = ["https://heliosglobalbrand.com/cdn/shop/files/S925SilverRingREDDEVILRINGHeliosSilver_3_900x.jpg?v=1690885599"
        , "https://heliosglobalbrand.com/cdn/shop/files/S925SilverRingREDDEVILRINGHeliosSilver_5_900x.jpg?v=1690885599"];

    return (
        <>
            <HeaderSalesPage></HeaderSalesPage>
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
                    <div className="col-lg-1 col-md-1 col-sm-0">

                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <h6 className="opacity-75 mt-0 mb-3">Helios's Accessory</h6>
                        <h3 className="my-3">Helios Lotus Spring Ring </h3>
                        <h5 className="my-3" style={{color: '#FEB31F'}}>$314</h5>


                        <div className="row mt-5 justify-content-between">
                            <div className="col-lg-6 col-md-12 col-sm-12 fs-5">Size</div>
                            <div className="col-lg-6 col-md-12 col-sm-12"><Link className="text-decoration-none text-white fs-5" to={"/guide"}>Size guide</Link></div>
                        </div>
                        <div className="row">

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}