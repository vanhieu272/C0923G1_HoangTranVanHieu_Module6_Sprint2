import Carousel from 'react-bootstrap/Carousel';
import HeaderSalesPage from "../Header/HeaderSalesPage";
import Card from 'react-bootstrap/Card';
import "./HomePage.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import React, {useEffect, useState} from "react";
import Footer from "../Foooter/Footer";
import {Link} from "react-router-dom";
import * as service from "../../service/AccessoryService";
import LoadingData from "../LoadingData/LoadingData";


export default function HomePage() {
    document.title = "Helios";

    const [listNewProducts, setListNewProducts] = useState([]);
    const [listFeatureProducts, setListFeatureProducts] = useState([]);
    const getFeatureProducts = async () => {
        try{
            let rs = await service.getFeatureAccessory();
            setListFeatureProducts(rs);
        }catch (e){
            console.log(e);
        }
    }
    const getNewProducts = async () => {
        try{
            let rs = await service.getNewAccessory();
            setListNewProducts(rs);
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        getFeatureProducts();
        getNewProducts();
    }, []);

    // if(listNewProducts == null){
    //     return (
    //         <>
    //             <LoadingData></LoadingData>
    //         </>
    //     )
    // }


    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src="https://heliosglobalbrand.com/cdn/shop/files/1950x866_5_2100x.jpg?v=1712054625&quot"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src="https://heliosglobalbrand.com/cdn/shop/files/web.jpg?v=1712051349"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src="https://heliosglobalbrand.com/cdn/shop/files/1950X866-min_2100x.jpg?v=1709883270"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/*Sản phẩm nổi bật */}
            <div className="container mt-5" id="outstanding-products">
                <h2 className="py-4 text-uppercase">FEATURED PRODUCTS</h2>
                <Carousel controls={true} indicators={false} interval={null} wrap={true} pause={false}>
                    {listFeatureProducts.reduce((acc, product, index) => {
                        if (index % 4 === 0) {
                            acc.push([]);
                        }
                        acc[acc.length - 1].push(product);
                        return acc;
                    }, []).map((group, groupIndex) => (
                        <Carousel.Item key={groupIndex}>
                            <div className="row d-flex">
                                {group.map(product => (
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2" key={product.id}>
                                        <Card className="border-0">
                                            <div className="image-container">
                                                <Link to="#">
                                                    <Card.Img variant="top" className="rounded-0" src={product.accessory.thumbnailImg}/>
                                                </Link>
                                            </div>
                                            <Card.Body className="bg-black text-light">
                                                <Card.Title className="fw-bold">{product.accessory.name}</Card.Title>
                                                <Card.Subtitle className="product-price">From {product.price} $</Card.Subtitle>
                                                <div className="row d-flex mt-4">
                                                    <div className="col-12">
                                                        <Link to={`/detail/${product.accessory.id}`}>
                                                            <Button variant="outline-light"
                                                                    className="w-100 border-2 border-white">More Detail >> </Button>
                                                        </Link>                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>

            </div>

            {/*Sản phẩm mới*/}
            <div className="container mt-5" id="outstanding-products">
                <h2 className="py-4 text-uppercase">LATEST PRODUCTS</h2>
                <Carousel controls={true} indicators={false} interval={null} wrap={true} pause={false}>
                    {listNewProducts.reduce((acc, product, index) => {
                        if (index % 4 === 0) {
                            acc.push([]);
                        }
                        acc[acc.length - 1].push(product);
                        return acc;
                    }, []).map((group, groupIndex) => (
                        <Carousel.Item key={groupIndex}>
                            <div className="row d-flex">
                                {group.map(product => (
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2" key={product.id}>
                                        <Card className="border-0">
                                            <div className="image-container">
                                                <Link to="#">
                                                    <Card.Img variant="top" className="rounded-0" src={product.accessory.thumbnailImg}/>
                                                </Link>
                                            </div>
                                            <Card.Body className="bg-black text-light">
                                                <Card.Title className="fw-bold">{product.accessory.name}</Card.Title>
                                                <Card.Subtitle className="product-price">From: {product.price} $</Card.Subtitle>
                                                <div className="row d-flex mt-4">
                                                    <div className="col-12">
                                                        <Link to={`/detail/${product.accessory.id}`}>
                                                            <Button variant="outline-light"
                                                                    className="w-100 border-2 border-white">More Detail >></Button>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div style={{height: "300px", border: "2px solid white"}} className="row my-5 bg-dark mx-1 ">
                    <div className="text-center d-flex col-lg-5 col-md-12 align-items-center justify-content-center">
                        <div>
                            <img height="100px" width="100px" alt="logo" src="https://cdn.shopify.com/s/files/1/0589/2105/8473/files/logo_helios_global-04_fcf9e310-5d8e-4683-87a6-a44af8be4b41.png?v=1669087390"/>
                        </div>
                       <div className="text-light ms-4">
                           <p className="text-uppercase">H E L I <span className="text-warning">0</span> S</p>
                           <p className="text-uppercase">JEWELRY DESIGN STUDIO </p>

                       </div>
                    </div>
                    <div className="col-lg-7 col-md-12 d-flex justify-content-center align-items-center">
                        <div className="text-light me-5">
                            <p className="text-uppercase">
                                Helios Global - Handcrafted Jewelry Brand, 100% crafted from solid silver, perfected by the hands of the most skilled jewelers. Free lifetime warranty on all creations made at Helios Global.
                            </p>
                            <p className="text-uppercase fst-italic opacity-75">
                                Helios Global is inspired by Founder and Designer drawing inspiration from natural textures, antiquities and cutting-edge materials.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}