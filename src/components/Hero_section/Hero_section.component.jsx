import React, { Component } from 'react';
import './Hero_section.styles.scss'
import om from '../../assets/ompinkgrad.png'
import { motion } from 'framer-motion';
import Button from '../Button/Button.component';

const LANG={'english':["Begin Your YOGA Journey in Your","Language","Enquiry","About us"],
            'german':["Beginnen Sie Ihre YOGA-Reise in Ihrem","Sprache","Anfrage","Über uns"],
            'spanish':["Comience su viaje de YOGA en su","Idioma","Consulta","Sobre nosotras"]
        }


class Hero_section extends Component {
    render() {
        const lang=this.props.lang
        console.log(lang);
        return (
            <div className='Hero'>
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
                        <button className='button_1_HH'><h3 style={{color:"#f5f5f5"}}>{LANG[lang][2]}</h3></button>
                        <button className='button_2_HH'  Link="/"><h3 className="text-S">{LANG[lang][3]}</h3></button>
                    </div>
                </div>
                <div className='gradient'></div>
            </div>
        );
    }
}


export default Hero_section