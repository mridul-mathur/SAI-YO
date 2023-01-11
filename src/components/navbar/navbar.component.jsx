import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import om from '../../assets/ompinkgrad.png'
import './navbar.styles.scss'

const LANG={'english':["Home","Retreats","About us","Instructor","Location","English"],
            'german':["Heimat","Rückzüge","Über uns","Lehrerin","Lage","Deutsch"],
            'spanish':["Hogar","Cretiros","Sobre Nosotras","Instructora","Ubicación","Español"]}

export default class Navbar extends Component {
  render() {
    const lang=this.props.lang
    return (
      <nav className="nav-Back navbar sticky-top  navbar-expand-lg">
  <a className="navbar-brand logo" href="#Hero"> <p>SAI<img src={om} alt="om"/>YO</p></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link hover-underline-animation text-S"  href="#Language">{LANG[lang][5]} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover-underline-animation" style={{color:'white'}}  href="#Retreat">{LANG[lang][1]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover-underline-animation" style={{color:'white'}}  href="#AU">{LANG[lang][2]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover-underline-animation" style={{color:'white'}}  href="#Instructors">{LANG[lang][3]}</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link  dropdown-toggle" style={{color:'white'}}   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {LANG[lang][4]}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item">Goa</a>
          <a className="dropdown-item">Udaipur</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}
