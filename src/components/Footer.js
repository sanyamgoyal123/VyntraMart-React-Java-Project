import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';
const FooterPage = () => {
    return (
        <div className="foot-box">
            <MDBFooter className="font-small pt-1 mt-1">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="12" className="footer-text">
              <h5 className="title link-color">Vyntra Mart</h5>
              <p className="link-color">
                We know Fashion
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
             <p className="link-color">Copyright: &copy; {new Date().getFullYear()} </p> <a href="#" className="link-color"> VyntraMart.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
        </div>
      
    );
  }
  
  export default FooterPage;