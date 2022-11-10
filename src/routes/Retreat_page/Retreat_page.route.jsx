import React, { Component } from 'react'
import om from '../../assets/ompinkgrad.png'
import girl1 from '../../assets/259083412.jpeg';
import "./Retreat_page.styles.scss";
import Button from '../../components/Button/Button.component';
import Footer from '../../components/Footer/Footer.component';
import { Link } from 'react-router-dom';


const LANG={'english':["3 DAYS RETREAT","Your experience of the actual essence of yoga and meditation is the goal of the three-day retreats. The three-day retreats help you achieve the ideal balance between your mental and physical health by bringing peace, building immune strength, and increasing attentiveness and enthusiasm. The 3-day retreats are the ideal option if you want to establish a positive atmosphere around yourself and begin your yoga practice.","7 DAYS RETREAT","The 7 day retreats are designed to give you a thorough understanding of the intricacies of yogic practices along with a blend of meditation techniques to revive your inner self. This will introduce you to an unmatched experience of healing and energising ,both spiritually and physically. You will be able to assess obvious differences in stress levels, decision-making skills, and general approach towards life , after the seven-day retreats. It is the best choice for you if you want to uncover your most upbeat, healthy, and spiritually adept side through Yoga and Meditation","12 DAYS RETREAT","A series of personalised yoga and meditation practises created specifically for you to meet your physical and mental health requirements are included in the 12-day retreats.Your revitalised self is guaranteed by the 12-day retreats . The 12-day retreats are the best option if you want to use yoga and meditation to transform your physical and emotional well-being. ","Mediation and","Yoga ", "retreats","days","Learn","What things were they gonna perform?","Venue dates and fee descriptions","Apply now","The three-day retreats include both beginner and advanced Dhyana, Pranayams and Yoga Asanas, 7 Chakras Healing meditation, as well as free Aroma Therapies, Foot Massages, and Ayurvedic Healing Massages.These retreats offer live rajasthani folk dance performances as a special attraction along with serene , calm and high-quality accommodation and adequate satvik food .","A series of advance Pranayams and Kriyas, Vinyasa Flow Yoga Asana, Hatha yoga, and various forms of meditation techniques, including healing 7 Chakras, are all included in the 7-day retreat to guarantee that positive energy is properly absorbed.One 30-minute philosophy session, an Ayurvedic deep-healing massage, and a Devotional Music session completes the complimentary inclusions. Our high-quality accommodation and adequate satvik food enhance the benefits of the 7-day long retreats .","The twelve day retreats are customizable as per the attendee's request and health requirements. The complimentary offerings , quality accommodation and essential satvik food are also offered accordingly ." ],
            'german':["3 TAGE RÜCKZUG","Ihre Erfahrung der eigentlichen Essenz von Yoga und Meditation ist das Ziel der dreitägigen Retreats. Die dreitägigen Retreats helfen Ihnen, das ideale Gleichgewicht zwischen Ihrer geistigen und körperlichen Gesundheit zu erreichen, indem sie Frieden bringen, Immunstärke aufbauen und Aufmerksamkeit und Begeisterung steigern. Die 3-Tages-Retreats sind die ideale Option, wenn Sie eine positive Atmosphäre um sich herum aufbauen und mit Ihrer Yoga-Praxis beginnen möchten.","7-TAGE-RETREAT","Die 7-Tages-Retreats sollen Ihnen ein gründliches Verständnis der Feinheiten von Yoga vermitteln Yoga-Praktiken zusammen mit einer Mischung aus Meditationstechniken, um Ihr inneres Selbst wiederzubeleben. Dies wird Sie in eine unübertroffene Erfahrung von Heilung und Energetisierung einführen, sowohl spirituell als auch körperlich. Nach den siebentägigen Retreats werden Sie in der Lage sein, offensichtliche Unterschiede in Bezug auf Stresslevel, Entscheidungsfähigkeit und allgemeine Einstellung zum Leben einzuschätzen. Es ist die beste Wahl für Sie, wenn Sie Ihre optimistischste, gesündeste und spirituell versierteste Seite durch Yoga und Meditation, "," 12 DAYS RETREAT, "," Eine Reihe von personalisierten Yoga- und Meditationspraktiken entdecken möchten, die speziell für Sie entwickelt wurden, um Ihre zu erfüllen Anforderungen an die körperliche und geistige Gesundheit sind in den 12-tägigen Retreats enthalten. Ihr revitalisiertes Selbst wird durch die 12-tägigen Retreats garantiert. Die 12-tägigen Retreats sind die beste Option, wenn Sie Yoga und Meditation nutzen möchten, um Ihr körperliches und emotionales Wohlbefinden zu transformieren. ","Mediation und","Yoga", "Retreats","Tage","Lernen","Welche Dinge wollten sie durchführen?","Veranstaltungstermine und Gebührenbeschreibungen","Jetzt bewerben","Die drei- Tages-Retreats umfassen Dhyana für Anfänger und Fortgeschrittene, Pranayams und Yoga-Asanas, 7-Chakren-Heilmeditation sowie kostenlose Aromatherapien, Fußmassagen und ayurvedische Heilmassagen. ruhige und qualitativ hochwertige Unterkunft und angemessenes Satvik-Essen. "," Eine Reihe von fortgeschrittenen Pranayams und Kriyas, Vinyasa Flow Yoga Asanas, Hatha Yoga und verschiedene Formen von Meditationstechniken, einschließlich der Heilung von 7 Chakren, sind alle in den 7 Tagen enthalten Rückzug, um sicherzustellen, dass positive Energie richtig absorbiert wird. Eine 30-minütige Philosophiesitzung, eine ayurvedische Tiefenheilungsmassage und eine Andachtsmusiksitzung vervollständigen die kostenlosen Leistungen. Unsere qualitativ hochwertige Unterkunft und angemessenes Satvik-Essen erhöhen die Vorteile der 7-tägigen Retreats. ,,,,Die zwölftägigen Retreats sind gemäß den Wünschen und Gesundheitsanforderungen des Teilnehmers anpassbar. Die kostenlosen Angebote, die hochwertige Unterkunft und das grundlegende Satvik-Essen werden ebenfalls entsprechend angeboten."],
            'spanish':["RETIRO DE 3 DÍAS","Tu experiencia de la esencia real del yoga y la meditación es el objetivo de los retiros de tres días. Los retiros de tres días lo ayudan a lograr el equilibrio ideal entre su salud mental y física al brindarle paz, fortalecer el sistema inmunológico y aumentar la atención y el entusiasmo. Los retiros de 3 días son la opción ideal si quieres establecer un ambiente positivo a tu alrededor y comenzar tu práctica de yoga.","RETIRO DE 7 DÍAS","Los retiros de 7 días están diseñados para darte una comprensión profunda de las complejidades de prácticas yóguicas junto con una mezcla de técnicas de meditación para revivir tu ser interior. Esto lo introducirá a una experiencia inigualable de sanación y energización, tanto espiritual como físicamente. Podrás evaluar las diferencias obvias en los niveles de estrés, las habilidades para tomar decisiones y el enfoque general de la vida después de los retiros de siete días. Es la mejor opción para ti si quieres descubrir tu lado más optimista, saludable y espiritualmente adepto a través del Yoga y la Meditación","RETIRO DE 12 DÍAS","Una serie de prácticas personalizadas de yoga y meditación creadas específicamente para ti para satisfacer tus Los requisitos de salud física y mental están incluidos en los retiros de 12 días. Los retiros de 12 días garantizan que usted se revitalice. Los retiros de 12 días son la mejor opción si quieres utilizar el yoga y la meditación para transformar tu bienestar físico y emocional. "," Mediación y "," Yoga "," retiros "," días "," Aprender "," ¿Qué cosas iban a realizar? "," Fechas del lugar y descripciones de tarifas "," Aplicar ahora "," Los tres Los retiros de un día incluyen Dhyana, pranayamas y asanas de yoga para principiantes y avanzados, meditación curativa de los 7 chakras, así como terapias aromáticas gratuitas, masajes de pies y masajes curativos ayurvédicos. Alojamiento tranquilo y de alta calidad y comida sátvica adecuada. ","Una serie de Pranayamas y Kriyas avanzados, Vinyasa Flow Yoga Asana, Hatha yoga y varias formas de técnicas de meditación, incluida la curación de 7 Chakras, están incluidas en los 7 días. retiro para garantizar que la energía positiva se absorba adecuadamente. Una sesión de filosofía de 30 minutos, un masaje ayurvédico de sanación profunda y una sesión de música devocional completan las inclusiones de cortesía. Nuestro alojamiento de alta calidad y la comida sátvica adecuada mejoran los beneficios de los retiros de 7 días de duración.","Los retiros de doce días se pueden personalizar según la solicitud del asistente y los requisitos de salud. Las ofertas complementarias, el alojamiento de calidad y la comida sátvica esencial también se ofrecen en consecuencia."]}
