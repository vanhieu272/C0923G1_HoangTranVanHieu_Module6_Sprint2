import "../SignIn/SignIn.css"

export default function SignUp() {

    return (
        <>
            <div className="background-sign">
                <form className="form mt-0">
                    <div className="form-title"><span>Sign up</span></div>
                    <div className="title-2 mt-2"><span>HELI<span style={{color: "#FEB31F"}}>O</span>S</span></div>
                    <div className="input-container mt-2">
                        <input className="input-pwd  w-100" type="text" placeholder="Full name"/>
                    </div>
                    <div className="input-container mt-2">
                        <input className="input-mail w-100" type="email" placeholder="Username"/>
                        <span> </span>
                    </div>

                    <section className="bg-stars">
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                    </section>

                    <div className="input-container mt-2">
                        <input className="input-pwd  w-100" type="password" placeholder="Password"/>
                    </div>
                    <div className="input-container mt-2">
                        <select className="input-pwd">
                            <option>
                                Male
                            </option>
                            <option>
                                Female
                            </option>
                        </select>
                    </div>

                    <div className="input-container mt-2">
                        <input className="input-pwd  w-100" type="date" placeholder="Day of birth"/>
                    </div>

                    <div className="input-container mt-2">
                        <input className="input-pwd  w-100" type="text" placeholder="Email"/>
                    </div>

                    <div className="input-container mt-2">
                        <input className="input-pwd  w-100" type="text" placeholder="Address"/>
                    </div>
                    <div className="input-container mt-2">
                        <input className="input-pwd  w-100" type="text" placeholder="Phone number"/>
                    </div>
                    <button type="submit" className="submit mt-3">
                        <span className="sign-text">Create account</span>
                    </button>

                    <p className="signup-link mt-2">
                        Have account?
                        <a href="" className="up ms-1">Sign in!</a>
                    </p>

                </form>
            </div>
        </>
    )
}