// import Github from '../assets/svg/github.svg';
// import RSLogo from '../assets/svg/rsschool.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="footer-list">
          <li className="footer-item">
            <a className="footer-link" href="https://github.com/Mary190183/">
              {/* <Github /> */}
              <p className="footer-p">Mary190183</p>
            </a>
          </li>
          <li className="footer-item">
            <p>@2023</p>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="https://rs.school/react/">
              {/* <RSLogo /> */}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
