import React from 'react'
import { MDBContainer, MDBRow, MDBCol,MDBFooter  } from "mdbreact";


const Footer = () => {
    return(
      <MDBFooter className="font-small back_foot">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="pt-5 pb-5">
          <MDBCol md="3">
              <div className="foo_img">
                <img src="img/logo-white-ne.png" className="img-fluid" />
              </div>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">QUICK LINKS</h5>
            <ul className="list-unstyled pt-2">
              <li className="list-unstyled pb-2">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled pb-2">
                <a href="#!">Why Athstat</a>
              </li>
              <li className="list-unstyled pb-2">
                <a href="#!">Features</a>
              </li>
              <li className="list-unstyled pb-2">
                <a href="#!">Contact us</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">QUICK LINKS</h5>
            <ul className="list-unstyled pt-2">
              <li className="list-unstyled pb-2">
                <a href="#!">Privacy</a>
              </li>
              <li className="list-unstyled pb-2">
                <a href="#!">Terms Of Use</a>
              </li>
              <li className="list-unstyled pb-2">
                <a href="#!">FAQs</a>
              </li>
              <li className="list-unstyled pb-2">
                <a href="#!">Sitemap</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title pb-2">CONTACT</h5>
            <p>1037 Pleasant St., Bridgewater MA 02324</p>
            <p><a href="#">Email: info@athstat.com</a></p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer>
            <MDBRow>
                <div className="d-flex justify-content-between align-items-center full-widths">
                    <div>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#"> Athstat.</a> All Rights Reserved. 
                    </div>
                    
                    <div className="socails">
                        <ul className="list-unstyled">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </MDBRow>
           
          
        </MDBContainer>
      </div>
    </MDBFooter>
    )
}

export default Footer;