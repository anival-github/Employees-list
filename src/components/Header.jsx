import { React } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Main</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees/">Employees</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
