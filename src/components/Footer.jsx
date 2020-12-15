import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './1705Colors.css';
import logo3 from '../assets/Logos/1705white.jpg';

const FooterPage = () => {
    return (
        <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow >
                    <MDBCol md='4'>
                        <h5 className="title goldtext">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p>
                    </MDBCol>
                    <MDBCol md='4'>
                        <img src={logo3} alt='1705 logo' className='img-fluid d-block'/>
                    </MDBCol>
                    <MDBCol md='4' className='text-right'>
                        <h5 className="title goldtext">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
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