import "./SignIn.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import * as Yup from "yup";
import axios from "axios";
import Swal from 'sweetalert2'
export default function SignIn() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if(token){
            navigate("/")
        }
        document.title = "Login";
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className="background-sign">
                <Formik initialValues={{
                 username: "",
                 password:"",
                }}
                        validationSchema={Yup.object({
                            username: Yup.string().required("Please enter your account"),
                            password: Yup.string().required("Please enter a password"),
                        })}
                        onSubmit={async (values, {setSubmitting}) => {
                            try {
                                const response = await axios.post("http://localhost:8080/api/user/authen", values, { withCredentials: true });

                                if (response.data.token) {
                                    localStorage.setItem("token", response.data.token);
                                    localStorage.setItem("username", response.data.username);
                                    localStorage.setItem("role", response.data.role);
                                }
                                navigate("/");

                                // window.location.reload()
                            } catch (er) {
                                Swal.fire({
                                    title: "Login fail",
                                    text: "Username or password incorrect",
                                    icon: "error"
                                });
                            } finally {
                                setSubmitting(false);
                            }
                        }
                }>
                    <Form className="form">
                        <div className="form-title"><span>Sign in</span></div>
                        <div className="title-2 mt-2"><span>HELI<span style={{color: "#FEB31F"}}>O</span>S</span></div>
                        <div className="input-container mt-2">
                            <Field name="username" className="input-mail w-100" type="text" placeholder="Enter email"/>
                            <ErrorMessage
                                name="username"
                                component="span"
                                className="mx-1 text-danger"
                            />
                        </div>

                        <section className="bg-stars">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </section>

                        <div className="input-container mt-2">
                            <Field name="password" className="input-pwd w-100 my-4" type="password" placeholder="Enter password"/>
                            <ErrorMessage
                                name="password"
                                component="span"
                                className="mx-1 text-danger"
                            />
                        </div>
                        <button type="submit" className="submit mt-2">
                            <span className="sign-text">Sign in</span>
                        </button>

                        <p className="signup-link mt-2">
                            No account?
                            <a href="" className="up ms-1">Sign up!</a>
                        </p>

                    </Form>
                </Formik>
            </div>

            </>
            )
            }