import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBIcon,
} from 'mdbreact';
import './1705Colors.css';
// import './home.css';
import Nav from './Nav';
import bkgrd from '../assets/space-photos/entrance.png';
import patio from '../assets/space-photos/patio.png';
import studio from '../assets/space-photos/studio-experience.png';
import courtyard from '../assets/space-photos/courtyard.png';
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
                        <MDBMask className='whitegradient' />
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
                                    <h1 className='display-3 text-uppercase mb-0 pt-md-5 pt-5 white-text'>
                                        The Experience
                                    </h1>
                                    <hr className='hr-light my-4' />
                                    {/* <h5 className='h5-responsive text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                                        Vibrant Spaces
                                    </h5> */}
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
                        <MDBCard className="px-5 pb-5">
                            <MDBCardBody>
                                <h2 className="display-5 text-center py-3">
                                    Vibrant Spaces
                                </h2>
                                <p className="text-center w-responsive mx-auto mb-5">
                                    The experience at Seventeen05 has been designed as a dynamic interplay between spaces crafted to maximize your vision of an event.
                                    Spacious event options featuring a welcoming background of contemporary art and design, unparalleled style for any gathering.
                                    People, passions and plans come alive in our new state-of-the-art Atlanta event venue. Whether you are coming together for a purposeful meeting, team-building events, planning your next Gala or wedding, our spaces are perfectly designed with flow and tailored for connecting and enjoying your surroundings.
                                </p>
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
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                            nihil impedit quo minus id quod maxime placeat facere possimus,
                                            omnis voluptas assumenda est, omnis dolor repellendus et aut
                                            officiis debitis.
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
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                                            dolores et quas molestias excepturi sint occaecati cupiditate
                                            non provident.
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
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                            aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                                            sit amet.
                                        </p>
                                        <MDBBtn  size="md" className="gold2 black-text waves-light ">
                                            Read more
                                        </MDBBtn>
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