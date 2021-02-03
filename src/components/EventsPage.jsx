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
                        showControls={false}
                        showIndicators={false}
                        className="z-depth-1"
                        interval={3000}
                        dataPause={false}
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
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
                                    <h1 className="display-1 text-uppercase slideTwoText">Inviting</h1>
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
                            <MDBCol md='6'>
                                {/* STREAK was streak-long-2 */}
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
                                <h1 className='h1-responsive text-center text-uppercase mt-3' >Fall In Love With SEVENTEEN05</h1>
                                <hr className='mx-5' />
                                <p className='pt-3' >Sophistication. Style. Glamor. The wedding you’ve always imagined. Write you own love story with SEVENTEEN05. Whether you prefer a grand soiree or an intimate gathering, find romance in every moment and turn moments into lifetime memories.</p>
                            </MDBCol>
                        </MDBRow>
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
                                <p className='pt-3' >Find success in any venture with SEVENTEEN05. Our expertly tailored services, complemented by cutting-edge technology, ensure every meeting or function inspires synergy and welcomes success.</p>
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
                                <h1 className='h1-responsive text-center text-uppercase mt-3' >The Perfect Place</h1>
                                <hr className='mx-5' />
                                <p className='pt-3' >Commemorate new beginnings, rejoice in life’s milestones, get your groove on with SEVENTEEN05. From intimate dinners to grand-galas and anything in between, we have the ideal setting and just the right space for any special occasion.</p>
                            </MDBCol>
                        </MDBRow>
                    </section>
                    <section className='mt-5'>
                        <div>
                            <div className='streak streak-photo streak-long-1' style={{ backgroundImage: "url(" + wine + ")" }}>
                                <div className='mask flex-center rgba-black-strong'>
                                    <MDBContainer>
                                        <h2 className='smallMediaText h2-responsive text-center text-sm-center white-text'>As an event venue, SEVENTEEN05 partners with professional food, beverage, decor and audio visual vendors to design your event experience.  Get connected to learn about our space rental rates.</h2>
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