import React, { Component } from "react";
import { MDBCol, MDBRow, MDBCard } from "mdbreact";
// import peeps from '../assets/esther.jpeg';
import Nav from "./Nav";
import './1705Colors.css';
import front from '../assets/space-photos/entrance.png';
import FooterPage from "./Footer";


class EmailThankYou extends Component {


    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <header>
                    <Nav />
                </header>

                <div>
                    <MDBCard
                        className="card-image rgba-black-strong"
                        style={{
                            backgroundImage: "url(" + front + ")", minHeight: '100vh'
                        }}
                    >
                        <div className="mt-5 py-5 px-2" >
                            <MDBRow>
                                <MDBCol md='12' className='text-center m-5' style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
                                    {/* <img src={front} alt='MOWA logo' className='w-50 mx-auto' /> */}
                                    <h1 className='display-1 text-center white-text my-4'>Thank You!</h1>
                                    <h2 className='text-center white-text my-4'>Your submission has been sent. We Will Be In Touch Shortly!</h2>
                                </MDBCol>
                            </MDBRow>
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

export default EmailThankYou;