import React, { Component } from 'react'
import { motion } from 'framer-motion'
import './Instructors.styles.scss'

const LANG={'english':["Senior Instructor ","Smita, an Indian meditation and yoga trainer, has been practising meditation for three years and has had a thorough comprehension of philosophy for ten years. She holds a C1 certification from the Goethe Institute and DELE Institute as well as a 500-hour US alliance certificate from the World Capital of Yoga. She has been dedicating her time to spirituality, Bollywood dance, multilingual singing, and german and Spanish poetry has served as a foreign language expert in several multinational institutions, and holds high proficiency in English, German and Spanish languages.  Smita is incredibly committed to working as a trainer in the Yoga and Mediation industry and helping people connect with their higher selves. She integrates positivity, sincerity, and philosophical intellect in her teaching methodologies to create a comfortable environment for the students to learn and develop a positive approach to life and in general"],
            'german':["Leitender Ausbilder","Smita, eine indische Meditations- und Yoga Trainerin, praktiziert seit drei Jahren Meditation und verfügt seit zehn Jahren über ein gründliches Verständnis der Philosophie. Sie besitzt eine C1-Zertifizierung des Goethe-Instituts und des DELE-Instituts sowie ein 500-Stunden-US-Alliance-Zertifikat der Welthauptstadt des Yoga.Sie hat ihre Zeit der Spiritualität, dem Bollywood-Tanz, dem mehrsprachigen Gesang und der deutschen und spanischen Poesie gewidmet, hat als Fremdsprache Expertin in mehreren multinationalen Institutionen gedient und verfügt über hohe Kenntnisse in Englisch, Deutsch und Spanisch.Smita engagiert sich unglaublich dafür, als Trainerin in der Yoga- und Mediation Branche zu arbeiten und Menschen dabei zu helfen, sich mit ihrem höheren Selbst zu verbinden. Sie integriert Positivität, Aufrichtigkeit und philosophischen Intellekt in ihre Lehrmethoden, um eine angenehme Umgebung zu schaffen, in der die Schüler lernen und eine positive Einstellung zum Leben und im Allgemeinen entwickeln können"],
            'spanish':["Instructora senior","Smita, una entrenadora india de meditación y yoga, ha estado practicando la meditación durante tres años y ha tenido una comprensión profunda de la filosofía durante diez años. Tiene una certificación C1 del Instituto Goethe y el Instituto DELE, así como un certificado de alianza estadounidense de 500 horas de la Capital Mundial del Yoga.Ha estado dedicando su tiempo a la espiritualidad, la danza de Bollywood, el canto multilingüe y la poesía en alemán y español, se ha desempeñado como experta en idiomas extranjeros en varias instituciones multinacionales y tiene un alto dominio de los idiomas inglés, alemán y español.Smita está increíblemente comprometida a trabajar como entrenadora en la industria del Yoga y la Mediación y ayudar a las personas a conectarse con su yo superior. Ella integra positividad, sinceridad e intelecto filosófico en sus metodologías de enseñanza para crear un ambiente cómodo para que los estudiantes aprendan y desarrollen un enfoque positivo de la vida y en general."]
           }


export default class Instructors extends Component {
  render() {
    const lang=this.props.lang;
    return (
      <div className="Instructors">
        <h1 className='text-S'>{LANG[lang][0]}</h1>
        <div className='Instructors-container'>
        <aside>
          <h3>Smita Mathur </h3>
          <motion.div
  initial={{ opacity: 0, translateY:-10}}
  whileInView={{ opacity: 1 ,translateY:0}}
  viewport={{ once: true }}
  transition={{delay:0.2}}>
          <p>{LANG[lang][1]}</p>
        </motion.div>
        </aside>
          <div className='Instructors-Img'>
            <div className='square1'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
