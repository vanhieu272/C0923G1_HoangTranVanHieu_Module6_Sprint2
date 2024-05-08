import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as service from "../../../service/AccessoryService";
import {useSearchTermContext} from "./SearchTermContext";
import React from "react";
import Slider from "@mui/material/Slider";
import "./Search.css";
import LoadingData from "../../LoadingData/LoadingData";
import ReactPaginate from "react-paginate";


export default function Search() {
    const {searchTerm, setSearchTerm} = useSearchTermContext();

    const [listProducts, setListProducts] = useState([]);
    const [name, setName] = useState(searchTerm);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(999999999);
    const [category, setCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [sizeId, setSizeId] = useState(1);
    const [sortDirection, setSortDirection] = useState("ASC");
    const [listCategory, setListCategory] = useState([]);
    const [listSize, setListSize] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();


    const getListSizes = async () =>{
        const rs = await service.getAllSize();
        setListSize(rs);
    }

    useEffect(() => {
        getListSizes()
    }, []);

    const fetchApi = async () => {
        try {
            const rs = await service.searchAccessory(searchTerm, minPrice, maxPrice, sizeId, category, sortDirection, 0)
            setListProducts(rs.content);
            setTotalPages(rs.totalPages);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchApi(searchTerm, minPrice, maxPrice, sizeId, category, sortDirection, 0)
    }, []);


    const handleClearSearch = () => {
        setSearchTerm("");
        fetchApi();
    }


    const [range, setRange] = useState([0, 500]);
    const handleChanges = (event, newValue) => {
        setRange(newValue);
        console.log(newValue, "newValue")
    }
    const handleMouseUp = () => {
        setMinPrice(range[0]);
        setMaxPrice(range[1]);
        setCurrentPage(0);
    };

    // useEffect(() => {
    //     fetchApi()
    // }, [searchTerm, minPrice, maxPrice, sizeId]);

    const USD = new Intl.NumberFormat('US', {
        style: 'decimal', // Sử dụng kiểu số thập phân
        minimumFractionDigits: 2, // Số lượng số thập phân tối thiểu là 0
        maximumFractionDigits: 2, // Số lượng số thập phân tối đa cũng là 0
    });

    const handleChangeSize = (event) => {
        setSizeId(parseInt(event.target.value));
        setCurrentPage(0);
    }

    const handleChangeSort = (event) => {
        const sortValue = event.target.value;
        setSortDirection(sortValue);
    }

    const handlePageClick = async (event) => {
        try {
            const pageNumber = event.selected;
            setCurrentPage(pageNumber);
            // Gọi fetchData với currentPage mới
            fetchData(pageNumber);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchData = async (page) => {
        try {
            const result = await service.searchAccessory(searchTerm, minPrice, maxPrice, sizeId, category, sortDirection, page);
            setListProducts(result.content);
            setTotalPages(result.totalPages);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage, searchTerm, minPrice, maxPrice, sizeId, sortDirection]);





    return (
        <>
            <div className="container" style={{marginTop: "5%"}}>

                <h2>Search</h2>
                <hr className="text-light"/>
                <div id="list-products" className="mt-5 row">
                    <div  className="col-lg-3 col-md-3 col-sm-0 pe-5">
                        <div id="sticky-search">
                            <h5>Price (USD)</h5>
                            <div className="row d-flex mx-1 px-0 my-3">
                                <input disabled className="scroll-price col-4" value={USD.format(range[0])}></input>
                                <div className="col-4 text-center"> ━━</div>
                                <input disabled className="scroll-price col-4" value={USD.format(range[1])}></input>
                            </div>
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                disableSwap
                                value={range}
                                onChange={handleChanges}
                                onMouseUp={() => handleMouseUp()}
                                min={0}
                                max={500}
                                step={10}
                                valueLabelDisplay='auto'
                                color="light"
                            />

                            <hr className="text-white"></hr>
                            <div className="row d-flex justify-content-between">
                                <div className="col-6"><h5>Size</h5></div>
                                <div className="col-6"><h5 className="text-end">Size guide</h5></div>
                            </div>
                            <div className="row">
                                {
                                    listSize && listSize.map((item, index) =>(
                                        <div className="d-flex my-1">
                                            <input defaultChecked={index === 0} onChange={handleChangeSize} className="form-check-input" id={item.id} key={item.id} type="radio" name="size" value={item.id} />
                                            <label className="form-check-label ps-2" htmlFor={item.id}>{item.name}</label>
                                        </div>
                                    ) )
                                }
                                <h6>Unavailable sizes?<i> <Link id="note" to="#">Pre-order</Link></i></h6>
                            </div>
                            <hr className="text-white"/>
                            <div className="row mt-3">
                                <h5>Sort by:</h5>
                                <div className="d-flex my-1">
                                    <input defaultChecked onChange={handleChangeSort} className="form-check-input" id="sort" type="radio" name="sort" value="ASC" />
                                    <label className="form-check-label ps-2" htmlFor="sort">Min price first</label>
                                </div>
                                <div className="d-flex my-1">
                                    <input onChange={handleChangeSort} className="form-check-input" id="sort" type="radio" name="sort" value="DESC" />
                                    <label className="form-check-label ps-2" htmlFor="sort">Max price first</label>
                                </div>

                            </div>
                        </div>
                        {/*<hr className="text-white" />*/}

                    </div>
                    <div className="col-lg-9">
                        {
                            (listProducts == null) ? (
                                <>
                                    <h3>Not found</h3>
                                </>
                            ) : (
                                <div className="row">
                                    {searchTerm !== "" && (
                                        <h4>Results for '{searchTerm}' <i style={{cursor: 'pointer'}} onClick={handleClearSearch}
                                                                          className="bi bi-x-circle "></i></h4>
                                    )}
                                    {listProducts && listProducts.map(product => (
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3">
                                            <Card key={product.accessory.id} className="border-0">
                                                <div className="image-container">
                                                    <Link to={`/detail/${product.accessory.id}`}>
                                                        <Card.Img variant="top" className="rounded-0"
                                                                  src={product.accessory.thumbnailImg}/>
                                                    </Link>
                                                </div>
                                                <Card.Body className="bg-black text-light">
                                                    <Card.Title>{product.accessory.name}</Card.Title>
                                                    <Card.Subtitle
                                                        className="product-price">From: {USD.format(product.price)}$</Card.Subtitle>
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
                            )
                        }

                    </div>
                </div>

                <div id="paginate" className=" d-flex justify-content-end align-items-end my-4">
                    {listProducts ? (
                        <div className="d-flex justify-content-center align-items-center">
                            <ReactPaginate
                                forcePage={currentPage}
                                breakLabel="..."
                                nextLabel="Trang sau"
                                previousLabel="Trang trước"
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
                    ) : (<div></div>)
                    }
                </div>
            </div>
        </>
    )
}