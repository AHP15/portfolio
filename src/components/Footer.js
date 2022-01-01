import '../styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(){
    return (
        <footer className='footer'>
            <div>
            <div className='div_icon'>
              <FacebookIcon className='icon_social' />
            </div>

            <a className='div_icon' href='https://github.com/Abdessittir'>
                <GitHubIcon className='icon_social' />
            </a>

            <div className='div_icon'>
                <TwitterIcon className='icon_social' />
            </div>
            </div>
            <p>ABDESSITTIR HARKATI</p>
            <p>abdessattarharkaty@gmail.com</p>
        </footer>
    );
}

export default Footer;