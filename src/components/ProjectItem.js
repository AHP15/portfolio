import React from 'react';
import "../styles/ProjectItem.css";

export default function ProjectItem(props) {

    function handleClick(){
        props.setProject(props);
    }
    return (
        <div data-aos="fade-up" className='project'>
            <img src={`${props.image}`} alt={props.name} />
            <h3> {props.name} </h3>
            <p>{props.techUsed}</p>
            <div onClick={handleClick}>LEARN MORE</div>
        </div>
    )
}
