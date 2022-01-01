import React, { useState } from 'react';
import "../styles/ProjectDetail.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from '@mui/material';
import ImageGallery from 'react-image-gallery';

export default function ProjectDetail({project, close}) {
    
    const [isClose, setIsClose] = useState(false);
    let imgs = project?.images?.map(ele => ({
        original: ele,
        originalHeight :"300px",
    }));
    function handleClose(){
        setIsClose(true);
        setTimeout(() => {
            close();
        }, 300);
    }

    return (
        <div className={`project_detail ${isClose? "close":""}`}>
            <IconButton onClick={handleClose} className='close_icon'>
                <CloseIcon />
            </IconButton>

            <div className='project_images'>
            <ImageGallery
                items={imgs}
                className="image_slider"
                showPlayButton={false}
                showThumbnails={false}
                additionalClass="image_silder"
            />
            </div>

            <div className='project_info'>
                <h2>{project.name}</h2>
                <h3>{project.app}</h3>
                <p>{project.description}</p>
            </div>

            <div className='project_link'>
                <p>
                    <a rel="noreferrer" target="_blank" href={project.link}>visit website</a>
                </p>

                <p>
                    <a rel="noreferrer" target="_blank" href='https://github.com/Abdessittir'>Code</a>
                </p>
            </div>
        </div>
    )
}
