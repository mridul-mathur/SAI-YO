import React, { Component } from 'react'
import './navbar.styles.scss'

const LANG={'english':["Home","Courses","About us","Instruction","location"],
            'german':["Heimat","Kurse","Über uns","Anweisung","Lage"],
            'spanish':["Hogar","Cursos","Sobre nosotras","Instrucciones","ubicación"]}

export default class Navbar extends Component {
  render() {
    const lang=this.props.lang
    return (
      <nav className="nav-Back navbar sticky-top  navbar-expand-lg">
  <a className="navbar-brand text-S" href="#">{lang}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link hover-underline-animation" style={{color:'white'}} href="#">{LANG[lang][0]} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover-underline-animation" style={{color:'white'}}  href="#">{LANG[lang][1]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover-underline-animation" style={{color:'white'}}  href="#">{LANG[lang][2]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover-underline-animation" style={{color:'white'}}  href="#">{LANG[lang][3]}</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link  dropdown-toggle" style={{color:'white'}}  href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {LANG[lang][4]}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Goa</a>
          <a className="dropdown-item" href="#">Udaipur</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}
