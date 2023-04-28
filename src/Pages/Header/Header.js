import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/logo.png'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import defaultUser from '../../Images/profile-pic.png';


const Header = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    // console.log(user);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-0'>
                <Container>
                    <Navbar.Brand className='py-2' href="#home"><img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Fusion Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Nav className="me-auto">

                        </Nav> */}
                        <Nav className='ms-auto link-name'>
                            <button className='btn btn-danger  rounded-0'><Nav.Link className='text-light' as={Link} to="/">Home</Nav.Link ></button>



                            {
                                user ?
                                    <>
                                        <button className='btn btn-danger  rounded-0'><Nav.Link className='text-light' as={Link} to="/manageInventories">Manage Products</Nav.Link ></button>
                                        <button className='btn btn-danger  rounded-0'><Nav.Link className='text-light' as={Link} to="/addproducts">Add Products</Nav.Link ></button>
                                        <button className='btn btn-danger  rounded-0'><Nav.Link className='text-light' as={Link} to="/myproducts">My Products</Nav.Link ></button>

                                        <button className='btn btn-danger  rounded-0'><Nav.Link className='text-light' as={Link} to="/blogs">Blogs</Nav.Link ></button>

                                        <button className='btn btn-danger  rounded-0 p-0'><img className='profile-pic img-fluid' src={user.photoURL ? user.photoURL : defaultUser} alt="" /></button>

                                        <button onClick={handleSignOut} className='btn btn-danger rounded-0 py-3 '>Logout</button>
                                    </>
                                    :
                                    <>
                                        <button className='btn btn-danger  rounded-0'><Nav.Link className='text-light' as={Link} to="/blogs">Blogs</Nav.Link ></button>

                                        <button className='btn btn-danger  rounded-0 '><Nav.Link className='text-light' as={Link} to="/login">Login</Nav.Link ></button>

                                    </>
                            }
                            {/* {
                                (user && user.photoURL) ?
                                    <button className='btn btn-danger  rounded-0 px-2 py-0'> <img className="rounded-pill" width={"50px"} src={user?.photoURL} alt="" /></button> :
                                    <button className='btn btn-danger  rounded-0 px-2 py-0'> <img className="rounded-pill" width={"50px"} src={defaultUser} alt="" /></button>
                            } */}




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='bg-danger' style={{ height: '6px' }}></div>
        </div>
    );
};

export default Header;