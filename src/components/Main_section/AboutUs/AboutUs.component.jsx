import React, { Component } from 'react'
import './AboutUs.styles.scss'
import { motion } from 'framer-motion';
import girl2 from '../../../assets/girl2.jpg';

const LANG={'english':["About us","SaiOmYo transfigures your Ahar(diet), Vihaar(recreation), Achaar(conduct), and Vichar(thought) and aligns them with the benefits of Yoga and Meditation .We have integrated the Ancient Indian Yoga practices with core meditation techniques in the form of RETREATS and TTC (tecaher’s training course) in three different languages - English, Spanish and German by trainers certified from recognized institutions around the world.Our trainers are well acquainted with concepts of physiology and psychology and hence conduct the classes in a comprehensive manner to instil a solid grasp of the principles of YOGA and transform your physical and mental equilibrium . The certifications from SaiOmYo increase your credibility as a Yoga practitioner across India and abroad , delivering unmatched value personally , professionally and spiritually . Our courses are set to be conducted amidst the serenity of GOA and tranquil parts of UDAIPUR to get the essence of scenic beauty and extract the goodness of ayurveda through sattvic vegetarian food , complimentary massage, aroma therapy and eye retreats combined with tints of rajasthani folk dances - Kalbeliya and Ghoomar. Join SaiOmYo to begin your yoga and4 meditation journey and enjoy a unique learning experience , in your own language ."],
            'german':["Über uns","SaiOmYo verwandelt Ihre Ahar (Ernährung), Vihaar (Erholung), Achaar (Verhalten) und Vichar (Gedanken) und bringt sie in Einklang mit den Vorteilen von Yoga und Meditation RETREATS und TTC (Techaher's Training Course) in drei verschiedenen Sprachen - Englisch, Spanisch und Deutsch, von Trainern, die von anerkannten Institutionen auf der ganzen Welt zertifiziert wurden. Unsere Trainer sind mit Konzepten der Physiologie und Psychologie bestens vertraut und führen den Unterricht daher umfassend durch ein solides Verständnis der Prinzipien des YOGA und transformieren Ihr körperliches und geistiges Gleichgewicht. Die Zertifizierungen von SaiOmYo erhöhen Ihre Glaubwürdigkeit als Yoga-Praktizierender in Indien und im Ausland, indem sie persönlich, beruflich und spirituell einen unübertroffenen Wert liefern. Unsere Kurse werden inmitten der Gelassenheit von GOA und ruhigen Teilen von UDAIPUR durchgeführt, um die Essenz der landschaftlichen Schönheit zu erhalten und die Güte des Ayurveda durch sattvische vegetarische Speisen, kostenlose Massagen, Aromatherapie und Augen-Retreats in Kombination mit Tönungen von Rajasthani-Volkstänzen zu extrahieren - Kalbeliya und Ghoomar. Schließen Sie sich SaiOmYo an, um Ihre Yoga- und4-Meditationsreise zu beginnen und eine einzigartige Lernerfahrung in Ihrer eigenen Sprache zu genießen."],
            'spanish':["Sobre nosotras","SaiOmYo transfigura su Ahar (dieta), Vihaar (recreación), Achaar (conducta) y Vichar (pensamiento) y los alinea con los beneficios del Yoga y la Meditación. Hemos integrado las prácticas del Yoga de la India Antigua con técnicas de meditación centrales en forma de RETIROS y TTC (curso de capacitación de tecaher) en tres idiomas diferentes: inglés, español y alemán por entrenadores certificados de instituciones reconocidas de todo el mundo. Nuestros entrenadores conocen bien los conceptos de fisiología y psicología y, por lo tanto, imparten las clases de manera integral para inculcar una sólida comprensión de los principios del YOGA y transformar tu equilibrio físico y mental. Las certificaciones de SaiOmYo aumentan su credibilidad como practicante de yoga en la India y en el extranjero, brindando un valor inigualable a nivel personal, profesional y espiritual. Nuestros cursos se llevarán a cabo en medio de la serenidad de GOA y las partes tranquilas de UDAIPUR para obtener la esencia de la belleza escénica y extraer la bondad del ayurveda a través de la comida vegetariana sáttvica, masajes complementarios, aromaterapia y retiros oculares combinados con tintes de danzas folclóricas de rajasthani. - Kalbeliya y Ghoomar. Únase a SaiOmYo para comenzar su viaje de yoga y meditación4 y disfrute de una experiencia de aprendizaje única, en su propio idioma."]
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
