import React, { Component } from 'react'
import { motion } from 'framer-motion'
import './Instructors.styles.scss'

const LANG={'english':["Senior Instructor ","Smita, an Indian meditation and yoga trainer, has been practising meditation for three years and has a thorough comprehension of philosophy for ten years. She holds a C1 certification from the Goethe Institute and DELE Institute as well as a 500-hour US alliance certificate from the World Capital of Yoga. She has been dedicating her time to spirituality, Bollywood dance, multilingual singing, and german and Spanish poetry has served as a foreign language expert in several multinational institutions, and holds high proficiency in English, German and Spanish languages.   "],
            'german':["Leitender Ausbilder","Smita, eine indische Meditations- und Yogatrainerin, praktiziert seit drei Jahren Meditation und verfügt seit zehn Jahren über ein gründliches Verständnis der Philosophie. Sie besitzt eine C1-Zertifizierung des Goethe-Instituts und des DELE-Instituts sowie ein 500-Stunden-US-Alliance-Zertifikat der Welthauptstadt des Yoga. Sie hat ihre Zeit der Spiritualität, dem Bollywood-Tanz, dem mehrsprachigen Gesang und der deutschen und spanischen Poesie gewidmet, hat als Fremdsprachenexpertin in mehreren multinationalen Institutionen gedient und verfügt über hohe Kenntnisse in Englisch, Deutsch und Spanisch."],
            'spanish':["Instructora senior","Smita, una entrenadora india de meditación y yoga, ha estado practicando la meditación durante tres años y tiene una comprensión profunda de la filosofía durante diez años. Tiene una certificación C1 del Instituto Goethe y el Instituto DELE, así como un certificado de alianza estadounidense de 500 horas de la Capital Mundial del Yoga. Ha estado dedicando su tiempo a la espiritualidad, la danza de Bollywood, el canto multilingüe y la poesía en alemán y español, se ha desempeñado como experta en idiomas extranjeros en varias instituciones multinacionales y tiene un alto dominio de los idiomas inglés, alemán y español."]
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
