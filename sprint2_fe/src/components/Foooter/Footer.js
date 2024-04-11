import {Link} from "react-router-dom";
import "./Footer.css";

export default function Footer(){

    return(
        <>
            <footer className="bg-black text-center text-light">
                <div className="text-center p-3">
                  <div className="my-5">
                      <div>
                          <Link style={{fontSize: "50px", color: "blue"}} className="mx-3 text-decoration-none" to={"#"}> <i className="bi bi-facebook"></i></Link>
                          <Link id="instagram" style={{fontSize: "50px"}} className="mx-3 text-decoration-none" to={"#"}> <i className="bi bi-instagram"></i></Link>
                          <Link style={{fontSize: "50px", color: "red"}} className="mx-3 text-decoration-none" to={"#"}> <i className="bi bi-google"></i></Link>

                      </div>
                  </div>

                    <p>© 2024 Copyright: <Link to={"#"} className="text-light" href="#">Helios.com</Link></p>

                </div>

            </footer>
        </>
    )
}