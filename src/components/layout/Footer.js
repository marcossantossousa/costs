import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTelegram, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
            <li><FaTwitter/></li>
            <li><FaTelegram/></li>
            <li><FaGithub/></li>
        </ul>
        <p className={styles.copy_right}><span>Costs</span></p>
        <p className={styles.copy_right}><span>Dev: Marcos Sousa</span> &copy; 2022</p>
    </footer>)
}
export default Footer
