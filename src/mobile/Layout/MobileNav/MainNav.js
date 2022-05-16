import React from 'react'
import'./main-nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';




function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className='container' light expand="md" sticky="top">
      <div className={'header-mobnav'}>
      <p className={'sugamAushadhi-mobnav navbar-brand'}>Sugam Aushadhi</p>
      {/* <img
        alt=""
        className={'alignRight-mobnav'}
        src="https://static.overlay-tech.com/assets/b6a20365-275e-4501-98ac-e2db7f750d0e.svg"
      /> */}
      
      <NavbarToggler className='alignRight-mobnav' onClick={toggle} color={'white'}>
      {/* <img
        alt=""
        className={'alignRight-mobnav'}
        src="https://static.overlay-tech.com/assets/b6a20365-275e-4501-98ac-e2db7f750d0e.svg"
      /> */}
      </NavbarToggler>
      </div>
      <Collapse isOpen={isOpen} navbar>
            
  
            <Nav navbar >
            <NavItem >
                <NavLink href="/" style={{fontSize:15, color:'black', fontWeight:600}}>Home</NavLink>
              </NavItem>
              <NavItem style={{marginRight:'10%'}}>
                <NavLink href="/category" style={{fontSize:15, color:'black', fontWeight:600}}>Category</NavLink>
              </NavItem>
              <NavItem style={{marginRight:'10%'}}>
                <NavLink href="/supplements" style={{fontSize:15, color:'black', fontWeight:600}}>Medication</NavLink>
              </NavItem>
              <NavItem style={{marginRight:'10%'}}>
                <NavLink href="/supplements" style={{fontSize:15, color:'black', fontWeight:600}}>Supplements</NavLink>
              </NavItem>
              <NavItem style={{marginRight:'10%'}}>
                <NavLink href="/supplements" style={{fontSize:15, color:'black', fontWeight:600}}>Compare</NavLink>
              </NavItem>
            </Nav>
            </Collapse>
   
    
    </Navbar>
  )
}

export default MainNav