import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../../assets/logo-welbex.svg';
import Contacts from '../Contacts/Contacts';

import { headerMenuItemList } from '../../utils/navigationItemListConstats';

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
      <Navigation menuItemList={headerMenuItemList} />
      <Contacts />
    </header>
  );
}

export default Header;
