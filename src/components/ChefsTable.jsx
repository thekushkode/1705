import React from 'react';
import { Redirect, Link } from "react-router-dom";
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBIcon, MDBInput, MDBSelect, MDBSelectInput, MDBSelectOption, MDBSelectOptions
} from 'mdbreact';
import './1705Colors.css';
import Nav from './Nav';
import studio from '../assets/space-photos/studio-experience.png';
import FooterPage from './Footer';
import CapacityChart from './CapacityModal';


class ChefsTable extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            selectService: [],
            eventSpace: [],
            flexDate: [],
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleServiceSelection = (e) => {
        this.setState({
            selectService: e[0]
        })
    }

    // handleeventSpace = (e) => {
    //     this.setState({
    //         eventSpace: e[0]
    //     })
    // }

    handleflexDate = (e) => {
        this.setState({
            flexDate: e[0]
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
                    <MDBView
                        src={studio}
                        fixed
                    >
                        {/* <MDBMask className='whitegradient' /> */}
                        <MDBMask overlay='black-strong' />
                        <MDBContainer
                            className='d-flex justify-content-center align-items-center'
                            style={{ height: '100%', width: '100%', paddingTop: '5rem' }}
                        >
                            <MDBRow>
                                <MDBCol md='12' className='mb-4 white-text text-center'>
                                    {/* <h1 className='display-2 mb-0 pt-md-5 pt-5 goldtext2 font-weight-bold'>
                                        SEVENTEEN
                                    <span className='white-text font-weight-bold'>05</span>
                                    </h1> */}
                                    <h1 className='slideOneText display-1 text-uppercase mb-0 pt-md-5 pt-5 white-text'>
                                        Dine For A Cause
                                    </h1>
                                    <hr className='hr-light my-4' />
                                    <h4 className="h4-responsive px-3">
                                        Seventeen05 is proud to partner with Meals On Wheels Atlanta as its mission is to support great causes in the community.
                                        Dinner is Served and Chef’s Table are our partnership initiatives.
                                        Both are deliciously prepared by our Executive Chef Robert Gerstenecker, former Four Seasons Atlanta Hotel Executive Chef.
                                        All proceeds benefit Meals On Wheels home-delivered meal services program for Atlanta’s homebound senior neighbors.
                                    </h4>

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBView>
                    <main>
                        <MDBCard className="px-5 pb-5">
                            <MDBCardBody>
                                <MDBRow className='mt-4'>
                                    <MDBCol lg="6">
                                        <h2 className='h2-responsive text-uppercase text-center'>Dinner Is Served</h2>
                                        <p className='text-center'>Dinner is Served is a unique series of culinary dinner experiences serving up from 2 up to 8 guests.
                                        Enjoy the perfect curated meal for any holiday or special occasion throughout the year.
                                        For your convenience, we offer contact-free curbside pick-up.
                                        Just unpack, plate and enjoy!
                                        </p>
                                        <h5>Featured Occasions</h5>
                                        <ul>
                                            <li>Valentine's Day Dinner- Serves 2 Guests</li>
                                            <li>Mother's Day Brunch- Serves Up To 8 Guests</li>
                                            <li>Father's Day- Serves 4 Guests</li>
                                            <li>Fourth of July- Serves Up To 8 Guests</li>
                                            <li>Thanksgiving- Serves Up To 8 Guests</li>
                                            <li>Christmas- Serves Up To 8 Guests</li>
                                        </ul>
                                        {/* <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <img
                                                className="img-fluid"
                                                src={patio}
                                                alt=""
                                            />
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView> */}
                                    </MDBCol>
                                    <MDBCol lg="6">
                                        <h2 className='h2-responsive text-uppercase text-center'>Chef's Table</h2>
                                        <p className='text-center'>
                                            Chef’s Table is a unique series of intimate gourmet dinner experiences for 10 or more guests, expertly prepared to be catered in the comfort of your own home.<br /><br /><br />
                                        </p>
                                        <h5>Each experience includes:</h5>
                                        <ul>
                                            <li>A 4 or 5 course personalized menu</li>
                                            <li>Dinner service will be included in the experience</li>
                                            <li>Beverage selections provided by host</li>
                                            <li>Menu can be custom paired to host's hand-selected wines</li>
                                        </ul>
                                        {/* <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>Patio</strong>
                                        </h3>
                                        <p>
                                            The Patio boasts a variety of different features including an outdoor contemporary open kitchen, perfectly designed landscape lighting with exposed wood beams. This space is ideal for an event reception.
                                        </p> */}
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow style={{ marginTop: '50px' }}>

                                    <div className="rgba-black-strong text-center mx-auto" >
                                        <MDBContainer>
                                            <MDBRow style={{ backgroundColor: 'rgba(0, 0, 0, .8)' }}>
                                                <h1 className="mx-auto white-text pt-3">
                                                    Schedule Your Event
                                                        </h1>
                                                <MDBCol md="12" className="md-0 mb-5 pt-3">
                                                    <form onSubmit={this.submitForm}
                                                        action="https://formspree.io/f/xnqowjlw"
                                                        method="POST">
                                                        <MDBRow>
                                                            <MDBCol md="6">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput type="text" id="contact-name" label="Your Name"
                                                                        className='white-text' name='Name' required />
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
                                                                        required
                                                                    />
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <MDBRow>
                                                            <MDBCol md="6">
                                                                <div className="md-form mb-0">
                                                                    <MDBInput type="text" id="contact-phone" label="Your Phone"
                                                                        className='white-text' name='Phone' required />
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
                                                                <div>
                                                                    <MDBInput name='Date Flexible' value={this.state.flexDate} hidden></MDBInput>
                                                                    <MDBSelect getValue={(e) => this.handleflexDate(e)}
                                                                        label='Is Date Flexible?'>
                                                                        <MDBSelectInput id='volunteer' name='Date Flexible:' className='white-text' />
                                                                        <MDBSelectOptions>
                                                                            <MDBSelectOption value="Yes" name="Yes">Yes</MDBSelectOption>
                                                                            <MDBSelectOption value="No" name="No">No</MDBSelectOption>
                                                                        </MDBSelectOptions>
                                                                    </MDBSelect>
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
                                                        </MDBRow>
                                                        <MDBRow>
                                                            <MDBCol md="12">
                                                                <div>
                                                                    <MDBInput name='Select Service:' value={this.state.selectService} hidden></MDBInput>
                                                                    <MDBSelect getValue={(e) => this.handleServiceSelection(e)}
                                                                        label='Select Service:'>
                                                                        <MDBSelectInput id='service-selection' name='Select Service:' className='white-text' />
                                                                        <MDBSelectOptions>
                                                                            <MDBSelectOption value="Dinner Is Served" name="Dinner Is Served">Dinner Is Served</MDBSelectOption>
                                                                            <MDBSelectOption value="Chefs Table" name="Chefs Table">Chef's Table</MDBSelectOption>

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
                                                <p className='white-text text-justify px-3'>At Seventeen05, WE'RE COMMITTED TO DELIVERING MEANINGFUL, MEMORABLE EXPERIENCES TO OUR GUESTS THROUGH CONNECTED SERVICE. WE CAN MAKE THIS HAPPEN AS WE FEEL SAFE AND CONFIDENT IN OUR SPACES. WE WILL OPERATE BEYOND CDC AND STATE-MANDATED HEALTH AND SAFETY GUIDELINES IN ORDER TO DO OUR PART IN KEEPING YOU AND OUR CITY SAFE.</p>
                                            </MDBRow>
                                        </MDBContainer>

                                    </div>

                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </main>
                    <footer style={{ marginTop: '-25px' }}>
                        <FooterPage />
                    </footer>
                </div>
            </div>
        );
    }
}

export default ChefsTable;