import React from 'react';
import { Link } from "react-router-dom";
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBIcon, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem
} from 'mdbreact';
import './1705Colors.css';
import Nav from './Nav';
import bkgrd from '../assets/space-photos/entrance.png';
import patio from '../assets/space-photos/patio.png';
import studio from '../assets/space-photos/studio-experience.png';
import courtyard from '../assets/space-photos/courtyard.png';
import gallery from '../assets/space-photos/inside1.png';
import FooterPage from './Footer';
import CapacityChart from './CapacityModal';
import wed1 from '../assets/inspiration/wed1.jpg';
import wed2 from '../assets/inspiration/wed2.jpg';

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
                                    <h1 className='slideOneText display-1 text-uppercase mb-0 pt-md-5 pt-5 white-text'>
                                        The Experience
                                    </h1>
                                    <hr className='hr-light my-4' />
                                    <h4 className="h4-responsive px-3">
                                        The experience at Seventeen05 has been designed as a dynamic interplay between spaces crafted to maximize your vision of an event.
                                        Inspiring event settings featuring a welcoming background of contemporary, contextual design, unparalleled style for any gathering.
                                        With more than 11,000 square feet of combined indoor and outdoor space, our venue provides idyllic backdrops for functions ranging from 240-guest events to small boardroom meetings.
                                    </h4>

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBView>
                    <main>
                        <MDBCard className="px-5 pb-5">
                            <MDBCardBody>
                                {/* <p className="text-center w-responsive mx-auto mb-3">
                                    The experience at Seventeen05 has been designed as a dynamic interplay between spaces crafted to maximize your vision of an event.
                                    Inspiring event settings featuring a welcoming background of contemporary, contextual design, unparalleled style for any gathering.
                                    With more than 11,000 square feet of combined indoor and outdoor space, our venue provides idyllic backdrops for functions ranging from 240-guest events to small boardroom meetings.
                                </p> */}
                                {/* <div className='text-center pt-2'>
                                    <Link to='/contact' >
                                        <MDBBtn
                                            className='gold black-text'
                                            size='lg'
                                        >
                                            Get Started
                                        </MDBBtn>
                                    </Link>
                                </div> */}
                                <div >
                                    <div className='streak streak-photo streak-long-2' style={{ marginTop: '-40px', marginBottom: '-40px' }}>
                                        <div className='mask flex-center'>
                                            <MDBContainer>
                                                <MDBRow className='black-text text-center'>
                                                    <MDBCol md='4' className='mb-2'>
                                                        <h1 className='mx-2 font-weight-bold'>5</h1>
                                                        <p className='font-weight-bold'>Indoor & Outdoor Event Spaces</p>
                                                        {/* <figcaption className="figure-caption">
                                                            Indoor & Outdoor
                                                        </figcaption> */}
                                                    </MDBCol>
                                                    <MDBCol md='4' className='mb-2'>
                                                        <h1 className='mx-2 font-weight-bold'>11,880 sq ft</h1>
                                                        <p className='font-weight-bold'>Total Event Space</p>
                                                        {/* <div className='text-center mt-3'>
                                                            <MDBBtn
                                                                className='gold black-text'
                                                                size='lg'
                                                                href='#'
                                                                target='_blank'
                                                            >
                                                                Get Started!
                                    </MDBBtn>
                                                        </div> */}
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
                                <MDBRow className='mt-4'>
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
                                            The Patio boasts a variety of different features including an outdoor contemporary open kitchen, perfectly designed landscape lighting with exposed wood beams. This space is ideal for an event reception.
                                        </p>
                                        {/* <MDBBtn size="md" className="gold black-text waves-light ">
                                            Book Now
                                        </MDBBtn> */}
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-5" />
                                <MDBRow>
                                    <MDBCol lg="6">
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>The Courtyard</strong>
                                        </h3>
                                        <p>
                                            An outdoor intimate event space which can accommodate social gatherings such as rehearsal dinners or wedding ceremonies as well as a great corporate cocktail reception for up to 100 guests.
                                        </p>
                                        <MDBRow>
                                            <MDBCol md='12'>
                                                <img src={wed1} alt='wedding event rendering' className='img-fluid pt-2' />
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol lg="6">
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
                                            <strong>Kitchen Studio</strong>
                                        </h3>
                                        <p>
                                            The Kitchen Studio is a state of the art demo kitchen that features views to the Patio and Courtyard. It is a great location for cooking demonstrations, lunches, dinners of social or corporate nature for approximately 30 guests.
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-5" />
                                <MDBRow>
                                    <MDBCol lg="6">
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>Seventeen05 Event Gallery</strong>
                                        </h3>
                                        <p>
                                            Seventeen05 is our main event gallery. It features abundant natural light and loft like exposed ceilings, allowing for creative decorative and lighting possibilities. Glass walls unveil the perfect view to The Courtyard. Seventeen05 can be divided into 2 equal event spaces or be enjoyed as 1.
                                            It can accommodate approximately up to 250 reception style and 200 in banquet seating. It is adjacent to our pre-function space, perfect for welcoming your guests prior to entering Seventeen05.

                                        </p>
                                    </MDBCol>
                                    <MDBCol lg="6">
                                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <MDBCarousel
                                                activeItem={1}
                                                length={2}
                                                // slide={true}
                                                fade={true}
                                                showControls={true}
                                                showIndicators={false}
                                                className="z-depth-1"
                                                interval={3000}
                                                pauseOnHover={false}
                                            >
                                                <MDBCarouselInner>
                                                    <MDBCarouselItem itemId="1" >
                                                        <MDBView>
                                                            <img
                                                                className="d-block w-100"
                                                                src={gallery}
                                                                alt="First slide"
                                                                style={{ maxHeight: '100vh' }}
                                                                fixed
                                                            />
                                                            <MDBMask overlay="black-light" />
                                                        </MDBView>
                                                    </MDBCarouselItem>
                                                    <MDBCarouselItem itemId="2" >
                                                        <MDBView>
                                                            <img
                                                                className="d-block w-100"
                                                                src={wed2}
                                                                alt="2nd Slide"
                                                                style={{ maxHeight: '100vh' }}
                                                                fixed
                                                            />
                                                            <MDBMask overlay="black-light" />
                                                        </MDBView>
                                                    </MDBCarouselItem>
                                                    
                                                </MDBCarouselInner>
                                            </MDBCarousel>
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView>
                                    </MDBCol>
                                </MDBRow>
                                <div className="pt-5 d-flex justify-content-center">
                                    <Link to='/contact'>
                                        <MDBBtn
                                            className='blackgrnd black-text goldtext'
                                            size='lg'
                                        >
                                            Get Started
                                        </MDBBtn>
                                    </Link>
                                    <div>

                                        <CapacityChart />
                                    </div>
                                </div>
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