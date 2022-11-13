import React, { Component } from 'react';
import './Hero_section.styles.scss'
import om from '../../assets/ompinkgrad.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.component';

const LANG={'english':["Begin Your Spiritual Journey in Your","Language","ReadMore","About us"],
            'german':["Beginnen Sie Ihre spirituelle Reise in Ihrem","Weiterlesen","Anfrage","Über uns"],
            'spanish':["Comience su viaje espiritual en su","Idioma","LeeMas","Sobre nosotras"]
        }


class Hero_section extends Component {
    render() {
        const lang=this.props.lang
        console.log(lang);
        return (
            <div className='Hero' id="Hero">
                <div className='Hero-title'>
                <motion.div
  initial={{ opacity: 0, translateY:-10}}
  whileInView={{ opacity: 1 ,translateY:0}}
  viewport={{ once: true }}
  transition={{delay:0.2}}>
     <p>SAI<img src={om} alt="om"/>YO</p>
     </motion.div>
                </div>
                <div className='Hero-content'>
                <motion.div
  initial={{ opacity: 0, translateY:-10}}
  whileInView={{ opacity: 1 ,translateY:0}}
  viewport={{ once: true }}
  transition={{delay:0.4}}><span className='Hero-slogan'>{LANG[lang][0]} <span>{LANG[lang][1]}</span></span></motion.div>
                    <div className='Hero-buttons'>
                        <button className='button_1_HH'><h3 style={{color:"#f5f5f5"}}><Link to={lang+"/Retreat"} className="link">{LANG[lang][2]}</Link></h3></button>
                        <a href="#AU"><button className='button_2_HH'><h3 className="text-S">{LANG[lang][3]}</h3></button></a>
                    </div>
                </div>
                <div className='gradient'></div>
            </div>
        );
    }
}


export default Hero_section