export default class Retreat_page extends Component {
    constructor(props){
        super(props);
        this.state={
            content:[LANG[this.props.lang][0],LANG[this.props.lang][1],LANG[this.props.lang][14]]
        }
    }
  render() {
    console.log(this.props.lang);
    const handleChange3=()=>{
        this.setState({...this.state,content:[LANG[this.props.lang][0],LANG[this.props.lang][1],LANG[this.props.lang][14]]})
    }
    const handleChange7=()=>{
        this.setState({...this.state,content:[LANG[this.props.lang][2],LANG[this.props.lang][3],LANG[this.props.lang][15]]})
    }
    const handleChange12=()=>{
        this.setState({...this.state,content:[LANG[this.props.lang][4],LANG[this.props.lang][5],LANG[this.props.lang][16]]})
    }
    return (
      <div className="Retreat_page">
        <div className='heading_RR'>
        <div className='back_B'><Link to="/"><p>{"<"}</p></Link></div>
         <p>SAI<img src={om} alt="om"/>YO</p><br/>
         <h1>{LANG[this.props.lang][6]}<br/><span className='text-S'>{LANG[this.props.lang][7]}</span>{LANG[this.props.lang][8]}</h1>
         <div class="graphic">
            <div class="backvec">
            <div class="outlinevec"></div>
            </div>
        </div>
        <div className='heading_buttons'>
            <ul className='buttons_h'>
                <li className='button_h'><button onClick={handleChange3}><h3>{"3 "+LANG[this.props.lang][9]}</h3></button></li>
                <li className='button_h'><button onClick={handleChange7}><h3>{"7 "+LANG[this.props.lang][9]}</h3></button></li>
                <li className='button_h'><button onClick={handleChange12}><h3>{"12 "+LANG[this.props.lang][9]}</h3></button></li>
            </ul>
        </div>
        </div>
        <div className='content_RR'>
            <div className='sec-1'>
            <div className='Retreats-img-container'>
                <div className='Languages-border-1'></div>
                <img className='Img' src={girl1} />
        </div>
        <div className='Retreats-content-container'>
          <h1 className='text-S'>{this.state.content[0]}</h1>
          <div className='Retreats-courses'>
          </div>
          <p>{this.state.content[1]}</p>
        </div>
        </div>
        <div className='sec-2'>
            <div className='leftside'>
                <div className='border1'></div>
                <div class="lightbox"><h1>{LANG[this.props.lang][10]}</h1></div>
                <div className='border2'></div>
            </div>
            <div className='midside'>
                <h1>{LANG[this.props.lang][11]}</h1>
                <p>{this.state.content[2]}</p>
            </div>
            <div className='img_cont'></div>
        </div>
        <div className='sec-3'>
        <div className='sec3-Img'>
          <div className='back2'/>
          <div className='back1'> </div>
          <div className='box'/>
        </div>
        <div className='sec3-content'>
            <h1>{LANG[this.props.lang][12]}</h1>
            <button className='button-sec3'> <h3>{LANG[this.props.lang][13]}</h3></button>
        </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
