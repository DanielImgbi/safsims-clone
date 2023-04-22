import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="nav">
      <span className="brand">SAFSIMS</span>

      <ul className="nav-item">
        <li className="nav-link">Benefits</li>
        <li className="nav-link">Features</li>
        <li className="nav-link">Pricing</li>
        <li className="nav-link">Support</li>
        <li className="nav-link">Get started for free</li>
      </ul>
    </header>
  );
}

export default Header;