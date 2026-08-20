import {Link} from 'react-router';

function About(){
    return(
        <div>
            <h1>About</h1>
            <p>Just like the moon provides light at night, MoonLit serves as a ‘guiding light’ for those seeking mental health support through accessible coping tools without being pigeonholed into a specific therapeutic process or mental health condition. Instead, MoonLit is an accessible and inclusive psychoeducational self-help app for adult survivors of childhood trauma.</p>
            <p>Originally conveived as an app design concept for Clark Tank's 2022 App Design Contest, MoonLit is an idea for the kind of mental health app our founder would have wanted access to growing up.</p>
        <Link to="/contact">Contact Us</Link>
        </div>
    );
}

export default About;