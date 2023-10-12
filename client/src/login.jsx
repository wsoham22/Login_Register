import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://localhost:3002/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/home'); // Correctly navigates to '/home' on success
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                <title>Login Form</title>
                <style type="text/css">
                    {`
                        body {
                            padding-top: 100px;
                            background-color: powderblue;
                        }
                        .form-login {
                            margin: 0 auto;
                            max-width: 400px;
                            background-color: white;
                            padding: 15px;
                        }
                        .form-login h2,
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
                    `}
                </style>
            </head>
            <body>
                <div className="container">
                    <form action="" className="form-login" onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <p>Lets musifyy!</p>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Enter your email ID" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Enter password" className="form-control" />
                        </div>
                        <input
                            type="submit"
                            className="btn btn-success"
                            value="Login"
                            style={{ width: '400px', borderRadius: '0px', marginTop: '30px' }}
                            id="butt"
                        />
                    </form>
                </div>
            </body>
        </div>
    );
};

export default Login;
