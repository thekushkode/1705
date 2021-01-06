import React, { Component } from "react";
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBInput,
    MDBCardBody,
} from "mdbreact";
import { Link } from 'react-router-dom';
import './1705Colors.css';
import bkgrnd from '../assets/space-photos/patio.png';
import Nav from "./Nav";
import FooterPage from "./Footer";


class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <header>
                    <Nav />
                </header>
                <div>
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage: "url(" + bkgrnd + ")"
                        }}
                    >
                        <div className="rgba-black-strong pb-5 px-2 text-center">
                            <MDBContainer>

                                <section className="my-5">
                                    <h2 className="display-3 goldtext2 text-center pt-5 my-5">
                                        Contact Us!
                                </h2>
                                    <p className="text-center w-responsive white-text mx-auto pb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                        error amet numquam iure provident voluptate esse quasi, veritatis
                                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                                </p>
                                    {/* <MDBRow>
                                        <MDBCol lg="5" className="lg-0 mb-4">
                                            <MDBCard>
                                                <MDBCardBody>
                                                    <div className="form-header gold2">
                                                        <h3 className="mt-2 black-text">
                                                            <MDBIcon icon="envelope" /> Write to us:
                                                        </h3>
                                                    </div>
                                                    <p className="dark-grey-text">
                                                        We'll write rarely, but only the best content.
                                                    </p>
                                                    <div className="md-form">
                                                        <MDBInput
                                                            icon="user"
                                                            label="Your name"
                                                            iconClass="grey-text"
                                                            type="text"
                                                            id="form-name"
                                                        />
                                                    </div>
                                                    <div className="md-form">
                                                        <MDBInput
                                                            icon="envelope"
                                                            label="Your email"
                                                            iconClass="grey-text"
                                                            type="text"
                                                            id="form-email"
                                                        />
                                                    </div>
                                                    <div className="md-form">
                                                        <MDBInput
                                                            icon="tag"
                                                            label="Subject"
                                                            iconClass="grey-text"
                                                            type="text"
                                                            id="form-subject"
                                                        />
                                                    </div>
                                                    <div className="md-form">
                                                        <MDBInput
                                                            icon="pencil-alt"
                                                            label="Message"
                                                            iconClass="grey-text"
                                                            type="textarea"
                                                            id="form-text"
                                                        />
                                                    </div>
                                                    <div className="text-center">
                                                        <MDBBtn className="gold2 black-text">Submit</MDBBtn>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol lg="7">
                                            <div
                                                id="map-container"
                                                className="rounded z-depth-1-half map-container"
                                                style={{ height: "400px" }}
                                            >
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.4132480487948!2d-84.41094301478257!3d33.80069312835111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504e3b6e56c0d%3A0x5207de5aee044f00!2s1705%20Commerce%20Dr%20NW%2C%20Atlanta%2C%20GA%2030318!5e0!3m2!1sen!2sus!4v1608133859618!5m2!1sen!2sus"
                                                    title="1705 Event Space"
                                                    width="100%"
                                                    height="100%"
                                                    frameBorder="0"
                                                    style={{ border: 0 }}
                                                />
                                            </div>
                                            <br />
                                            <MDBRow className="text-center">
                                                <MDBCol md="4">
                                                    <MDBBtn tag="a" floating className="gold2">
                                                        <MDBIcon className='black-text' icon="map-marker-alt" />
                                                    </MDBBtn>
                                                    <p className='goldtext2'>Atlanta, 30318</p>
                                                    <p className="mb-md-0 goldtext2">United States</p>
                                                </MDBCol>
                                                <MDBCol md="4">
                                                    <MDBBtn tag="a" floating className="gold2">
                                                        <MDBIcon className='black-text' icon="phone" />
                                                    </MDBBtn>
                                                    <p className='goldtext2'>404.555.1234</p>
                                                    <p className="mb-md-0 goldtext2">Mon - Fri, 8:00-5:00</p>
                                                </MDBCol>
                                                <MDBCol md="4">
                                                    <MDBBtn tag="a" floating className="gold2">
                                                        <MDBIcon className='black-text' icon="envelope" />
                                                    </MDBBtn>
                                                    <p className='goldtext2'>info@gmail.com</p>
                                                    <p className="mb-md-0 goldtext2">sale@gmail.com</p>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>
                                    </MDBRow> */}
                                    <MDBRow style={{ backgroundColor: 'rgba(0, 0, 0, .8)'}}>
                                        <MDBCol md="9" className="md-0 mb-5 pt-3">
                                            <form>
                                                <MDBRow>
                                                    <MDBCol md="6">
                                                        <div className="md-form mb-0">
                                                            <MDBInput type="text" id="contact-name" label="Your name"
                                                            className='white-text' />
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md="6">
                                                        <div className="md-form mb-0">
                                                            <MDBInput
                                                                type="text"
                                                                id="contact-email"
                                                                label="Your email"
                                                                className='white-text'
                                                            />
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow>
                                                    <MDBCol md="12">
                                                        <div className="md-form mb-0">
                                                            <MDBInput type="text" id="contact-subject" label="Subject"
                                                            className='white-text' />
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow>
                                                    <MDBCol md="12">
                                                        <div className="md-form mb-0">
                                                            <MDBInput
                                                                type="textarea"
                                                                id="contact-message"
                                                                label="Your message"
                                                                className='white-text'
                                                            />
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                            </form>
                                            <div className="text-center text-md-left">
                                                <MDBBtn className='gold' size="lg btn-rounded">
                                                    Send
                                                </MDBBtn>
                                            </div>
                                        </MDBCol>
                                        <MDBCol md="3" className="text-center pt-5">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <MDBIcon icon="map-marker-alt" size="2x" className="goldtext" />
                                                    <p className="goldtext2">Atlanta, GA 30318, USA</p>
                                                </li>
                                                <li>
                                                    <MDBIcon icon="phone" size="2x" className="goldtext mt-4" />
                                                    <p className="goldtext2">+ 01 234 567 89</p>
                                                </li>
                                                <li>
                                                    <MDBIcon icon="envelope" size="2x" className="goldtext mt-4" />
                                                    <p className="goldtext2">contact@example.com</p>
                                                </li>
                                            </ul>
                                        </MDBCol>
                                    </MDBRow>
                                </section>
                            </MDBContainer>

                        </div>
                    </MDBCard>

                </div>

                <footer style={{ marginTop: '-25px' }}>
                    <FooterPage />
                </footer>
            </div>
        );
    }
}

export default Contact;