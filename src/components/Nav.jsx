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
    MDBIcon,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';
import './home.css';
import './1705Colors.css';

class Nav extends React.Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }
    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }
    render() {
        const navStyle = { marginTop: '0rem' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );

        const { collapsed } = this.state;
        return (
            <div id='parallaxintro'>
                <div>
                    <MDBNavbar
                        color='gold'
                        style={navStyle}
                        dark
                        expand='md'
                        fixed='top'
                        scrolling
                        transparent
                    >
                        <MDBContainer>
                            <MDBNavbarBrand>
                                <MDBNavLink to='https://mdbootstrap.com/'>
                                    <strong className='white-text'>SEVENTEEN 05</strong>
                                </MDBNavLink>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.handleTogglerClick} />
                            <MDBCollapse isOpen={collapsed} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem>
                                        <MDBNavLink className='font-weight-bolder' to='#'>Gatherings</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className="font-weight-bolder white-text">Events</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem className='p-0'><MDBNavLink to='#' className='black-text'>Weddings</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink to='#' className='black-text'>Conferences</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink to='#' className='black-text'>Galas</MDBNavLink></MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                    <MDBNavItem>
                                        <MDBNavLink className='font-weight-bolder' to='#'>Our Space</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink className='font-weight-bolder' to='#'>Payments</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink className='font-weight-bolder' to='#'>Contact</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                {/* <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBFormInline waves>
                                            <div className='md-form my-0'>
                                                <input
                                                    className='form-control mr-sm-2'
                                                    type='text'
                                                    placeholder='Search'
                                                    aria-label='Search'
                                                />
                                            </div>
                                        </MDBFormInline>
                                    </MDBNavItem>
                                </MDBNavbarNav> */}
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink link to='!#'>
                                            <MDBIcon fab icon='facebook' />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to='!#'>
                                            <MDBIcon fab icon='twitter' />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to='!#'>
                                            <MDBIcon fab icon='instagram' />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                    {collapsed && overlay}
                </div>
            </div>
        );
    }
}

export default Nav;