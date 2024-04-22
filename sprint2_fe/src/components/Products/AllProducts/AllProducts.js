import HeaderSalesPage from "../../Header/HeaderSalesPage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ReactPaginate from "react-paginate";
import Footer from "../../Foooter/Footer";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as service from "../../../service/AccessoryService";
import LoadingData from "../../LoadingData/LoadingData";
import HomePage from "../../HomePage/HomePage";

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
    ];

    const priceList = [
        {
            id: 1, title: "LESS THAN 200$"
        },
        {
            id: 2, title: "200$ - 500$"
        },
        {
            id: 3, title: "500$ - 1000$"
        },
        {
            id: 4, title: "MORE THAN 1000$"
        }
    ]

    const [listProducts, setListProducts] = useState([]);
    const [name, setName] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(999999999);
    const [category, setCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [size, setSize] = useState("");
    const [listCategory, setListCategory] = useState([]);
    const [listSize, setListSize] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();



    useEffect(() => {
        const fetchApi = async () => {
            try {
                const rs = await service.searchAccessory(name, minPrice, maxPrice, category, size, 0);
                setListProducts(rs.content);
                setTotalPages(rs.totalPages);
            } catch (e) {
                console.log(e);
            }
        }
        fetchApi(name, minPrice, maxPrice, category, size, 0);
    }, []);

    const getCategories = async () => {
        let rs = await service.getAllCategory();
        setListCategory(rs);
    }

    const getSizes = async () => {
        let rs = await service.getAllSize();
        setListSize(rs);
    }

    useEffect(() => {
        getCategories();
        getSizes();
    }, []);

    const handleSearchName = (value) => {
        setName(value);
    }

    const handleCategory = (value) => {
        setCategory(value);
    }

    const handlePrice = (value) => {
        if(value.id === 1){
            setMinPrice(0);
            setMaxPrice(200);
        }
        if(value.id === 2){
            setMinPrice(200);
            setMaxPrice(500);
        }
        if(value.id === 3){
            setMinPrice(500);
            setMaxPrice(1000);
        }
        if (value.id === 4){
            setMinPrice(1000);
            setMaxPrice(99999999999);
        }
    }

    const handleSize = (value) => {
        setSize(value);
    }

    const handlePageClick = async (event) => {
        try {
            const pageNumber = event.selected;
            setCurrentPage(pageNumber);
            // Gọi fetchData với currentPage mới
            await fetchData(pageNumber);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchData = async (page) => {
        try {
            const result = await service.searchAccessory(name, minPrice, maxPrice, category, size, page);
            setListProducts(result.content);
            setTotalPages(result.totalPages);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);


    useEffect(() => {
     setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);



    if (listProducts == null || isLoading){
        return (
            <>
                <LoadingData></LoadingData>
            </>
        );
    }

    return (
        <>
            <HeaderSalesPage></HeaderSalesPage>
            <div className="container" style={{marginTop: "5%"}}>

                <h2>ALL PRODUCTS</h2>
                <hr className="text-light"/>
                <div id="list-products" className="mt-4">
                    <div className="search-row d-flex justify-content-center py-4">
                        <div className="mx-4">
                            <select className="bg-light-subtle h-100 rounded-1">
                                <option value="">
                                    ALL PRODUCTS
                                </option>
                                {
                                    listCategory.map((item) =>
                                        <option key={item.id} value="{item.name}">{item.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="mx-4">
                            <select className="bg-light-subtle h-100 rounded-1">
                                <option>
                                    FREESIZE
                                </option>
                                {
                                    listSize.map((item) =>
                                        <option key={item.id} value={item.name}>{item.name}</option>
                                    )
                                }

                            </select>
                        </div>
                        <div className="mx-4">
                            <select className="bg-light-subtle h-100 rounded-1">
                                <option value="">
                                    ALL PRICES
                                </option>
                                {
                                    priceList.map((item) =>
                                        <option key={item.id} value={item.id}>{item.title}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="mx-4 w-25"><input
                            className="h-100 w-100 rounded-1 bg-light-subtle border-1 border-light"/>
                        </div>
                        <div>
                            <button className="rounded-1 btn btn-outline-light rounded-1"><i
                                className="bi bi-arrow-right-circle-fill"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        {listProducts.map(product => (
                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 my-3">
                                <Card key={product.id} className="border-0">
                                        <div className="image-container">
                                        <Link to="#">
                                            <Card.Img variant="top" className="rounded-0"
                                                      src={product.thumbnailImg}/>
                                        </Link>
                                    </div>
                                    <Card.Body className="bg-black text-light">
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Subtitle className="product-price">Price: {product.price}$</Card.Subtitle>
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
                        forcePage={currentPage}
                        breakLabel="..."
                        nextLabel="Next"
                        previousLabel="Prev"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={2}
                        pageCount={totalPages}
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