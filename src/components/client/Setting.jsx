import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { storage } from '../../config/firebase';
export const Setting = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(u => u.user.currentUser)
    const [changeInfo, setChangeInfo] = useState(currentUser)
    // const [imgURL, setImgURL] = useState({})

    // img lên firebase
    const handleAvatar = async (file) => {
        let path = `/imageUsers/${file[0].name}`;

        const storageRef = ref(storage, path);
        let response = await uploadBytes(storageRef, file[0]);
        let imgUploaded = await getDownloadURL(response.ref);
        setChangeInfo({ ...changeInfo, image: imgUploaded })
    }
    const handleUpdate = () => {
        // console.log(changeInfo)
        dispatch({ type: "UPDATE_USER", payload: changeInfo })
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
                            <h1 className="pt-5">Settings</h1>
                            <p className="lead">Update Your Account Info</p>
                        </div>
                    </div>
                </div>
                <section id="checkout">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xs-12 col-sm-6">
                                <h5 className="mb-3">ACCOUNT DETAILS</h5>
                                {/* Bill Detail of the Page */}
                                <form action="#" className="bill-detail">
                                    <fieldset>
                                        <div className="form-group row">
                                            <div className="col">
                                                <input
                                                    className="form-control"
                                                    placeholder="avatar"
                                                    type="file"
                                                    onChange={(e) => handleAvatar(e.target.files)}
                                                />
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <div className="col">
                                                <input
                                                    className="form-control"
                                                    placeholder="fullname"
                                                    type="text"
                                                    defaultValue={currentUser.fullName}
                                                    onChange={(e) => setChangeInfo({ ...changeInfo, fullName: e.target.value })}
                                                />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                placeholder="Address"
                                                defaultValue={currentUser.address == undefined ? '' : currentUser.address}
                                                onChange={(e) => setChangeInfo({ ...changeInfo, address: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col">
                                                <input
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                    type="email"
                                                    defaultValue={currentUser.email}
                                                    onChange={(e) => setChangeInfo({ ...changeInfo, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    type="tel"
                                                    defaultValue={currentUser.phone}
                                                    onChange={(e) => setChangeInfo({ ...changeInfo, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                placeholder="Password"
                                                type="password"
                                                onChange={(e) => setChangeInfo({ ...changeInfo, password: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group text-right">
                                            <a onClick={() => handleUpdate()} className="btn btn-primary">
                                                UPDATE
                                            </a>
                                            <div className="clearfix"></div>
                                        </div>
                                    </fieldset>
                                </form>
                                {/* Bill Detail of the Page end */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
