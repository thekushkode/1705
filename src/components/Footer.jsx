import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";
import './1705Colors.css';
import logo3 from '../assets/Logos/1705white.jpg';

const FooterPage = () => {
    return (
        <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow >
                    <MDBCol md='6'>
                        <h5 className="title goldtext">Seventeen05</h5>
                        <p>
                            1705 Commerce Drive NW<br/>Atlanta, GA 30318
                        </p>
                    </MDBCol>
                    {/* <MDBCol md='6'>
                        <img src={logo3} alt='1705 logo' className='img-fluid d-block'/>
                    </MDBCol> */}
                    <MDBCol md='6' className='text-right'>
                        <h5 className="title goldtext">Quick Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <MDBNavLink to="/events">Events</MDBNavLink>
                            </li>
                            <li className="list-unstyled">
                                <MDBNavLink to="/spaces">Our Space</MDBNavLink>
                            </li>
                            <li className="list-unstyled">
                                <MDBNavLink to="contact">Get Connected</MDBNavLink>
                            </li>
                            {/* <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li> */}
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <div className='d-flex justify-content-between' >
                        <div>

                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> 1705 Events </a>
                        </div>
                        <div>
                            Powered By: <a href='https://www.goatwebdesigns.com' target="_blank" rel="noreferrer">GOAT WEB DESIGNS</a>
                        </div>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;