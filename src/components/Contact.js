import React, { Fragment } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBAnimation  } from "mdbreact";
const Contact = () => {
    return(
        <React.Fragment>
            <section className="banner py-5">
                <div className="text_title">
                    <h1>Contact</h1>
                </div>
            </section>
            <MDBAnimation reveal type="fadeInUp">
            <MDBContainer size="md" className="py-5">
                <MDBRow className="box_full">
                    <MDBCol size="12" md="7" className="p-0">
                        <div className="p-5 contact_inner">
                            <h1 className="Jersey">GET IN TOUCH</h1>
                            <p className="pt-3 p_tags">Want to get your team set up with Athstat and start
                            collecting data on your team for free?</p>
                            <MDBRow className="pt-3">
                                <MDBCol md="6" size="6">
                                <div className="form-group">
                                    <input type="email" id="exampleInput" className="form-control" placeholder="Email" />
                                </div>
                                </MDBCol>
                                <MDBCol md="6" size="6">
                                <div className="form-group">
                                    <input type="text" id="exampleInput" className="form-control" placeholder="Subject" />
                                </div>
                                </MDBCol>
                                <MDBCol size="12">
                                <div className="form-group">
                                <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                                </div>
                                </MDBCol>
                                <MDBCol size="12" className="pt-3">
                                    <Fragment>
                                        <div className="contact_btns">
                                            <MDBBtn className="m-0">SEND</MDBBtn>
                                        </div>
                                    </Fragment> 
                                </MDBCol>
                            </MDBRow>  
                        </div>
                    </MDBCol>
                    <MDBCol size="12" md="5" className="p-0">
                        <div className="m-img-c p-4 text-white">
                            <h2 className="Jersey">CONTACT <br></br> INFORMATION</h2>
                            <div className="pt-3">
                                <p>1037 Pleasant St., <br></br>Bridgewater MA 02324</p>
                                <p>Email: info@athstat.com</p>
                            </div>
                        </div>
                        <div className="maps">
                        <iframe className="maps_frs" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94924.82102231465!2d-71.04678807503073!3d41.97020684843073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e491936dc1862f%3A0x80848e0fdb046149!2sBridgewater%2C%20MA%2002324%2C%20USA!5e0!3m2!1sen!2sin!4v1598444498097!5m2!1sen!2sin" width="100%" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </MDBAnimation>
        </React.Fragment>
    )
}
export default Contact;