import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBInput,
    MDBCardBody,
    MDBSelect,
    MDBSelectOptions,
    MDBSelectOption,
    MDBSelectInput,
} from "mdbreact";
import './1705Colors.css';
import bkgrnd from '../assets/space-photos/patio.png';
import Nav from "./Nav";
import FooterPage from "./Footer";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            eventType: [],
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleeventType = (e) => {
        this.setState({
            eventType: e[0]
        })
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
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
                                        Get Connected
                                    </h2>

                                    <MDBRow style={{ backgroundColor: 'rgba(0, 0, 0, .8)' }}>
                                        <p className="w-responsive white-text pb-5">
                                            Event Profile
                                        </p>
                                        <MDBCol md="9" className="md-0 mb-5 pt-3">
                                            <form onSubmit={this.submitForm}
                                                action="https://formspree.io/f/moqpykoo"
                                                method="POST">
                                                <MDBRow>
                                                    <MDBCol md="6">
                                                        <div className="md-form mb-0">
                                                            <MDBInput type="text" id="contact-name" label="Your Name"
                                                                className='white-text' name='Name' />
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md="6">
                                                        <div className="md-form mb-0">
                                                            <MDBInput
                                                                type="text"
                                                                id="contact-email"
                                                                label="Your Email"
                                                                className='white-text'
                                                                name='Email'
                                                            />
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow>
                                                    <MDBCol md="6">
                                                        <div className="md-form mb-0">
                                                            <MDBInput type="text" id="contact-phone" label="Your Phone"
                                                                className='white-text' name='Phone' />
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md="6">
                                                        <div className="md-form mb-0">
                                                            <MDBInput
                                                                type="text"
                                                                id="event-name"
                                                                label="Name Your Event"
                                                                className='white-text'
                                                                name='Name of Event'
                                                            />
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow>
                                                    <MDBCol md="4">
                                                        <div className="md-form mb-0">
                                                            <MDBInput type="text" id="date-of-event" label="Date of Event"
                                                                className='white-text' name='Date of Event' />
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md="4">
                                                        <div className="md-form mb-0">
                                                            <MDBInput
                                                                type="text"
                                                                id="number-of-guests"
                                                                label="Number of Guests"
                                                                name='Number of Guests'
                                                                className='white-text'
                                                            />
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md="4">
                                                        <div>
                                                            <MDBInput name='Event Type' value={this.state.eventType} hidden></MDBInput>
                                                            <MDBSelect getValue={(e) => this.handleeventType(e)}
                                                                label='Event Type:'>
                                                                <MDBSelectInput id='volunteer' name='Event Type:' className='white-text' />
                                                                <MDBSelectOptions>
                                                                    <MDBSelectOption value="Wedding" name="Wedding">Wedding</MDBSelectOption>
                                                                    <MDBSelectOption value="Business Delivery" name="Business Delivery">Business</MDBSelectOption>
                                                                    <MDBSelectOption value="Mitzvah" name="Mitzvah">Mitzvah</MDBSelectOption>
                                                                    <MDBSelectOption value="Social Event" name="Social Event">Social Event</MDBSelectOption>
                                                                    <MDBSelectOption value="Other" name="Other">Other</MDBSelectOption>
                                                                </MDBSelectOptions>
                                                            </MDBSelect>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow>
                                                    <MDBCol md="12">
                                                        <div className="md-form mb-0">
                                                            <MDBInput
                                                                type="textarea"
                                                                id="additional-details"
                                                                name='Additional Details'
                                                                label="Additional Details"
                                                                className='white-text'
                                                            />
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <div className="text-center text-md-left">
                                                    <MDBBtn type='submit' className='gold' size="lg btn-rounded">
                                                        Send
                                                </MDBBtn>
                                                    {status === 'SUCCESS' && <Redirect to='/email-received' />}
                                                    {status === 'ERROR' && <p className='white-text'>Oops! There was an error. Please try again.</p>}
                                                </div>
                                            </form>
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