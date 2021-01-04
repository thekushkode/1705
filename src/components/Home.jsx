import React from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';
import { Link } from "react-router-dom";
import './1705Colors.css';
// import './home.css';
import Nav from './Nav';
import bkgrd from '../assets/inspiration/vibes1.jpg';
import streakpic1 from '../assets/inspiration/wedding1.jpg';
import streakpic2 from '../assets/inspiration/champagne.jpg';
import streakpic3 from '../assets/inspiration/plating.jpg';
import space1 from '../assets/space-photos/entrance.png';
import space2 from '../assets/space-photos/courtyard.png';
import space3 from '../assets/space-photos/studio-experience.png';
import FooterPage from './Footer';

class Home extends React.Component {
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
                                    <h1 className='largeText display-1 mb-0 pt-md-5 pt-5 white-text'>
                                        SEVENTEEN<span className='goldtext2'>05</span>
                                    </h1>
                                    <hr className='hr-light my-4' />
                                    <h5 className='h5-responsive pb-3 white-text'>
                                        Atlanta's premier event space in the heart of West Midtown!
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
                        <div className='px-3'>
                            <h1 className='h1-responsive text-center text-uppercase py-5'>Lorem Ipsum</h1>
                            <MDBRow className='pb-5'>
                                <MDBCol md='5'>
                                    <img src={space1} alt='space image1' className='img-fluid' />
                                </MDBCol>
                                <MDBCol md='7' className='text-center'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                        quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui ratione voluptatem sequi
                                        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                                        dolor sit amet, consectetur, adipisci velit, sed quia non
                                        numquam eius modi tempora incidunt ut labore et dolore magnam
                                        aliquam quaerat voluptatem.
                                    </p>
                                    <MDBBtn
                                        className='gold2 black-text'
                                        size='lg'
                                        href='#'
                                        target='_blank'
                                    >
                                        Call To Action!
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </div>
                        {/* STREAK */}
                        <div>
                            <div className='streak streak-photo streak-long-2' style={{ backgroundImage: "url(" + streakpic1 + ")" }}>
                                <div className='mask flex-center rgba-black-strong'>
                                    <MDBContainer>
                                        <h1 className='largeText display-1 text-center white-text my-3 text-uppercase'>Sophisticated.</h1>
                                        {/* <MDBRow className='white-text text-center'>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="utensils" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>519,000</h1>
                                                <p className='font-weight-bold'>Meals Served</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="clock" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>21,914</h1>
                                                <p className='font-weight-bold'>Volunteer Hours</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="dollar-sign" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>557,273</h1>
                                                <p className='font-weight-bold'>Dollars Saved</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="home" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>372</h1>
                                                <p className='font-weight-bold'>Homes Repaired</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <figcaption className='figure-caption text-center white-text mb-2'>**2019 Results</figcaption> */}
                                    </MDBContainer>
                                </div>
                            </div>
                            {/* </MDBStreak> */}
                        </div>
                        <div className='px-3'>
                            <MDBRow className='py-5'>
                                <MDBCol md='7' className='text-center'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                        quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui ratione voluptatem sequi
                                        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                                        dolor sit amet, consectetur, adipisci velit, sed quia non
                                        numquam eius modi tempora incidunt ut labore et dolore magnam
                                        aliquam quaerat voluptatem.
                                    </p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                        quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui ratione voluptatem sequi
                                        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                                        dolor sit amet, consectetur, adipisci velit, sed quia non
                                        numquam eius modi tempora incidunt ut labore et dolore magnam
                                        aliquam quaerat voluptatem.
                                    </p>
                                    <MDBBtn
                                        className='gold2 black-text'
                                        size='lg'
                                        href='#'
                                        target='_blank'
                                    >
                                        Call To Action!
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol md='5'>
                                    <img src={space2} alt='space image1' className='img-fluid' />
                                </MDBCol>
                            </MDBRow>
                        </div>
                        {/* STREAK */}
                        <div>
                            <div className='streak streak-photo streak-long-2' style={{ backgroundImage: "url(" + streakpic2 + ")" }}>
                                <div className='mask flex-center rgba-black-strong'>
                                    <MDBContainer>
                                        <h1 className='largeText display-1 text-center white-text my-3 text-uppercase'>Warm.</h1>
                                        {/* <MDBRow className='white-text text-center'>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="utensils" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>519,000</h1>
                                                <p className='font-weight-bold'>Meals Served</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="clock" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>21,914</h1>
                                                <p className='font-weight-bold'>Volunteer Hours</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="dollar-sign" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>557,273</h1>
                                                <p className='font-weight-bold'>Dollars Saved</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="home" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>372</h1>
                                                <p className='font-weight-bold'>Homes Repaired</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <figcaption className='figure-caption text-center white-text mb-2'>**2019 Results</figcaption> */}
                                    </MDBContainer>
                                </div>
                            </div>
                            {/* </MDBStreak> */}
                        </div>
                        <div className='px-3'>
                            <MDBRow className='py-5'>
                                <MDBCol md='5'>
                                    <img src={space3} alt='space image1' className='img-fluid' />
                                </MDBCol>
                                <MDBCol md='7' className='text-center'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                        quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui ratione voluptatem sequi
                                        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                                        dolor sit amet, consectetur, adipisci velit, sed quia non
                                        numquam eius modi tempora incidunt ut labore et dolore magnam
                                        aliquam quaerat voluptatem.
                                    </p>
                                    <MDBBtn
                                        className='gold2 black-text'
                                        size='lg'
                                        href='#'
                                        target='_blank'
                                    >
                                        Call To Action!
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </div>
                        {/* STREAK */}
                        <div>
                            <div className='streak streak-photo streak-long-2' style={{ backgroundImage: "url(" + streakpic3 + ")" }}>
                                <div className='mask flex-center rgba-black-strong'>
                                    <MDBContainer>
                                        <h1 className='largeText display-1 text-center white-text my-3 text-uppercase'>Approachable.</h1>
                                        {/* <MDBRow className='white-text text-center'>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="utensils" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>519,000</h1>
                                                <p className='font-weight-bold'>Meals Served</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="clock" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>21,914</h1>
                                                <p className='font-weight-bold'>Volunteer Hours</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="dollar-sign" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>557,273</h1>
                                                <p className='font-weight-bold'>Dollars Saved</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="home" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>372</h1>
                                                <p className='font-weight-bold'>Homes Repaired</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <figcaption className='figure-caption text-center white-text mb-2'>**2019 Results</figcaption> */}
                                    </MDBContainer>
                                </div>
                            </div>
                            {/* </MDBStreak> */}
                        </div>
                        <div className='my-4'>
                            <div className='streak streak-photo streak-long-2' style={{ backgroundImage: "url(" + streakpic3 + ")" }}>
                                <div className='mask flex-center rgba-black-strong'>
                                    <MDBContainer>
                                        <div style={{ backgroundColor: 'white' }}>

                                            <h1 className='largeText display-3 text-center black-text my-3 text-uppercase' >Memorable.</h1>
                                            <hr className='gold mx-5' />
                                            <h5 className='h5-responsive text-center text-uppercase p-4 black-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa.</h5>
                                        </div>
                                        {/* <MDBRow className='white-text text-center'>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="utensils" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>519,000</h1>
                                                <p className='font-weight-bold'>Meals Served</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="clock" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>21,914</h1>
                                                <p className='font-weight-bold'>Volunteer Hours</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="dollar-sign" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>557,273</h1>
                                                <p className='font-weight-bold'>Dollars Saved</p>
                                            </MDBCol>
                                            <MDBCol md='3' className='mb-2'>
                                                <MDBIcon icon="home" size="2x" className="white-text" />
                                                <h1 className='mx-2 font-weight-bold'>372</h1>
                                                <p className='font-weight-bold'>Homes Repaired</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <figcaption className='figure-caption text-center white-text mb-2'>**2019 Results</figcaption> */}
                                    </MDBContainer>
                                </div>
                            </div>
                            {/* </MDBStreak> */}
                        </div>

                    </main>
                    <footer>
                        <FooterPage />
                    </footer>
                </div>
            </div>
        );
    }
}

export default Home;
