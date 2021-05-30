import Navbar from 'react-bootstrap/Navbar';
import { AuthProvider } from '../../context/AuthContext';
import logo from '../../images/logo.png';

import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import Home from '../../pages/Home';
import Hotels from '../../pages/Hotels';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import Details from '../../pages/Details';

const Layout = () => {
    return(
        <AuthProvider>
            <Router>
                <Navbar variant='dark' expand='lg'>
                    <Navbar.Brand href='/'><img className="logo" src={logo} alt="logo"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/hotels'>Hotels</Nav.Link>
                            <Nav.Link href='/contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/hotels' component={Hotels} />
                        <Route path='/contact' component={Contact} />
                        <Route path ='/login' component={Login} />
                        <Route path ='/hotels/:id' component={Details} />
                    </Switch>
            </Router>
        </AuthProvider>
    );
};

export default Layout;