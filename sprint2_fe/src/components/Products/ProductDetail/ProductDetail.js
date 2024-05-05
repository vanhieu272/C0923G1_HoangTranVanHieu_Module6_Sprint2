import React, {useEffect, useRef, useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./ProductDetail.css";
import {Link, useParams} from "react-router-dom";
import * as service from "../../../service/AccessoryService";
import LoadingData from "../../LoadingData/LoadingData";


export default function ProductDetail() {

    const {id} = useParams();
    // const [product, setProduct] = useState();
    const [listProducts, setListProducts] = useState();
    const [listSizes, setListSizes] = useState([])
    const [imgIndex, setImgIndex] = useState(0);
    const [imagePaths, setImagePaths] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeChange = (event) => {
        const selectedSize = event.target.value;
        setSelectedSize(selectedSize);
    };


    const USD = new Intl.NumberFormat('US', {
        style: 'decimal', // Sử dụng kiểu số thập phân
        minimumFractionDigits: 2, // Số lượng số thập phân tối thiểu là 0
        maximumFractionDigits: 2, // Số lượng số thập phân tối đa cũng là 0
    });



    const handleSelectImage = (selectedIndex) => {
        setImgIndex(selectedIndex);
    };
    const findProductsById = async () => {
        const rs = await service.findAccessoryById(id);
        setListProducts(rs);
        console.log(rs)
        setImagePaths(rs[0].accessory.imageList)
    }

    useEffect(() => {
        findProductsById();
    }, []);



    if (listProducts == null) {
        return(
        <div>
            <LoadingData></LoadingData>
        </div>)
    }

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
                                        src={imagePath.linkImg}
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
                                            src={imagePath.linkImg}
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
                        <h3 className="my-3">{listProducts[0].accessory.name}</h3>
                        <h5 className="my-3" style={{color: '#FEB31F'}}>${USD.format(listProducts.find(item => item.size.name === selectedSize)?.price || listProducts[0].price)}</h5>


                        <div className="row mt-5 justify-content-space-between ">
                            <div className="col-lg-6 col-md-12 col-sm-12 fs-5">Size</div>
                            <div className="col-lg-6 col-md-12 col-sm-12 text-end"><Link className="text-decoration-none text-white fs-5 pe-0" to={"/guide"}>Size guide</Link></div>
                        </div>
                        <div className="row mt-3 mx-0">
                            <select id="select-size" onChange={handleSizeChange} multiple>
                                {
                                    listProducts && listProducts.map((item) => (
                                            <option key={item.id} value={item.size.name}>{item.size.name}</option>
                                        )
                                    )
                                }
                            </select>
                        </div>
                        <div className="row mt-3">
                            <p className="fs-5">In stock: {listProducts.find(item => item.size.name === selectedSize)?.quantity || listProducts[0].quantity}</p>
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
                            <p style={{whiteSpace: 'pre-line'}}>
                                {listProducts[0].accessory.description}
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