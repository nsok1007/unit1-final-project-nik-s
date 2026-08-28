import {useState} from 'react';
import ReusableButton from '../components/ReusableButton';
import './pages.css'

export default function Contact(){
    const[contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(`Updating ${name}:`, value);
    setContactForm((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    function submitForm({text}){
        return <button type="submit">{text}</button>
    }
    return(
        <div>
            <h1 className="header-title">Contact</h1>
            <div className="portrait-container">
                <img className="portrait" src="/selfportrait.jpg"/>
            </div>

            <div className="body">
                <p>MoonLit is an application designed and developed by Nik Sokol. With a bachelor's degree in psychology and a minor in graphic design, they draw on their academic background to help make valuable resources for supporting mental wellbeing more accessible.</p> <br></br>
                <p>Drawing from lived experience, they have chosen to curate tools informed by the following evidence-based psychotherapy approaches:</p> <br></br>
                <ul className="therapyapproaches">
                    <li>Dialectical Behavior Therapy (DBT)</li>
                    <li>Acceptance & Commitment Therapy (ACT)</li>
                    <li>Skills Training in Affective and Interpersonal Regulation (STAIR)</li>
                </ul> <br></br>
                <div className="extra-text">
                    <br></br>
                    <h2>Get in Touch</h2>
                    <br></br>
                </div>
            </div>
            <div className="form-container">
                <form className="contact-form" onSubmit={handleOnSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="John Doe" value={contactForm.name} onChange={handleChange} required />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" name="email"  placeholder="johndoe@email.com" value={contactForm.email} onChange={handleChange} required />
                    </label>
                    <br />
                    <label>
                        Feedback:
                        <textarea name="message" placeholder="Enter message here..." value={contactForm.textarea} rows="5" onChange={handleChange} required />
                    </label> <br></br>
                    <div className="button">
                        <ReusableButton onClick={submitForm} text={"Submit"} style={{marginTop: "10px", width: "100px", height: "25px", textAlign: "center", alignContent: "center", justifyContent: "center", borderRadius: "8px", border: "none"}}/> 
                    </div>
                </form>
            </div>
        </div>
    );
}

