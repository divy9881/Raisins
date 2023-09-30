import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useRef } from 'react';  // able to use react elements in page
import MetaMaskOnboarding from '@metamask/onboarding'; // only executes if user doesn't have metamask install; add to package json

function RaisinsNavbar() {
  const onboarding = new MetaMaskOnboarding();         // used to help user download metamask if not installed
  const hasMetaMask = useRef(false)                    // determines whether user should be linked to metamask install

  useEffect(() => {
    hasMetaMask.current = isMetaMaskInstalled()
  },[]);

  // checks if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    // Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask); // returns false if metamask is not installed; else true
  };

  const onClickConnect = async () => {
    try {
      if (hasMetaMask.current === false) { // if false then chrome tab will open for you to download
        onboarding.startOnboarding();
      } else{ // connects user wallet
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("user account: " + accounts) // used in debugging
        alert("User's account " + accounts + " is connected")
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar className="bg-body-tertiary" style={{height: "10vh"}}>
      <Container>
        <Navbar.Brand href="/">Raisins</Navbar.Brand>
        <Navbar.Toggle />
          <Nav className="ml-auto justify-content-end">
            <Nav.Link href="/fund-campaign">Fund a Campaign</Nav.Link>
            <Nav.Link href="/run-campaign">Run a Campaign</Nav.Link>
            <NavDropdown title="Divy Patel" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={onClickConnect}>Connect Wallet</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default RaisinsNavbar;