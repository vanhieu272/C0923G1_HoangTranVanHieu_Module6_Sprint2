import HeaderSalesPage from "../Header/HeaderSalesPage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ReactPaginate from "react-paginate";
import Footer from "../Foooter/Footer";
import {Link} from "react-router-dom";

export default function AllProducts() {
    document.title = "Helios's Products"
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

    return (
        <>
            <HeaderSalesPage></HeaderSalesPage>
            <div className="container" style={{marginTop: "5%"}}>
                <h2>ALL PRODUCTS</h2>
                <hr className="text-light" />
                <div className="search-row d-flex justify-content-center py-4">
                    <div className="mx-4">
                        <select className="bg-light-subtle h-100 rounded-1">
                            <option>
                               ALL PRODUCTS
                            </option>
                            <option>
                                RINGS
                            </option>
                            <option>
                                BRACELETS
                            </option>
                            <option>
                                EARRINGS
                            </option>
                            <option>
                                NECKLACES
                            </option>
                        </select>
                    </div>
                    <div className="mx-4">
                        <select className="bg-light-subtle h-100 rounded-1">
                            <option>
                                FREESIZE
                            </option>
                            <option>
                                SIZE 4
                            </option>
                            <option>
                                SIZE 5
                            </option>
                            <option>
                                SIZE 6
                            </option>
                            <option>
                                SIZE 7
                            </option>
                            <option>
                                SIZE 8
                            </option>
                            <option>
                                SIZE 9
                            </option>
                            <option>
                                SIZE 10
                            </option>
                            <option>
                                SIZE 11
                            </option>

                        </select>
                    </div>
                    <div className="mx-4">
                        <select className="bg-light-subtle h-100 rounded-1">
                            <option>
                               ALL PRICES
                            </option>
                            <option>
                                LESS THAN 200$
                            </option>
                            <option>
                                200$ - 500$
                            </option>
                            <option>
                                500$ - 1000$
                            </option>
                            <option>
                                MORE THAN 1000$
                            </option>
                        </select>
                    </div>
                    <div className="mx-4 w-25"><input className="h-100 w-100 rounded-1 bg-light-subtle border-1 border-light"/></div>
                    <div>
                        <button className="rounded-1 btn btn-outline-light rounded-1"><i
                            className="bi bi-arrow-right-circle-fill"></i></button>
                    </div>
                </div>

                <div id="list-products" className="mt-4">
                    <div className="row">
                        {cards.map(card=>(
                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 my-3">
                                <Card key={card.id} className="border-0">
                                    {/*<Card.Img variant="top" className="rounded-0"*/}
                                    {/*          src="https://heliosglobalbrand.com/cdn/shop/files/balance-ring-helios_3_1728x.jpg?v=1709875271"/>*/}
                                    <div className="image-container">
                                        <Link to="#">
                                            <Card.Img variant="top" className="rounded-0" src="https://heliosglobalbrand.com/cdn/shop/files/balance-ring-helios_3_1728x.jpg?v=1709875271"/>
                                        </Link>
                                    </div>
                                    <Card.Body className="bg-black text-light">
                                        {/*<Card.Title>{card.title}</Card.Title>*/}
                                        <Card.Title>Helios Lotus Ring</Card.Title>
                                        <Card.Subtitle className="product-price">Price: 147$</Card.Subtitle>
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
                                                        className="w-100 border-2 border-white">Add to cart</Button>
                                            </div>
                                        </div>
                                        {/* Add other card content as needed */}
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" d-flex justify-content-center align-items-center my-4">
                    <ReactPaginate
                        forcePage="curent"
                        breakLabel="..."
                        nextLabel="Next"
                        previousLabel="Prev"
                        onPageChange="{handlePageClick}"
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={2}
                        pageCount={10}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            </div>
            <Footer></Footer>


        </>
    )
}