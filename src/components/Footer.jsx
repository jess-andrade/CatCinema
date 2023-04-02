import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className="copy_right"><span>CatCinema</span> &copy; 2023  .:  <i> created by Jessica </i> ♥ </p>
    </footer>
  );
}