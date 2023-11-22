import './Footer.css';

import Navigation from '../Navigation/Navigation';
import { companyMenuItemList, footerMenuItemList } from '../../utils/navigationItemListConstats';
import Contacts from '../Contacts/Contacts';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4 className="footer__title">О компании</h4>
        <Navigation
          menuItemList={companyMenuItemList}
          isFooter
        />
      </div>
      <div>
        <h4 className="footer__title">Меню</h4>
        <Navigation
          menuItemList={footerMenuItemList}
          isFooter
        />
      </div>
      <div className="footer__container">
        <h4 className="footer__title">Контакты</h4>
        <Contacts isFooter />
      </div>
      <div className="footer__legal">
        <p className="footer__copyright">&copy;WELBEX 2022. Все права защищены.</p>
        <a
          href="#"
          className="footer__privacy"
        >
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}

export default Footer;
