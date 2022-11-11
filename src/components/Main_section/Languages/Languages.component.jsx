import React, { Component } from 'react'
import { motion } from 'framer-motion'
import './Languages.styles.scss'
import { Link } from 'react-router-dom';

const LANG={'english':["Language","Choose your preferred Language and start your yoga and meditation journey with Saiomyo"],
            'german':["Sprache","Wählen Sie Ihre bevorzugte Sprache und beginnen Sie Ihre Yoga- und Meditationsreise mit Saiomyo"],
            'spanish':["Idioma","Elija su idioma preferido y comience su viaje de yoga y meditación con Saiomyo"]}



export default class Languages extends Component {

  render() {  
    const lang=this.props.lang;
    return (
      <div className="Languages">
        <div className='Languages-intro'>
        <motion.div
  initial={{ opacity: 0, translateY:-10}}
  whileInView={{ opacity: 1 ,translateY:0}}
  viewport={{ once: true }}
  transition={{delay:0.2}}>
            <h2 className='text-S'>{LANG[lang][0]}</h2>
            </motion.div>
            <motion.div
  initial={{ opacity: 0, translateY:-10}}
  whileInView={{ opacity: 1 ,translateY:0}}
  viewport={{ once: true }}
  transition={{delay:0.3}}>
            <p>{LANG[lang][1]}</p>
        </motion.div>
        </div>
        <div className='Languages-buttons'>
            <div className='Languages-border-1'></div>
            <div id="example1">
              <Link to="/german" className='link'>
                <h3>Deútsch</h3>
                <h1>Ää</h1>
              </Link>
            </div>
            <div id="example1"> 
            <Link to="/spanish" className='link'>
                <h3>Español</h3>
                <h1>Ññ</h1>
            </Link>
            </div>
            <div id="example1">
            <Link to="/english" className='link'>
                <h3>English</h3>
                <h1>Aa</h1> 
            </Link>   
            </div>
            <div className='Languages-border-2'></div>
        </div>
      </div>
    )
  }
}
