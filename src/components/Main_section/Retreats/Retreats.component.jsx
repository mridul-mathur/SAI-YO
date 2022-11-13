import React, { Component } from 'react'
import './Retreats.styles.scss';
import { motion } from 'framer-motion';
import girl1 from '../../../assets/girl1.jpg';
import Button from '../../Button/Button.component';
import { Link } from 'react-router-dom';

const LANG={'english':["Retreats","Meditation & yoga Retreats","Teacher's Training Course","Read More","Coming soon","We are soon launching our teacher's training course which will assist you in learning Yoga and meditation in a detail-oriented manner. With the help of our program, you will develop the necessary skills to become a skilled instructor who can explain the intricacies of yoga and meditation to students with the utmost precision. Additionally, our accreditation raises your credibility as a professional.","Our meditation methodologies combined with ancient Indian Yoga practices catalyse inner healing, attract positivity and synchronise your body, breath, and mind. Each three, seven, and twelve-day retreat are held independently and includes special complementary activities. The retreats have a therapeutic effect on the practitioner's body thereby building strength and flexibility, relieving stress, and enhancing focus. Are you prepared to step outside your comfort zone, meet new people and embrace the benefits of Yoga?","Coming soon"],
            'german':["Rückzüge","Meditieren & Yoga Rückzüge ","Lehrerfort Bildungen","Weiterlesen","demnächst","In Kürze starten wir unsere Lehrerfortbildung, die Sie detailorientiert beim Erlernen von Yoga und Meditation unterstützt. Mit Hilfe unseres Programms entwickeln Sie die notwendigen Fähigkeiten, um ein erfahrener Lehrer zu werden, der den Schülern die Feinheiten von Yoga und Meditation mit äußerster Präzision erklären kann. Darüber hinaus erhöht unsere Akkreditierung Ihre Glaubwürdigkeit als Fachmann","Unsere Meditationsmethoden in Kombination mit alten indischen Yoga-Praktiken katalysieren die innere Heilung, ziehen Positivität an und synchronisieren Körper, Atem und Geist. Jedes drei-, sieben- und zwölftägige Retreat wird unabhängig voneinander abgehalten und beinhaltet spezielle ergänzende Aktivitäten. Die Retreats haben eine therapeutische Wirkung auf den Körper des Praktizierenden, wodurch Kraft und Flexibilität aufgebaut, Stress abgebaut und die Konzentration verbessert wird. Bist du bereit, deine Komfortzone zu verlassen, neue Leute kennenzulernen und die Vorteile von Yoga zu nutzen?","demnächst"],
            'spanish':["Retiros","Meditación & Yoga Retiros","Cursos de Formación de Profesor","Lee mas","pronto","Pronto lanzaremos nuestro curso de formación de profesores que te ayudará a aprender yoga y meditación de forma detallada. Con la ayuda de nuestro programa, desarrollará las habilidades necesarias para convertirse en un instructor experto que pueda explicar las complejidades del yoga y la meditación a los estudiantes con la máxima precisión. Además, nuestra acreditación aumenta su credibilidad como profesional.","Nuestras metodologías de meditación combinadas con las antiguas prácticas de yoga de la India catalizan la curación interior, atraen la positividad y sincronizan tu cuerpo, respiración y mente. Cada retiro de tres, siete y doce días se lleva a cabo de forma independiente e incluye actividades complementarias especiales. Los retiros tienen un efecto terapéutico en el cuerpo del practicante, por lo que desarrollan fuerza y ​​flexibilidad, alivian el estrés y mejoran la concentración. ¿Estás preparado para salir de tu zona de confort, conocer gente nueva y aprovechar los beneficios del yoga?","pronto"]}



export default class Retreats extends Component {
  constructor(props){
    super(props)
    this.state={TTC:false,BUTTON:LANG[this.props.lang][3]};
  }
  render() {
    const HandleTTC1=()=>{
      this.setState({...this.state,TTC:true,BUTTON:LANG[this.props.lang][4]});
    }
    const HandleTTC2=()=>{
      this.setState({...this.state,TTC:false,BUTTON:LANG[this.props.lang][3]});
    }
    const lang=this.props.lang;
    return (
      <div className="Retreats-container" id="Retreat">
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
                      <Link to={this.state.Link}><Button color="white" background="linear-gradient(30deg,#fb2f7b, #ff845d)"  Link="/"><h3 style={{color:"white"}}>{this.state.BUTTON}</h3></Button></Link>
          </div>
        </div>
      </div>
    )
  }
}