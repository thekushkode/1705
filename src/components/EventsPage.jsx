import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBBtn } from
    "mdbreact";
import './1705Colors.css';
import marble from '../assets/slides/marble.jpg';
import steel from '../assets/slides/blacksteel.jpg';
import abaca from '../assets/slides/Abaca.jpg';
import inside from '../assets/space-photos/inside1.png';
import studio from '../assets/space-photos/studio-experience.png';
import entrance from '../assets/space-photos/entrance.png';
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
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1"
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={marble}
                                        alt="First slide"
                                        style={{ maxHeight: '100vh' }}
                                        fixed
                                    />
                                    {/* <MDBMask overlay="black-light" /> */}
                                </MDBView>
                                <MDBCarouselCaption className='topPlacement mediaPlacement'>
                                    <h1 className="display-1 text-uppercase black-text slideOneText">Sophisticated</h1>
                                    <hr className='hr-dark my-4' />
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={abaca}
                                        alt="2nd Slide"
                                        style={{ maxHeight: '100vh' }}
                                        fixed
                                    />
                                    {/* <MDBMask overlay="black-light" /> */}
                                </MDBView>
                                <MDBCarouselCaption className='topPlacement mediaPlacement'>
                                    <h1 className="display-1 text-uppercase slideTwoText">Warm</h1>
                                    <hr className='hr-light my-4' />
                                    {/* <p>First text or button</p> */}
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={steel}
                                        alt="First slide"
                                        style={{ maxHeight: '100vh' }}
                                        fixed
                                    />
                                    {/* <MDBMask overlay="black-light" /> */}
                                </MDBView>
                                <MDBCarouselCaption className='topPlacement mediaPlacement'>
                                    <h1 className="display-1 text-uppercase slideThreeText">Approachable</h1>
                                    <hr className='hr-light my-4' />
                                    {/* <p>First text or button</p> */}
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    <section className="text-center my-5">
                        <h2 className="h1-responsive my-5">
                            Revel & Relish in Life's Milestones!
                        </h2>
                        <p className="lead grey-text w-responsive mx-auto mb-5">
                            Situated in the heart of West Midtown, we offer an unforgettable setting for a wedding, rehearsal dinner or other special event in Atlanta.
                        </p>
                        <MDBBtn
                            className='gold black-text'
                            size='lg'
                            href='#'
                            target='_blank'
                        >
                            Get Started!
                        </MDBBtn>

                    </section>
                    <section>
                        <MDBRow className='mt-3 px-3'>
                            <MDBCol md='6'>
                                {/* STREAK was streak-long-2*/}
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
                                <p className='pt-3' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores aperiam minima assumenda deleniti hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores aperiam minima assumenda deleniti hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='mt-3 px-3'>
                            <MDBCol md='6'>
                                {/* STREAK was streak-long-2*/}
                                <div>
                                    <div className='streak streak-photo streak-long-1' style={{ backgroundImage: "url(" + studio + ")" }}>
                                        <div className='mask flex-center rgba-black-strong'>
                                            <MDBContainer>
                                                <h1 className='largeText display-3 text-center white-text my-3 text-uppercase'>Corporate Gatherings</h1>
                                            </MDBContainer>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol md='6'>
                                <p className='pt-3'>Achieve your meeting goals and strive for corporate success by planning your next event at Seventeen05. With more than 11,000 square feet of combined indoor and outdoor space, our venue provides idyllic backdrops for functions ranging from 240-guest events to small boardroom meetings. Share your event vision to us and we will bring your day to life with upscale service, bespoke floor plans and AV needs. Featuring fully-adaptable, cutting-edge telecommunications and multimedia technology as well as high-speed Wi-Fi Internet to maximize productivity and encourage collaboration.</p>
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
                                <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores aperiam minima assumenda deleniti hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores aperiam minima assumenda deleniti hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </main>
                <footer>
                    <FooterPage />
                </footer>
            </div>
        );
    }
}

export default EventsPage;