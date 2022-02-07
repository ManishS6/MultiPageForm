import { useContext } from 'react';
import { FormContext } from './FormContext';
import '../App.css';
import avatar from './avatar.jpg'
import Pdf from "react-to-pdf";
import { FaStar} from 'react-icons/fa'
import Button from 'react-bootstrap/Button'


export default function Resume(){
    const [{
        firstName="First",
        lastName="Last",
        profession="Full Stack Developer",
        city="Faridabad",
        state="Haryana",
        zip="121001",
        email="manishswami.dev@gmail.com",
        phone="+919876543210",
        jobTitle="Open Source Contributor",
        jobEmployer="Github",
        jobCity="remote",
        jobState="",
        jobStart="01-05-2020",
        jobEnd="01-12-2022",
        collegeName="VIT",
        collegeLocation="Chennai",
        degree="B.Tech",
        stream="CSE",
        degreeStart="07-07-2019",
        degreeEnd="15-03-2023",
        skills=[],
        isFilePicked=false,
        Summary=[]
    },setForm] = useContext(FormContext)
    const contact_info_li = {
        padding: '.1rem 0',
        display: 'flex',
        alignItems: 'center',
        color: '#718096'
    }
    const main_title = {
        fontSize: '1.8rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#f7f7f7ec',
        paddingTop: '.4rem'
    }
    return(
        <div className="right">
            <Pdf>
                {({toPdf, targetRef}) =>  (
                    // main-content margin: '1.4rem auto'
                    <div className='main-content' ref={targetRef} style={{display:'flex',height:'100vh',width: '100%',padding:'3px'}}>
                        <div className="left-section" style={{display:'flex',flexDirection:'column',alignItems:'stretch',backgroundColor:'#00324A'}}>
                            <Button onClick={toPdf} variant='success'> Download PDF </Button>
                            <div style={{borderBottom:'1px solid #002333',textAlign:'center'}} className="profile">
                                <div style={{width:'100%',textAlign:'center',padding:'10px'}} className="image">
                                    <img 
                                        style={{width:'80%',borderRadius:"50%",border:'8px solid #002333'}} 
                                        src={!isFilePicked ? avatar : localStorage.getItem('recent-image')} 
                                        alt="Profile" 
                                    />
                                </div>
                                <h2 
                                    className="name"
                                    style={{
                                        fontSize: '1.6rem',
                                        color: 'white',
                                        textAlign: 'center',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        padding: '1.2rem 0'
                                    }} 
                                >{firstName+' '+lastName}</h2>
                                <p 
                                    className="career"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: '#94D9EA',
                                        textAlign: 'center',
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase'
                                    }}
                                >{profession}</p>
                            </div>
                            <div className="contact-info">
                                <h3 
                                    className="main-title"
                                    style={main_title} 
                                >Contact Info</h3>
                                <ul style={{paddingTop:'2rem'}}>
                                    <li style={contact_info_li}>{phone}</li>
                                    <li style={contact_info_li}>{email}</li>
                                    <li style={contact_info_li}>{city} {state} {zip} </li>
                                </ul>
                            </div>
                            <div className="skills-section">
                                <h3 
                                    className="main-title"
                                    style={main_title} 
                                >Skills</h3>
                                {[...skills].map((skill)=>(
                                    <div style={{display:'flex',alignItems:'center'}} className="skill">
                                        <div>
                                            <h4>{skill.skill}</h4>
                                        </div>
                                        <div>
                                            {[...Array(parseInt(skill.rating))].map((_, k) =>
                                                <FaStar
                                                    key={k}
                                                    size={20}
                                                    color={"#ffc107"}
                                                />
                                            )} 
                                            {
                                                (5-parseInt(skill.rating))>0 && [...Array(parseInt(5-skill.rating))].map((_, k) =>
                                                    <FaStar
                                                        key={k}
                                                        size={20}
                                                        color={"#e4e5e9"}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                ))}
                                {
                                    // left below HTML for future CSS reference
                                    /* <ul>
                                        <li>
                                            <p className="skill-title">Javascript</p>
                                            <div className="progress-bar">
                                                <div className="progress js-progress"></div>
                                            </div>
                                        </li>
                                    </ul> */
                                }
                            </div>
                        </div>
                        <div>
                        <div className="right-section" style={{paddingLeft:'5px',width:'100%',backgroundColor:'#f7f7f7'}}>
                            <div className="about sect">
                                <h2 className="right-title">About Me</h2>
                                <p className="para">
                                    {[...Summary].map((skill)=>(<span style={{color:'black'}} className="skill-title">{skill}.&nbsp;</span>))}
                                </p>
                            </div>
                            <div className="experience sect" >
                                <h2 className="right-title">Experience</h2>
                                <div className="timeline" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="left-tl-content" style={{flex:'1'}}>
                                        <h5 className="tl-title">{jobEmployer}</h5>
                                        <p className="para">{jobStart} - {jobEnd}</p>
                                    </div>
                                    <div className="right-tl-content" style={{flex:'1'}}>
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">{jobTitle}</h5>
                                            <p className="para">
                                                Lorem ipsum 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="education sect">
                                <h2 className="right-title">Education</h2>
                                <div className="timeline" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="left-tl-content" style={{flex:'1'}}>
                                        <h5 className="tl-title">{collegeName}</h5>
                                        <p className="para">{degreeStart} - {degreeEnd}</p>
                                    </div>
                                    <div className="right-tl-content" style={{flex:'1'}}>
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">{degree+''+stream}</h5>
                                            <p className="para">
                                                Some Description
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="awards sect">
                                <h2 className="right-title">Awards(Not in Forum)</h2>
                                <div className="timeline" style={{display:'flex',flexDirection:'row'}}>
                                    <div className="left-tl-content" style={{flex:'1'}}>
                                        <h5 className="tl-title">Microsoft</h5>
                                        <p className="para">June 2016</p>
                                    </div>
                                    <div className="right-tl-content" style={{flex:'1'}}>
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Excellent Work</h5>
                                            <p className="para">
                                                Lorem ipsum 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            </Pdf>
        </div>
    )
}