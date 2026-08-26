import {useState} from 'react';
import ReusableButton from '../components/ReusableButton';

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
            <h1>Contact</h1>
            <p>MoonLit is an application designed and developed by Nik Sokol. With a bachelor's degree in psychology and a minor in graphic design, they draw on their academic background to help make valuable resources for supporting mental wellbeing more accessible.</p>
            <p>Drawing from lived experience, they have chosen to curate tools informed by the following evidence-based psychotherapy approaches:</p>
            <ul>
                <li>Dialectical Behavior Therapy (DBT)</li>
                <li>Acceptance & Commitment Therapy (ACT)</li>
                <li>Skills Training in Affective and Interpersonal Regulation (STAIR)</li>
            </ul>
            <p>To learn more about Nik's other endeavors, please click here.</p>
            <button><a href="https://nsokdesigns.com">Other Work</a> </button>
            <br></br>
            <p>To get in touch, please feel free to reach us using the form below!</p>
            <br></br>
            <form onSubmit={handleOnSubmit}>
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
                <ReusableButton onClick={submitForm} text={"Submit"}/>
                
            </form>
        </div>
    );
}

