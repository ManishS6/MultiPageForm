import { useContext,useEffect } from 'react';
import { FormContext } from './FormContext';
import '../App.css';
import avatar from './avatar.jpg'
import Pdf from "react-to-pdf";
import { FaStar} from 'react-icons/fa'
import Button from 'react-bootstrap/Button'


export default function Resume(){
    const [{
        Basics=[],
        Jobs=[
            {
                "title":"Open Source Contributor",
                "employer":"Github",
                "city":"remote",
                "state":"",
                "start":"01-05-2020",
                "end":"01-12-2022"
            }
        ],
        Edus=[
            {
                "institute":"VIT",
                "location":"Chennai",
                "degree":"B.Tech",
                "stream":"CSE",
                "start":"07-07-2019",
                "end":"15-03-2023"
            }
        ],
        skills=[],
        Summary=[],
        firstName="First",
        lastName="Last",
        profession="Full Stack Developer",
        city="Faridabad",
        state="Haryana",
        zip="121001",
        email="manishswami.dev@gmail.com",
        phone="+919876543210",
        isFilePicked=false,
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
    },setForm] = useContext(FormContext)
    const contact_info_li = {
        padding: '.1rem 0',
        display: 'flex',
        alignItems: 'center',
        color: '#718096'
    }
    const main_title = {
        fontSize: '1.4rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#f7f7f7ec',
        paddingTop: '.4rem'
    }
    useEffect(()=>{
        
    },[isFilePicked])
    return(
        <div className="right">
            <Pdf>
                {({toPdf, targetRef}) =>  (
                    // main-content margin: '1.4rem auto'
                    <div className='main-content' ref={targetRef} style={{display:'flex',height:'100%',width: '100%',padding:'3px'}}>
                        <div className="left-section" style={{display:'flex',flexDirection:'column',alignItems:'stretch',backgroundColor:'#00324A'}}>
                            <div className="left-content" style={{padding:'1rem 1.4rem'}}>
                                <Button className="print-btn" onClick={toPdf} variant='success'> Download PDF </Button>
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
                                    <ul style={{paddingTop:'0.6rem'}}>
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
                                    {/* use progress bar style from reference css */}
                                    <ul style={{paddingTop:'0.6rem'}}>
                                    {[...skills].map((skill)=>(
                                        <li style={{display:'flex',alignItems:'center'}} className="skill">
                                            <div>
                                                <h4 className='skill-title' style={{
                                                    textTransform:'uppercase',
                                                    color:'#f7f7f7',
                                                    fontSize:'1rem'
                                                }}>{skill.skill}</h4>
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
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="right-section" style={{paddingLeft:'5px',height:'100%',width:'100%',backgroundColor:'#f7f7f7'}}>
                            <div className="right-main-content" style={{padding:'1rem 1.4rem'}}>
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
                                            <h5 className="tl-title">{collegeName+" "+collegeLocation}</h5>
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
                    </div>
                )}
            </Pdf>
        </div>
    )
}