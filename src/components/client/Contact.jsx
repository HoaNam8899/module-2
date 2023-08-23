import React from 'react'

export const Contact = () => {
    return (
        <>
            <div id="page-content" className="page-content">
                <div className="banner">
                    <div
                        className="jumbotron jumbotron-bg text-center rounded-0"
                        style={{ backgroundImage: 'url("../../../assets/img/bg-header.jpg")' }}
                    >
                        <div className="container">
                            <h1 className="pt-5">Contact</h1>
                            <p className="lead">Don't Hesitate to Contact Us.</p>
                        </div>
                    </div>
                </div>
                <section className="pb-0">
                    <div className="contact1 mb-5">
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-lg-7">
                                    <div className="contact-wrapper">
                                        <h3 className="title font-weight-normal mt-0 text-left">
                                            Send Us a Message
                                        </h3>
                                        <form data-aos="fade-left" data-aos-duration={1200}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Full Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control"
                                                            rows={3}
                                                            placeholder="Message"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-right">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-lg btn-primary mb-5"
                                                    >
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="detail-wrapper p-5 bg-primary">
                                        <h3 className="font-weight-normal mb-3 text-light">
                                            Freshcery Headquarter
                                        </h3>
                                        <p className="text-light">
                                            Jl. Petani No. 159, Cibabat
                                            <br />
                                            Cimahi Utara
                                            <br />
                                            Kota Cimahi
                                            <br />
                                            Jawa Barat 40513
                                        </p>
                                        <p className="text-light">
                                            <i className="fas fa-phone" /> 0898986362
                                            <br />
                                            <i className="fas fa-envelope" /> hello@freshcery.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.97915747782!2d107.58270291427688!3d-6.893096195019089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e67b57d420db%3A0x4dd071fcb9157e80!2sBTC+Fashion+Mall!5e0!3m2!1sen!2sid!4v1522964715022"
                        width="100%"
                        height={450}
                        frameBorder={0}
                        style={{ border: 0 }}
                        allowFullScreen=""
                    />
                </section>
            </div>

        </>
    )
}
