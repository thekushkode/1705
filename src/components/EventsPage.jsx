import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBBtn } from
    "mdbreact";
import './1705Colors.css';
import wedd from '../assets/slides/wedd.jpg';
import wine from '../assets/slides/wine.jpg';
import dance from '../assets/slides/dancers.jpg';
import inside from '../assets/space-photos/inside1.png';
import studio from '../assets/space-photos/studio-experience.png';
import entrance from '../assets/space-photos/entrance.png';
import patio from '../assets/space-photos/patio.png';
import FooterPage from "./Footer";
import Nav from "./Nav";

class EventsPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div>
                <header>
                    <Nav />
                </header>
                <main>

                    <MDBCarousel
                        activeItem={1}
                        length={3}
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
                                        src={wine}
                                        alt="First slide"
                                        style={{ maxHeight: '100vh' }}
                                        fixed
                                    />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption className='topPlacement mediaPlacement'>
                                    <h1 className="display-1 text-uppercase white-text slideOneText">Sophisticated</h1>
                                    <hr className='hr-light my-4' />
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2" >
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={wedd}
                                        alt="2nd Slide"
                                        style={{ maxHeight: '100vh' }}
                                        fixed
                                    />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption className='topPlacement mediaPlacement'>
                                    <h1 className="display-1 text-uppercase slideTwoText">Warm</h1>
                                    <hr className='hr-light my-4' />
                                    {/* <p>First text or button</p> */}
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3" >
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={dance}
                                        alt="First slide"
                                        style={{ maxHeight: '100vh' }}
                                        fixed
                                    />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption className='topPlacement mediaPlacement'>
                                    <h1 className="display-1 text-uppercase slideThreeText">Approachable</h1>
                                    <hr className='hr-light my-4' />
                                    {/* <p>First text or button</p> */}
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    {/* <section className="text-center my-5">
                        <h2 className="h1-responsive my-5">
                            Revel & Relish in Life's Milestones at Seventeen05!
                        </h2>
                        <p className="lead grey-text w-responsive mx-auto mb-5">
                            Whether you are planning a Micro celebration for two virtually watched by your friends and family or a large-scale wedding, Seventeen05 will curate your experience and elevate your vision to your liking.
                        </p>
                        <MDBBtn
                            className='gold black-text'
                            size='lg'
                            href='#'
                            target='_blank'
                        >
                            Get Started!
                        </MDBBtn>

                    </section> */}
                    <section>
                        <div className="text-center py-4">
                            <Link to='/contact'>
                                <MDBBtn
                                    className='gold black-text'
                                    size='lg'
                                >
                                    Get Started
                                </MDBBtn>
                            </Link>
                        </div>
                        <MDBRow className='mt-3 px-3'>
                            <MDBCol md='12'>
                                <div>
                                    <div className='streak streak-photo streak-long-1' style={{ backgroundImage: "url(" + inside + ")" }}>
                                        <div className='mask flex-center rgba-black-strong'>
                                            <MDBContainer>
                                                <h1 className='largeText display-3 text-center white-text my-3 text-uppercase'>Weddings</h1>
                                            </MDBContainer>
                                        </div>
                                    </div>
                                </div>
                                {/* STREAK was streak-long-2*/}
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='mt-3 px-3'>
                            <MDBCol md='12'>
                                <h1 className='h1-responsive text-center text-uppercase mt-3' >Fall In Love With Seventeen05</h1>
                                <hr className='mx-5' />
                                <p className='pt-3' >Revel and relish in life's milestones at Seventeen05. Whether you are planning a Micro celebration for two virtually watched by your friends and family or a large-scale wedding, Seventeen05 will curate your experience and elevate your vision to your liking.</p>
                            </MDBCol>
                        </MDBRow>
                        {/* <MDBRow className='mt-3 px-3'>
                            <MDBCol md='6'>
                                STREAK was streak-long-2
                                <div>
                                    <div className='streak streak-photo streak-long-1' style={{ backgroundImage: "url(" + inside + ")" }}>
                                        <div className='mask flex-center rgba-black-strong'>
                                            <MDBContainer>
                                                <h1 className='largeText display-3 text-center white-text my-3 text-uppercase'>Weddings</h1>
                                            </MDBContainer>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol md='6'>
                                <h1 className='h1-responsive text-center text-uppercase mt-3' >Fall In Love With Seventeen05</h1>
                                <hr className='mx-5' />
                                <p className='pt-3' >Revel and relish in life's milestones at Seventeen05. Whether you are planning a Micro celebration for two virtually watched by your friends and family or a large-scale wedding, Seventeen05 will curate your experience and elevate your vision to your liking.</p>
                            </MDBCol>
                        </MDBRow> */}
                        <MDBRow className='mt-3 px-3'>
                            <MDBCol md='6'>
                                {/* STREAK was streak-long-2*/}
                                <div>
                                    <div className='streak streak-photo streak-long-2' style={{ backgroundImage: "url(" + patio + ")" }}>
                                        <div className='mask flex-center rgba-black-strong'>
                                            <MDBContainer>
                                                <h1 className='largeText display-3 text-center white-text my-3 text-uppercase'>Corporate Gatherings</h1>
                                            </MDBContainer>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol md='6'>
                                <h1 className='h1-responsive text-center text-uppercase mt-3' >Meetings That Matter</h1>
                                <hr className='mx-5' />
                                <p className='pt-3' >Achieve your meeting goals and strive for corporate success by planning your next event at Seventeen05. Share your concept event with us and we will bring your gathering to life with upscale service, bespoke floor plans and AV needs. Featuring fully-adaptable, cutting-edge telecommunications and multimedia technology as well as high-speed Wi-Fi Internet to maximize productivity and encourage collaboration.</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='mt-3 px-3'>
                            <MDBCol md='6'>
                                {/* STREAK was streak-long-2*/}
                                <div>
                                    <div className='streak streak-photo streak-long-1' style={{ backgroundImage: "url(" + entrance + ")" }}>
                                        <div className='mask flex-center rgba-black-strong'>
                                            <MDBContainer>
                                                <h1 className='largeText display-3 text-center white-text my-3 text-uppercase'>Mitzvahs & More</h1>
                                            </MDBContainer>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol md='6'>
                                <h1 className='h1-responsive text-center text-uppercase mt-3' >Be In The Best Place</h1>
                                <hr className='mx-5' />
                                <p className='pt-3' >Celebrate coming of age at Seventeen05, our event gallery can accommodate parties of 200 guests, additional outdoor space available. We offer unforgettable settings for Gala’s, rehearsal dinners and more. Our dedicated team of experienced and detail–oriented professionals will work with you to perfect your event for your guests.</p>
                            </MDBCol>
                        </MDBRow>
                    </section>
                    <section className='mt-5'>
                        <div>
                            <div className='streak streak-photo streak-long-1' style={{ backgroundImage: "url(" + wine + ")" }}>
                                <div className='mask flex-center rgba-black-strong'>
                                    <MDBContainer>
                                        <h1 className='smallMediaText h1-responsive text-center text-sm-center goldtext'>As an event venue, Seventeen05 partners with professional food, beverage, design and audio visual vendors to design your event experience.  Get connected to learn about our space rental rates.</h1>
                                        <div className='d-flex justify-content-center' >
                                            <Link to='/contact'><MDBBtn className='black-text gold' size='md' >Get Started</MDBBtn></Link>
                                        </div>
                                    </MDBContainer>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer style={{ marginTop: '-25px' }}>
                    <FooterPage />
                </footer>
            </div>
        );
    }
}

export default EventsPage;