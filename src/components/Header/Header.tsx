import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../../assets/logo-welbex.svg';
import Contacts from '../Contacts/Contacts';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          src={Logo}
          alt="Логотип Welbex"
          className="header__logo"
        />
      </div>
      <Navigation />
      <Contacts />
    </header>
  );
}

export default Header;
