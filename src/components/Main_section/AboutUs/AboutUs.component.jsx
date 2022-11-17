import React, { Component } from 'react'
import './AboutUs.styles.scss'
import { motion } from 'framer-motion';
import girl2 from '../../../assets/girl2.jpg';

const LANG={'english':["About us","SaiOmYo transfigures your Ahar(diet), Vihaar(recreation), Achaar(conduct), and Vichar(thought) and aligns them with the benefits of Meditation and Yoga. We have integrated spiritual practices like core forms of meditation with ancient Yoga practices in the form of RETREATS and TTC (teacher’s training course) in three different languages -German, Spanish, and English by trainers certified by recognized institutions around the world.Our trainers are well acquainted with concepts of physiology and psychology and hence comprehensively conduct the classes to instill a solid grasp of the principles of spirituality and transform your physical and mental equilibrium. The certifications from SaiOmYo increase your credibility as a Yoga practitioner across India and abroad, delivering unmatched value personally, professionally, and spiritually. Our courses are set to be conducted amidst the serenity of GOA and tranquil parts of UDAIPUR to get the essence of scenic beauty and extract the goodness of Ayurveda through sattvic vegetarian food, complimentary massage, aroma therapy and eye retreats combined with tints of Rajasthani folk dances - Kalbeliya and Ghoomar. Join SaiOmYo to begin your yoga and meditation journey and enjoy a unique learning experience, in your language."],
            'german':["Über uns","SaiOmYo verwandelt Ihre Ahar (Ernährung), Vihaar (Erholung), Achaar (Verhalten) und Vichar (Gedanken) und bringt sie mit den Vorteilen von Meditation und Yoga in Einklang. Wir haben spirituelle Praktiken wie Kernformen der Meditation mit alten Yoga-Praktiken in Form von RETREATS und TTC (Lehrerausbildung) in drei verschiedenen Sprachen - Deutsch, Spanisch und Englisch - von zertifizierten Trainern weltweit integriert. Unsere Trainer sind mit Konzepten der Physiologie und Psychologie bestens vertraut und führen daher den Unterricht umfassend durch, um ein solides Verständnis der Prinzipien der Spiritualität zu vermitteln und Ihr körperliches und geistiges Gleichgewicht zu verändern. Die Zertifizierungen von SaiOmYo erhöhen Ihre Glaubwürdigkeit als Yoga-Praktizierender in ganz Indien und im Ausland und bieten persönlich, beruflich und spirituell einen unübertroffenen Wert. Unsere Kurse werden inmitten der Ruhe von GOA und ruhigen Teilen von UDAIPUR durchgeführt, um die Essenz der landschaftlichen Schönheit zu erfahren und die Güte des Ayurveda durch sattvisches vegetarisches Essen, kostenlose Massagen, Aromatherapie und Augen-Retreats in Kombination mit Tönungen von Rajasthani-Volkstänzen zu extrahieren - Kalbelia und Ghoomar. Begleiten Sie SaiOmYo, um Ihre Yoga- und 4-Meditationsreise zu beginnen und eine einzigartige Lernerfahrung in Ihrer Sprache zu genießen."],
            'spanish':["Sobre nosotras","SaiOmYo transfigura tu Ahar (dieta), Vihaar (recreación), Achaar (conducta) y Vichar (pensamiento) y los alinea con los beneficios de la Meditación y el Yoga. Hemos integrado prácticas espirituales como formas básicas de meditación con antiguas prácticas de Yoga en forma de RETIROS y TTC (curso de formación de profesores) en tres idiomas diferentes: alemán, español e inglés por formadores certificados por instituciones reconocidas de todo el mundo.Nuestros entrenadores conocen bien los conceptos de fisiología y psicología y, por lo tanto, imparten las clases de manera integral para inculcar una comprensión sólida de los principios de la espiritualidad y transformar su equilibrio físico y mental. Las certificaciones de SaiOmYo aumentan su credibilidad como practicante de yoga en la India y en el extranjero, brindando un valor inigualable a nivel personal, profesional y espiritual. Nuestros cursos se llevarán a cabo en medio de la serenidad de GOA y las partes tranquilas de UDAIPUR para obtener la esencia de la belleza escénica y extraer la bondad del Ayurveda a través de comida vegetariana sátvica, masajes gratuitos, aromaterapia y retiros oculares combinados con tintes de danzas folclóricas de Rajasthani. - Kalbelia y Ghoomar. Únase a SaiOmYo para comenzar su viaje de yoga y meditación  y disfrute de una experiencia de aprendizaje única, en su idioma."]
        }

export default class AboutUs extends Component {
  render() {
    const lang=this.props.lang;
    return (
      <div className="AboutUs">
        <div className='AboutUs-content'>
          <h1 className='text-S'>{LANG[lang][0]}</h1>
          <motion.div
  initial={{ opacity: 0, translateY:-10}}
  whileInView={{ opacity: 1 ,translateY:0}}
  viewport={{ once: true }}
  transition={{delay:0.2}}>
          <p>{LANG[lang][1]}</p>
        </motion.div>
        </div>
        <div className='AboutUs-Img'>
          <img className='Img' src={girl2} />
          <div className='back1'> </div>
          <div className='back2'/>
        </div>
      </div>
    )
  }
}
