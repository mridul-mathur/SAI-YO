import React, { Component } from 'react'
import './Retreats.styles.scss';
import { motion } from 'framer-motion';
import girl1 from '../../../assets/259083412.jpeg';
import Button from '../../Button/Button.component';
import { Link } from 'react-router-dom';

const LANG={'english':["Retreats","Meditation & yoga Retreats","Teacher's Training Course","Read More","About us","Coming soon","Our meditation methodologies combined with ancient Indian Yoga practices catalyse the functioning of your immune system and synchronise your body, breath, and mind. Each of the three, seven, and twelve-day retreats is held independently and includes special complementary activities.The retreats have a therapeutic effect on the practitioner's body thereby building strength and flexibility, relieving stress, and enhancing focus . "],
            'german':["Rückzüge","Meditieren & Yoga Rückzüge ","Lehrerfort Bildungen","Weiterlesen","Über uns","demnächst","Unsere Meditationsmethoden in Kombination mit alten indischen Yoga-Praktiken katalysieren die Funktion Ihres Immunsystems und synchronisieren Ihren Körper, Atem und Geist. Jeder der drei-, sieben- und zwölftägigen Retreats wird unabhängig abgehalten und beinhaltet spezielle ergänzende Aktivitäten. Die Retreats haben eine therapeutische Wirkung auf den Körper des Praktizierenden, wodurch Kraft und Flexibilität aufgebaut, Stress abgebaut und die Konzentration verbessert wird."],
            'spanish':["Retiros","Meditación & Yoga Retiros","Cursos de Formación de Profesor","Lee mas","Sobre nosotras","próximamente","Nuestras metodologías de meditación combinadas con antiguas prácticas de yoga de la India catalizan el funcionamiento de su sistema inmunológico y sincronizan su cuerpo, respiración y mente. Cada uno de los retiros de tres, siete y doce días se lleva a cabo de forma independiente e incluye actividades complementarias especiales. Los retiros tienen un efecto terapéutico en el cuerpo del practicante, por lo que desarrollan fuerza y ​​flexibilidad, alivian el estrés y mejoran la concentración."]}



export default class Retreats extends Component {
  constructor(props){
    super(props)
    this.state={TTC:false};
  }
  render() {
    const HandleTTC1=()=>{
      this.setState({...this.state,TTC:true});
    }
    const HandleTTC2=()=>{
      this.setState({...this.state,TTC:false});
    }
    const lang=this.props.lang;
    return (
      <div className="Retreats-container">
        <div className='Retreats-img-container'>
        <div className='Languages-border-1'></div>
        <img className='Img' src={girl1} />
        </div>
        <div className='Retreats-content-container'>
          <h1 className='text-S'>{LANG[lang][0]}</h1>
          <div className='Retreats-courses'>
            <h3><span onClick={HandleTTC2} className="hover-underline-animation">{LANG[lang][1]}</span></h3>
            <h3><span onClick={HandleTTC1} className="hover-underline-animation">{LANG[lang][2]}</span></h3>
          </div>
          <motion.div
  initial={{ opacity: 0, translateY:-10}}
  whileInView={{ opacity: 1 ,translateY:0}}
  viewport={{ once: true }}
  transition={{delay:0.2}}>
          <p>{this.state.TTC?LANG[lang][5]:LANG[lang][6]}</p>
          </motion.div>
          <div className='Retreats-buttons'>
                      <Link to={lang+"/Retreat"}><Button color="white" background="linear-gradient(30deg,#fb2f7b, #ff845d)"  Link="/"><h3 style={{color:"white"}}>{LANG[lang][3]}</h3></Button></Link>
          </div>
        </div>
      </div>
    )
  }
}