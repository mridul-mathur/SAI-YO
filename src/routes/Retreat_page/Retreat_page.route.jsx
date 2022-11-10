import React, { Component } from 'react'
import om from '../../assets/ompinkgrad.png'
import girl1 from '../../assets/259083412.jpeg';
import "./Retreat_page.styles.scss";
import Button from '../../components/Button/Button.component';
import Footer from '../../components/Footer/Footer.component';
import { Link } from 'react-router-dom';


const LANG={'english':["3 DAYS RETREAT","Your experience of the actual essence of yoga and meditation is the goal of the three-day retreats. The three-day retreats help you achieve the ideal balance between your mental and physical health by bringing peace, building immune strength, and increasing attentiveness and enthusiasm. The 3-day retreats are the ideal option if you want to establish a positive atmosphere around yourself and begin your yoga practice.","7 DAYS RETREAT","The 7 day retreats are designed to give you a thorough understanding of the intricacies of yogic practices along with a blend of meditation techniques to revive your inner self. This will introduce you to an unmatched experience of healing and energising ,both spiritually and physically. You will be able to assess obvious differences in stress levels, decision-making skills, and general approach towards life , after the seven-day retreats. It is the best choice for you if you want to uncover your most upbeat, healthy, and spiritually adept side through Yoga and Meditation","12 DAYS RETREAT","A series of personalised yoga and meditation practises created specifically for you to meet your physical and mental health requirements are included in the 12-day retreats.Your revitalised self is guaranteed by the 12-day retreats . The 12-day retreats are the best option if you want to use yoga and meditation to transform your physical and emotional well-being. ","Mediation and","Yoga ", "retreats","days","Learn","What things were they gonna perform?","Venue dates and fee descriptions","Apply now","The three-day retreats include both beginner and advanced Dhyana, Pranayams and Yoga Asanas, 7 Chakras Healing meditation, as well as free Aroma Therapies, Foot Massages, and Ayurvedic Healing Massages.These retreats offer live rajasthani folk dance performances as a special attraction along with serene , calm and high-quality accommodation and adequate satvik food .","A series of advance Pranayams and Kriyas, Vinyasa Flow Yoga Asana, Hatha yoga, and various forms of meditation techniques, including healing 7 Chakras, are all included in the 7-day retreat to guarantee that positive energy is properly absorbed.One 30-minute philosophy session, an Ayurvedic deep-healing massage, and a Devotional Music session completes the complimentary inclusions. Our high-quality accommodation and adequate satvik food enhance the benefits of the 7-day long retreats .","The twelve day retreats are customizable as per the attendee's request and health requirements. The complimentary offerings , quality accommodation and essential satvik food are also offered accordingly ." ],
            'german':[],
            'spanish':[]}
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
