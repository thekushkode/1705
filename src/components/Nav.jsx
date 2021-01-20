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
    MDBContainer
} from 'mdbreact';
import './home.css';
import './1705Colors.css';
import logo3 from '../assets/Logos/1705white.jpg';

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
                style={{ backgroundColor: 'black' }}
                onClick={this.handleTogglerClick}
            />
        );

        const { collapsed } = this.state;
        return (
            <div id='parallaxintro'>
                <div>
                    <MDBNavbar
                        color='black'
                        style={navStyle}
                        dark
                        expand='md'
                        fixed='top'
                        scrolling
                        transparent
                    >
                        <MDBContainer>
                            <MDBNavbarBrand>
                                <a href='/'>
                                    <strong className='goldtext'>SEVENTEEN<span className='white-text'>05</span></strong>
                                    {/* <a href='/'><img style={{ width: '100px', padding: '0px' }} alt='1705 logo' src={logo3} /></a> */}
                                </a>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.handleTogglerClick} />
                            <MDBCollapse isOpen={collapsed} navbar>
                                <MDBNavbarNav left>
                                    {/* <MDBNavItem>
                                        <MDBNavLink className='font-weight-bolder white-text' to='#'>Corporate Gatherings</MDBNavLink>
                                    </MDBNavItem> */}
                                    {/* <MDBDropdown>
                                        <MDBDropdownToggle nav caret className='white-text'>
                                            <span className="font-weight-bolder white-text">Events</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem className='p-0'><MDBNavLink to='#' className='black-text'>Weddings</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink to='#' className='black-text'>Conferences</MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className='p-0'><MDBNavLink to='#' className='black-text'>Galas</MDBNavLink></MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown> */}
                                    <MDBNavItem>
                                        <MDBNavLink className='text-uppercase font-weight-bolder white-text mobileNavMargin' to='/events' style={{ marginLeft: '70px' }}>Events</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink className='text-uppercase font-weight-bolder white-text mobileNavMargin' to='/spaces' style={{ marginLeft: '70px' }}>Our Space</MDBNavLink>
                                    </MDBNavItem>
                                    {/* <MDBNavItem>
                                        <MDBNavLink className='font-weight-bolder white-text' to='#'>Payments</MDBNavLink>
                                    </MDBNavItem> */}
                                    <MDBNavItem>
                                        <MDBNavLink className='text-uppercase font-weight-bolder white-text mobileNavMargin' to='/contact' style={{ marginLeft: '70px' }}>Get Connected</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink className='text-uppercase font-weight-bolder white-text mobileNavMargin' to='/chefstable'>Dine For A Cause</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to='!#'>
                                            <MDBIcon className='goldtext2' fab icon='facebook' />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    {/* <MDBNavItem>
                                        <MDBNavLink link to='!#'>
                                            <MDBIcon className='goldtext2' fab icon='twitter' />
                                        </MDBNavLink>
                                    </MDBNavItem> */}
                                    <MDBNavItem>
                                        <MDBNavLink link to='!#'>
                                            <MDBIcon className='goldtext2' fab icon='instagram' />
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