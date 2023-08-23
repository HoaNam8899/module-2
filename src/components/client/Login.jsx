import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const navigate = useNavigate()
    // lấy tất cả user về để kiểm tra
    const dispatch = useDispatch()

    const currentUser = useSelector(u => u.user.currentUser)
    // all user
    const allUser = useSelector(u => u.user.allUser)

    const [login, setlogin] = useState({})
    const handleLogin = (e) => {
        e.preventDefault();
        let result = [...allUser].filter(x => x.username == login.username && x.password == login.password);
        if (result.length > 0) {
            dispatch({ type: 'CURRENT_USER', payload: result[0] })
            navigate('/')
        } else {
            confirm('Sai tài khoản hoặc mật khẩu')
        }
    }


    return (
        <>
            <div id="page-content" className="page-content">
                <div className="banner">
                    <div
                        className="jumbotron jumbotron-bg text-center rounded-0"
                        style={{ backgroundImage: 'url("../../../assets/img/bg-header.jpg")' }}
                    >
                        <div className="container">
                            <h1 className="pt-5">Login Page</h1>
                            <p className="lead">Save time and leave the groceries to us.</p>
                            <div className="card card-login mb-5">
                                <div className="card-body">
                                    <form className="form-horizontal" action="index.html">
                                        <div className="form-group row mt-3">
                                            <div className="col-md-12">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    required=""
                                                    placeholder="Username"
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setlogin({ ...login, username: e.target.value });
                                                        dispatch({ type: "GET_ALL_USER" });
                                                    }}

                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    required=""
                                                    placeholder="Password"
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setlogin({ ...login, password: e.target.value })
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12 d-flex justify-content-between align-items-center">
                                                <div className="checkbox">
                                                    <input id="checkbox0" type="checkbox" name="remember" />
                                                    <label htmlFor="checkbox0" className="mb-0">
                                                        {" "}
                                                        Remember Me?{" "}
                                                    </label>
                                                </div>
                                                <a className="text-light">
                                                    <i className="fa fa-bell" /> Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="form-group row text-center mt-4">
                                            <div className="col-md-12">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-block text-uppercase"
                                                    onClick={(e) => handleLogin(e)}
                                                >
                                                    Log In
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
