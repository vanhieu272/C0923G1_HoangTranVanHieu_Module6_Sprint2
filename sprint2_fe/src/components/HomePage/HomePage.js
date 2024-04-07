import Carousel from 'react-bootstrap/Carousel';
import HeaderSalesPage from "../Header/HeaderSalesPage";
import Card from 'react-bootstrap/Card';
import {Dropdown} from "react-bootstrap";
import "./HomePage.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {useState} from "react";

export default function HomePage() {
    document.title = "Helios";

    const cards = [
        {id: 1, title: "Card 1"},
        {id: 2, title: "Card 2"},
        {id: 3, title: "Card 3"},
        {id: 4, title: "Card 4"},
        {id: 5, title: "Card 5"},
        {id: 6, title: "Card 6"},
        {id: 7, title: "Card 7"},
        {id: 8, title: "Card 8"},
        // Add more sample cards as needed
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <>
            <HeaderSalesPage></HeaderSalesPage>
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
            <div className="container" id="outstanding-products">
                <h2 className="py-4 text-light text-uppercase">Phụ kiện nổi bật</h2>
                <Carousel controls={true} indicators={false}>
                    {Array.from({length: Math.ceil(cards.length / 4)}, (_, i) => (
                        <Carousel.Item key={i}>
                            <div className="d-flex">
                                {cards.slice(i * 4, i * 4 + 4).map(card => (
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
                                        <Card key={card.id} className="border-1 border-light-subtle rounded-0">
                                            <Card.Img variant="top" className="rounded-0"
                                                      src="https://heliosglobalbrand.com/cdn/shop/files/balance-ring-helios_3_1728x.jpg?v=1709875271"/>
                                            <Card.Body className="bg-black text-light">
                                                {/*<Card.Title>{card.title}</Card.Title>*/}
                                                <Card.Title>Nhẫn Helios Lotus</Card.Title>
                                                <Card.Subtitle>Giá: 3.754.000đ</Card.Subtitle>
                                                <div className="row d-flex mt-2">
                                                    <div className="col-5">
                                                        <Form.Select className="border-2 border-black">
                                                            <option value="6">Size 6</option>
                                                            <option value="6">Size 7</option>
                                                            <option value="6">Size 8</option>
                                                            <option value="6">Size 9</option>
                                                            <option value="6">Size 10</option>
                                                            <option value="6">Size 11</option>
                                                            <option value="6">Size 12</option>
                                                            <option value="6">Size 13</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="col-7">
                                                        <Button variant="outline-light"
                                                                className="w-100 border-2 border-white">Add to
                                                            cart</Button>
                                                    </div>
                                                </div>
                                                {/* Add other card content as needed */}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/*Sản phẩm mới*/}

                <h2 className="mt-3 py-4 text-light text-uppercase">Mới ra mắt</h2>
                <Carousel controls={true} indicators={false}>
                    {Array.from({length: Math.ceil(cards.length / 4)}, (_, i) => (
                        <Carousel.Item key={i}>
                            <div className="d-flex">
                                {cards.slice(i * 4, i * 4 + 4).map(card => (
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
                                        <Card key={card.id} className="border-1 border-light-subtle rounded-0">
                                            <Card.Img variant="top" className="rounded-0"
                                                      src="https://heliosglobalbrand.com/cdn/shop/files/balance-ring-helios_3_1728x.jpg?v=1709875271"/>
                                            <Card.Body className="bg-black text-light">
                                                {/*<Card.Title>{card.title}</Card.Title>*/}
                                                <Card.Title>Nhẫn Helios Lotus</Card.Title>
                                                <Card.Subtitle>Giá: 3.754.000đ</Card.Subtitle>
                                                <div className="row d-flex mt-2">
                                                    <div className="col-5">
                                                        <Form.Select className="border-2 border-black">
                                                            <option value="6">Size 6</option>
                                                            <option value="6">Size 7</option>
                                                            <option value="6">Size 8</option>
                                                            <option value="6">Size 9</option>
                                                            <option value="6">Size 10</option>
                                                            <option value="6">Size 11</option>
                                                            <option value="6">Size 12</option>
                                                            <option value="6">Size 13</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="col-7">
                                                        <Button variant="outline-light"
                                                                className="w-100 border-2 border-white">Add to
                                                            cart</Button>
                                                    </div>
                                                </div>
                                                {/* Add other card content as needed */}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div style={{height: "300px", border: "2px solid white"}} className="row my-5 bg-secondary mx-1 ">
                    <div className="col-5">

                    </div>
                    <div className="col-7">

                    </div>
                </div>

            </div>

        </>
    )
}