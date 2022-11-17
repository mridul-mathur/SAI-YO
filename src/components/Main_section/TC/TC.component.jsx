import React, { Component } from 'react'
import './TC.styles.scss'
import { motion } from 'framer-motion'
const LANG={'english':[["Wear appropriate clothes which properly cover your body and maintain the dress code within the premises.","Take responsibility for your belongings. ","Use mobile phones only during breaks.","Perform an hour of karma yoga daily.","Avoid smoking and non-vegetarian food on the premises. ","Avoid Photography during spiritual practices to maintain a tranquil environment. "],["Maintain regularity in classes and get permission beforehand to take a leave.","Note that indiscipline in attendance may lead to dismissal from the course.","Avoid actions that do not align with sattvic nature.","Respect the right to privacy for all guests, staff, or visitors and foster a harassment-free safe environment.","Report any act of disrespect or harassment to the senior instructor. The complaint will be further handled confidentially."],["The instructors must not be held responsible for any injuries that occur during asana practices. SaiOmYo advises you to incorporate ease in your practices and not push yourself more than required.","If you leave the course before completion, kindly return the teaching materials to the instructors.","Use humble language free from profanity and abuse. ","Maintain silence after retreat sessions and during meals."]],
            'german':[["Tragen Sie angemessene Kleidung, die Ihren Körper richtig bedeckt, und halten Sie die Kleiderordnung innerhalb der Räumlichkeiten ein.","Übernehmen Sie die Verantwortung für Ihr Eigentum","Verwenden Sie Mobiltelefone nur in den Pausen.","Führen Sie täglich eine Stunde Karma Yoga durch.","Vermeiden Sie Rauchen und nicht-vegetarisches Essen auf dem Gelände.","Vermeiden Sie das Fotografieren während spiritueller Übungen, um eine ruhige Umgebung aufrechtzuerhalten."],["Achten Sie auf Regelmäßigkeit im Unterricht und holen Sie sich vorher die Erlaubnis, Urlaub zu nehmen.","Beachten Sie, dass Disziplinlosigkeit bei der Teilnahme zum Ausschluss aus dem Kurs führen kann.","Vermeide Handlungen, die nicht mit der sattvischen Natur übereinstimmen.","Respektieren Sie das Recht auf Privatsphäre aller Gäste, Mitarbeiter oder Besucher und fördern Sie eine belästigung freie, sichere Umgebung.","Melden Sie jede respektlose oder belästigende Handlung dem leitenden Ausbilder. Die Beschwerde wird weiterhin vertraulich behandelt."],["Die Ausbilder können nicht für Verletzungen verantwortlich gemacht werden, die während der Asana-Übungen auftreten. SaiOmYo rät Ihnen, Leichtigkeit in Ihre Übungen einzubauen und sich nicht mehr als nötig anzustrengen.","Wenn Sie den Kurs vorzeitig verlassen, geben Sie bitte die Unterrichtsmaterialien an die Dozenten zurück.","Verwenden Sie eine bescheidene Sprache, die frei von Obszönitäten und Beleidigungen ist.","Schweigen Sie nach den Retreat-Sitzungen und während der Mahlzeiten."]],
            'spanish':[["Use ropa adecuada que cubra adecuadamente su cuerpo y mantenga el código de vestimenta dentro de las instalaciones.","Responsabilízate de tus pertenencias.","Use teléfonos móviles solo durante los descansos.","Realiza una hora de karma yoga al día.","Evite fumar y comida no vegetariana en las instalaciones.","Evite la fotografía durante las prácticas espirituales para mantener un ambiente tranquilo."],["Mantenga la regularidad en las clases y obtenga permiso de antemano para tomar una licencia.","Tenga en cuenta que la indisciplina en la asistencia puede dar lugar a la expulsión del curso.","Evita acciones que no se alineen con la naturaleza sátiva.","Respete el derecho a la privacidad de todos los huéspedes, el personal o los visitantes y fomente un entorno seguro libre de acoso.","Informar cualquier acto de falta de respeto o acoso al instructor superior. La queja se manejará de manera confidencial."],["Los instructores no deben ser considerados responsables de las lesiones que ocurran durante las prácticas de asana. SaiOmYo le aconseja que incorpore soltura en sus ejercicios y que no se esfuerce más de lo necesario.","Si abandona el curso antes de finalizarlo, devuelva amablemente los materiales didácticos a los instructores.","Use un lenguaje humilde, libre de blasfemias y abusos.","Mantener silencio después de las sesiones de retiro y durante las comidas."]]}


export default class TC extends Component {
  render() {
    const lang=this.props.lang;
    return (
      <div className='TC'>
        <div className='border1'></div>
        <div className='TC-container'>
          <h1 className='text-S'>Guidelines</h1>
          <h3>The following practices are expected of learners to support the centre's spiritual objective.</h3>
        </div>
        <div className='TC-cards'>
        <div className='card1'>
          <ul>
          {LANG[lang][0].map(point=>{
              return(
                <motion.div
                initial={{ opacity: 0, translateY:-10}}
                whileInView={{ opacity: 1 ,translateY:0}}
                viewport={{ once: true }}
                transition={{delay:0.2}}>
                          <li>{point}</li>
                </motion.div>
              )
            })}
          </ul>
        </div>
        <div className='card2'>
        <ul>
        {LANG[lang][1].map(point=>{
              return(
                <motion.div
                initial={{ opacity: 0, translateY:-10}}
                whileInView={{ opacity: 1 ,translateY:0}}
                viewport={{ once: true }}
                transition={{delay:0.2}}>
                          <li>{point}</li>
                </motion.div>
              )
            })}
          </ul>
        </div>
        <div className='card3'>
        <ul>
        {LANG[lang][2].map(point=>{
              return(
                <motion.div
                initial={{ opacity: 0, translateY:-10}}
                whileInView={{ opacity: 1 ,translateY:0}}
                viewport={{ once: true }}
                transition={{delay:0.2}}>
                          <li>{point}</li>
                </motion.div>
              )
            })}
          </ul>
        </div>
        </div>
      </div>
    )
  }
}
