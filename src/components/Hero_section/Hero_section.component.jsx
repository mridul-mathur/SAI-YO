import React, { Component } from 'react';
import './Hero_section.styles.scss'
import om from '../../assets/ompinkgrad.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.component';

const LANG={'english':["Begin Your Spiritual Journey in Your","Language","Enquiry","About us","https://forms.gle/RWDe8wqP6KzwrYYu9"],
            'german':["Beginnen Sie Ihre spirituelle Reise in Ihrer","Sprache","Anfrage","Über uns","https://forms.gle/345XYh7sW77igJdE7"],
            'spanish':["Comience su viaje espiritual en su","Idioma","Consulta","Sobre nosotras","https://forms.gle/RWDe8wqP6KzwrYYu9"]
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
                        <button className='button_1_HH'><h3 style={{color:"#f5f5f5"}}><a href={LANG[lang][4]} style={{color:"#f5f5f5",textDecoration:"none",color:"white"}}>{LANG[lang][2]}</a></h3></button>
                        <a href="#AU"><button className='button_2_HH'><h3 className="text-S">{LANG[lang][3]}</h3></button></a>
                    </div>
                </div>
                <div className='gradient'></div>
            </div>
        );
    }
}


export default Hero_section