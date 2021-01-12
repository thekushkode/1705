import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from 'mdbreact';
import { Link } from "react-router-dom";
import './1705Colors.css';
import Nav from './Nav';
import bkgrd from '../assets/space-photos/entrance.png';
import patio from '../assets/space-photos/patio.png';
import studio from '../assets/space-photos/studio-experience.png';
import courtyard from '../assets/space-photos/courtyard.png';
import gallery from '../assets/space-photos/inside1.png';
import FooterPage from './Footer';

class EventSpace extends React.Component {
    // state = {
    //     collapsed: false
    // };

    // handleTogglerClick = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed
    //     });
    // };
    // componentDidMount() {
    //     document.querySelector('nav').style.height = '65px';
    // }
    // componentWillUnmount() {
    //     document.querySelector('nav').style.height = 'auto';
    // }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        // const navStyle = { marginTop: '0rem' };
        // const overlay = (
        //     <div
        //         id='sidenav-overlay'
        //         style={{ backgroundColor: 'transparent' }}
        //         onClick={this.handleTogglerClick}
        //     />
        // );

        // const { collapsed } = this.state;
        return (
            <div>
                <header>
                    <Nav />
                </header>
                <div>
                    <MDBView
                        src={bkgrd}
                        fixed
                    >
                        {/* <MDBMask className='whitegradient' /> */}
                        <MDBMask overlay='stylish-strong' />
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
                                    <h1 className='largeText display-3 text-uppercase mb-0 pt-md-5 pt-5 white-text'>
                                        The Experience
                                    </h1>
                                    <hr className='hr-light my-4' />
                                    {/* <h5 className='h5-responsive text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                                        Vibrant Spaces
                                    </h5> */}
                                    {/* <MDBBtn
                                        className='gold2 black-text'
                                        size='lg'
                                        href='#'
                                        target='_blank'
                                    >
                                        Book Your Event!
                                    </MDBBtn> */}
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBView>
                    <main>
                        <MDBCard className="px-5 pb-5">
                            <MDBCardBody>
                                <h2 className="display-5 text-center py-3">
                                    Vibrant Spaces
                                </h2>
                                <p className="text-center w-responsive mx-auto mb-3">
                                    The experience at Seventeen05 has been designed as a dynamic interplay between spaces crafted to maximize your vision of an event.
                                    Spacious event options featuring a welcoming background of contemporary art and design, unparalleled style for any gathering.
                                    People, passions and plans come alive in our new state-of-the-art Atlanta event venue. Whether you are coming together for a purposeful meeting, team-building events, planning your next Gala or wedding, our spaces are perfectly designed with flow and tailored for connecting and enjoying your surroundings.
                                </p>
                                <div className='mb-4' >
                                    <div className='streak streak-photo streak-long-1'>
                                        <div className='mask flex-center'>
                                            <MDBContainer>
                                                <MDBRow className='black-text text-center'>
                                                    <MDBCol md='4' className='mb-2'>
                                                        <h1 className='mx-2 font-weight-bold'>5</h1>
                                                        <p className='font-weight-bold'>Event Spaces</p>
                                                    </MDBCol>
                                                    <MDBCol md='4' className='mb-2'>
                                                        <h1 className='mx-2 font-weight-bold'>11,880 sq ft</h1>
                                                        <p className='font-weight-bold'>Total Event Space</p>
                                                    </MDBCol>
                                                    <MDBCol md='4' className='mb-2'>
                                                        <h1 className='mx-2 font-weight-bold'>200</h1>
                                                        <p className='font-weight-bold'>Capacity Largest Space</p>
                                                    </MDBCol>
                                                </MDBRow>
                                                {/* <figcaption className='figure-caption text-center white-text mb-2'>**2019 Results</figcaption> */}
                                            </MDBContainer>
                                        </div>
                                    </div>
                                    {/* </MDBStreak> */}
                                </div>
                                <MDBRow>
                                    <MDBCol lg="7">
                                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <img
                                                className="img-fluid"
                                                src={patio}
                                                alt=""
                                            />
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView>
                                    </MDBCol>
                                    <MDBCol lg="5">
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>Patio</strong>
                                        </h3>
                                        <p>
                                            The Patio boasts a variety of different features including an outdoor contemporary, bar, open kitchen, perfectly designed landscape lighting with exposed wood beams.  This space is ideal for an event reception.
                                        </p>
                                        <MDBBtn size="md" className="gold2 black-text waves-light ">
                                            Book Now
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-5" />
                                <MDBRow>
                                    <MDBCol lg="5">
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>The Courtyard</strong>
                                        </h3>
                                        <p>
                                            An outdoor intimate event space which can accommodate social gatherings such as rehearsal dinners or wedding ceremonies as well as a great corporate cocktail reception.  It can accommodate gatherings up to 100 guests.
                                        </p>
                                        <MDBBtn
                                            size="md"
                                            className="mb-lg-0 gold2 black-text mb-4 waves-light"
                                        >
                                            Book Now
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol lg="7">
                                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <img
                                                className="img-fluid"
                                                src={courtyard}
                                                alt=""
                                            />
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-5" />
                                <MDBRow>
                                    <MDBCol lg="7">
                                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <img
                                                className="img-fluid"
                                                src={studio}
                                                alt=""
                                            />
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView>
                                    </MDBCol>
                                    <MDBCol lg="5">
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>Studio Experience</strong>
                                        </h3>
                                        <p>
                                            The Experience Studio is a state of the art demo kitchen that features views to the Patio and Courtyard.  It is a great location for cooking demonstrations or lunches or dinners of social or corporate nature for approximately 30 guests
                                        </p>
                                        <MDBBtn size="md" className="gold2 black-text waves-light ">
                                            Book Now
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-5" />
                                <MDBRow>
                                    <MDBCol lg="5">
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>1705 Event Gallery</strong>
                                        </h3>
                                        <p>
                                            Seventeen05 is our main event gallery with 3917 sq ft. It features abundant natural light and loft like exposed ceilings conducive to an open, airy feeling, which allow for creative decorative and lighting possibilities. Glass walls unveil the perfect view to The Courtyard. Seventeen05 can be divided into 2 equal event spaces or be enjoyed as 1.<br/><br/>
                                            It can accommodate approximately up to 250 reception style and 200 is banquet seating. It is adjacent to our prefuntion perfect for welcoming your guests prior to entering Seventeen05.

                                        </p>
                                        <MDBBtn
                                            size="md"
                                            className="mb-lg-0 gold2 black-text mb-4 waves-light"
                                        >
                                            Book Now
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol lg="7">
                                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <img
                                                className="img-fluid"
                                                src={gallery}
                                                alt=""
                                            />
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView>
                                    </MDBCol>
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

export default EventSpace;