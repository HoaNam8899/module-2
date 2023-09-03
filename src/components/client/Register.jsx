import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    useEffect(() => {
        // let id = uuidv4();
        // setRegister({ ...register, id: uuidv4() })
    })
    // check email/ username
    let check = useSelector(u => u.user.check)
    // let checkEmail = useSelector(e => e.user.checkEmail)
    // console.log('email', checkEmail)
    // console.log('name', checkUsername)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [register, setRegister] = useState({
        fullName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
    })
    const [confirmPassword, setConfirm] = useState({
        confirm: ''
    })
    const [isChecked, setIsChecked] = useState()

    const handleRegister = (e) => {
        e.preventDefault();
        if ((register.fullName == '') || (register.email == '') || (register.phone == '') || (register.username == '') || (register.password == '')) {
            confirm('Vui lòng nhập đủ thông tin!')
        } else if (confirmPassword.confirm != register.password) {
            confirm('Xác nhận mật khẩu sai!')
        } else if (check.email) {
            confirm('Email đã được đăng kí')
        } else if (check.username) {
            confirm('Tên đăng nhập đã tồn tại')
        } else if (isChecked != true) {
            confirm('Vui lòng chấp nhận điều khoản và dịch vụ')
        } 
        else {
            dispatch({ type: 'ADD_USER', payload: register })
            navigate('/login')
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
                            <h1 className="pt-5">Register Page</h1>
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
                                                    placeholder="Full Name"
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setRegister({ ...register, fullName: e.target.value });
                                                        // let id = uuidv4();
                                                        // setRegister({ ...register, id: id })

                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mt-3">
                                            <div className="col-md-12">
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    required=""
                                                    placeholder="Email"
                                                    value={register.email}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setRegister({ ...register, email: e.target.value })
                                                        dispatch({ type: "CHECK_EMAIL", payload: e.target.value })
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mt-3">
                                            <div className="col-md-12">
                                                <input
                                                    className="form-control"
                                                    type="phone"
                                                    required=""
                                                    placeholder="Phone"
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setRegister({ ...register, phone: e.target.value })
                                                        dispatch({ type: "CHECK_PHONE", payload: e.target.value })
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mt-3">
                                            <div className="col-md-12">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    required=""
                                                    placeholder="Username"
                                                    value={register.username}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setRegister({ ...register, username: e.target.value })
                                                        dispatch({ type: "CHECK_USERNAME", payload: e.target.value })
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
                                                        setRegister({ ...register, password: e.target.value })
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
                                                    placeholder="Confirm Password"
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setConfirm({ ...confirm, confirm: e.target.value })
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <div className="checkbox">
                                                    <input id="checkbox0" type="checkbox" name="terms" onChange={e => setIsChecked(e.target.checked)}/>
                                                    <label htmlFor="checkbox0" className="mb-0">
                                                        I Agree with{" "}
                                                        <a href="terms.html" className="text-light">
                                                            Terms &amp; Conditions
                                                        </a>{" "}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row text-center mt-4">
                                            <div className="col-md-12">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-block text-uppercase"
                                                    onClick={(e) => handleRegister(e)}
                                                >
                                                    Register
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
