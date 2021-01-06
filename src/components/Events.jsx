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
import bkgrd from '../assets/space-photos/patio.png';
import inside from '../assets/space-photos/inside1.png';
import studio from '../assets/space-photos/studio-experience.png';
import entrance from '../assets/space-photos/entrance.png';
import FooterPage from './Footer';

class Events extends React.Component {
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
                                    <h1 className='largeText display-3 text-uppercase mb-0 pt-md-5 pt-5 white-text'>
                                        Our Spaces
                                    </h1>
                                    <hr className='hr-light my-4' />
                                    <h5 className='h5-responsive pb-3 white-text font-weight-bolder'>
                                        Fall In Love With Seventeen05!
                                    </h5>
                                    <MDBBtn
                                        className='gold2 black-text'
                                        size='lg'
                                        href='#'
                                        target='_blank'
                                    >
                                        Book Your Event!
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBView>
                    <main>

                        <section className="text-center my-5">
                            <h2 className="h1-responsive my-5">
                                Revel & Relish in Life's Milestones!
                            </h2>
                            <p className="lead grey-text w-responsive mx-auto mb-5">
                                Situated in the heart of West Midtown, we offer an unforgettable setting for a wedding, rehearsal dinner or other special event in Atlanta.
                            </p>
                            <MDBRow className='px-2' >
                                <MDBCol md="4">
                                    {/* <MDBIcon icon="chart-area" size="3x" className="red-text" /> */}
                                    <img src={inside} alt='' className='d-block img-fluid' />
                                    <h5 className="font-weight-bold my-4">Weddings</h5>
                                    <p className="grey-text mb-md-0 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                                    </p>
                                </MDBCol>
                                <MDBCol md="4">
                                    {/* <MDBIcon icon="book" size="3x" className="cyan-text" /> */}
                                    <img src={studio} alt='' className='d-block img-fluid' />
                                    <h5 className="font-weight-bold my-4">Corporate Gatherings</h5>
                                    <p className="grey-text mb-md-0 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                                    </p>
                                </MDBCol>
                                <MDBCol md="4">
                                    {/* <MDBIcon far icon="comments" size="3x" className="orange-text" /> */}
                                    <img src={entrance} alt='' className='d-block img-fluid' />
                                    <h5 className="font-weight-bold my-4">Bar / Bat Mitzvahs</h5>
                                    <p className="grey-text mb-md-0 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </section>

                    </main>
                    <footer style={{ marginTop: '-25px' }}>
                        <FooterPage />
                    </footer>
                </div>
            </div>
        );
    }
}

export default Events;