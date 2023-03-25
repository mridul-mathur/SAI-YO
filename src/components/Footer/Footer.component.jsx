import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import "./Footer.styles.scss";
import om from '../../assets/ompinkgrad.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  const bgBlack = { backgroundColor: '#ffa1a1', color: 'white' };

  return (
    <CDBFooter style={bgBlack} className="shadow" >
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox> 
                <div className='Hero-title'>
                    <p className='hero_p'>SAI<img className='imgg' src={om} alt="om"/>YO</p>
                </div>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '300' }}>
              Home
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Homepage</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '300' }}>
              <Link to="" style={{textDecoration:"none",color:"white"}}>Social Media</Link>
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <a href="https://instagram.com/saiomyo0302?igshid=YmMyMTA2M2Y=" style={{textDecoration:"underline",color:"black"}}><CDBFooterLink>Instagram</CDBFooterLink></a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '300' }}>
              Cancellation Policies
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Documents</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Saiomyo, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;