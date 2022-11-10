import React from 'react'
import Footer from '../../components/Footer/Footer.component';
import Hero_section from '../../components/Hero_section/Hero_section.component';
import AboutUs from '../../components/Main_section/AboutUs/AboutUs.component';
import Instructors from '../../components/Main_section/Instructors/Instructors.component';
import Languages from '../../components/Main_section/Languages/Languages.component';
import Retreats from '../../components/Main_section/Retreats/Retreats.component';
import TC from '../../components/Main_section/TC/TC.component';
import Navbar from '../../components/navbar/navbar.component';
import { useParams } from 'react-router-dom';
import './Homepage.styles.scss';

export default function Homepage(props) {
  const lang=props.lang;
  return (
    <div>
        <Navbar lang={lang}/>
        <Hero_section lang={lang}/>
        <Languages lang={lang}/>
        <Retreats lang={lang}/>
        <AboutUs lang={lang}/>
        <Instructors lang={lang}/>
        <TC lang={lang}/>
        <Footer lang={lang}/>
    </div>
  )
}
