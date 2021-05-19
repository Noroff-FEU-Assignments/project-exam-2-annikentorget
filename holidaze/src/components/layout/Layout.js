import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import Home from '../../pages/Home';
import Hotels from '../../pages/Hotels';
import Contact from '../../pages/Contact';

const Layout = () => {
    return(
        <Router>
            <Navbar bg='light' variant='light' expand='lg'>
                <Navbar.Brand href='/'>React App</Navbar.Brand>
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
                </Switch>
        </Router>
    )
}

export default Layout;