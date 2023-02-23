import { Navbar, Nav } from 'react-bootstrap'

const NavbarMenu = () => (
    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>My Next App</Navbar.Brand>
        <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/posts'>Posts</Nav.Link>
            <Nav.Link href='/jokes/random'>Jokes</Nav.Link>
            <Nav.Link href='/books'>Books</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
        </Nav>
    </Navbar>
)

export default NavbarMenu