import "./SignIn.css";

export default function SignIn() {

    return (
        <>
            <div className="background-sign">
                <form className="form">
                    <div className="form-title"><span>Sign in</span></div>
                    <div className="title-2 mt-2"><span>HELI<span style={{color: "#FEB31F"}}>O</span>S</span></div>
                    <div className="input-container mt-2">
                        <input className="input-mail w-100" type="email" placeholder="Enter email"/>
                        <span> </span>
                    </div>

                    <section className="bg-stars">
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                    </section>

                    <div className="input-container mt-2">
                        <input className="input-pwd  w-100" type="password" placeholder="Enter password"/>
                    </div>
                    <button type="submit" className="submit mt-2">
                        <span className="sign-text">Sign in</span>
                    </button>

                    <p className="signup-link mt-2">
                        No account?
                        <a href="" className="up ms-1">Sign up!</a>
                    </p>

                </form>
            </div>

            </>
            )
            }