import "../styles/Footer.css";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      
      <a href="https://www.instagram.com/mariam2waleed/">
        <Instagram />
        </a>

        <a href="https://www.facebook.com/mariam2waleed/">
        <Facebook />
        </a>

        <a href="https://twitter.com/Mariam2Waleedd">
        <Twitter />
        </a>
        
      </div>
      <p>&copy; 2022 Blue Market.com</p>
    </div>
  );
}

export default Footer;
