import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import capacity from '../assets/space-photos/blueprint.png';
import './1705Colors.css';

class CapacityChart extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle} className='gold black-text' size='lg'>See the Layout</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='fluid' >
                    <MDBModalHeader toggle={this.toggle}>1705 Space Layout</MDBModalHeader>
                    <MDBModalBody>
                        <div className="d-flex justify-content-center">
                            <img src={capacity} className='img-fluid' alt='Seventeen05 Capacity Chart' />
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='gold black-text' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default CapacityChart;