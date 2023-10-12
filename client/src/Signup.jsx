import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/register',{name,email,password})
        .then(result=>{
            console.log(result);
            navigate('/login');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                />
                <title>Sign up form</title>
                <style type="text/css">
                    {`
                        body {
                            padding-top:100px;
                            background-color: powderblue;
                        }
                        .form-signup {
                            margin: 0 auto;
                            max-width: 400px;
                            background-color: white;
                            padding: 15px;
                        }
                        .form-signup h2,
                        p {
                            text-align: center;
                        }
                        #butt {
                            text-align: center;
                            position: relative;
                            right: 14px;
                            top: 15px;
                            padding-top: 10px;
                            border-radius: 0px;
                        }
                        .acc {
                            text-align:center;
                            margin-top:0;
                            position:relative;
                            top:30px;
                        }
                    `}
                </style>
            </head>
            <body>
                <div className="container">
                    <form action="" className="form-signup" onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <p>Create your account!</p>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="firstname" placeholder="First name" className="form-control" onChange={(e)=>{
                                        setName(e.target.value)
                                    }}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="lastname" placeholder="Last name" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Enter your email ID" className="form-control" onChange={(e)=>{
                                setEmail(e.target.value)
                            }}/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Enter password" className="form-control" onChange={(e)=>{
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ position: 'relative', top: '12px' }}>
                                <input type="checkbox" />
                                I accept the <a href="#">Terms of Use</a>& <a href="#">Privacy Policy</a>
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="acc">
                                Already have an account?{' '}
                                <Link to="/login" className="btn btn-primary" style={{ marginLeft: '10px' }}>
                                    Login
                                </Link>
                            </label>
                        </div>

                        <input
                            type="submit"
                            className="btn btn-success"
                            value="SUBMIT"
                            style={{ width: '400px', borderRadius: '0px', marginTop: '30px' }}
                            id="butt"
                        />
                    </form>
                </div>
            </body>
        </html>
    );
};

export default Signup;
