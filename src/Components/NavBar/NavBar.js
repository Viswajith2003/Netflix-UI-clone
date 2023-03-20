import React from 'react'
import "./NavBar.css"
//import { CNavbar,CNavbarBrand,CNavbarToggler } from '@coreui/react'

function NavBar() {

 // const [visible, setVisible] = useState(false)
  return (
    <div className='Navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix_logo" />

    {/* <CNavbar expand="lg" colorScheme="dark" className="bg-primary">
      <CContainer fluid>
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="light" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar> */}
    





        <img className='avtar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="nav-avatar" />
    </div>
  )
}

export default NavBar