import { useState } from "react";
import "../styles/Contact.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Contact({navOpened}){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [err, setErr] = useState(false);

    function handleInvalid(e){
        setErr(true);
    }

    function handleChange(e){
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }else if(e.target.name === "name"){
            setName(e.target.value);
        }else if(e.target.name === "message"){
            setMessage(e.target.value);
        }else{
            setSubject(e.target.value);
        }

        setErr(false);
    }

    function handleSubmit(e){
        e.preventDefault();

        alert(name +email+subject+message);
        
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div id="contact" className={`contact ${navOpened? "active":""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#252934 " fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,165.3C384,139,480,117,576,133.3C672,149,768,203,864,192C960,181,1056,107,1152,101.3C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            <div className='contact_page'>
                <h1 data-aos="fade-right">CONTACT</h1>
                <div data-aos="fade-left" className='line'></div>

                <p>Have a question or want to work together?</p>

              <form onSubmit={handleSubmit}>
                  <input
                       type='text'
                       name='name'
                       value={name}
                       placeholder='Name'
                       onChange={handleChange}
                       onInvalid={handleInvalid}
                       required
                    />
                  <input
                       type='email'
                       name='email'
                       value={email}
                       placeholder='Enter Email'
                       onInvalid={handleInvalid}
                       onChange={handleChange}
                       required
                    />
                  <input
                       type='text'
                       name='subject'
                       value={subject}
                       placeholder='Subject'
                       onInvalid={handleInvalid}
                       onChange={handleChange}
                       required
                    />
                  <textarea
                       name='message'
                       value={message}
                       placeholder='Your Message'
                       onInvalid={handleInvalid}
                       onChange={handleChange}
                       required
                    />
                  <input type='submit' value="SEND" className='submitBtn' />
                  <p className={`invalid ${err?"active":""}`}>Please check your input</p>
              </form>

              <a href='#home'>
                  <KeyboardArrowUpIcon className='icon_link' />
                  <KeyboardArrowUpIcon className='icon_link' />
              </a>
            </div>
        </div>
    );
}

export default Contact;