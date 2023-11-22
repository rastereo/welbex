import './Contacts.css';

import Telegram from '../../assets/telegram.svg';
import Viber from '../../assets/viber.svg';
import Whatsapp from '../../assets/whatsapp.svg';

interface IContactsProps {
  isFooter?: boolean,
}

function Contacts({ isFooter }: IContactsProps) {
  return (
    <ul className={`contacts list ${isFooter && 'contacts_position_footer'}`}>
      <li className={`contacts__item ${isFooter && 'contacts__item_position_footer'}`}>
        <a
          href="tel:75555555555"
          className="contacts__phone link"
        >
          +7 555 555-55-55
        </a>
      </li>
      <li>
        <a
          href="#"
          className="link"
        >
          <img
            src={Telegram}
            alt="Лого Telegram"
            className="contacts__icon"
          />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="link"
        >
          <img
            src={Viber}
            alt="Лого Viber"
            className="contacts__icon"
          />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="link"
        >
          <img
            src={Whatsapp}
            alt="Лого Whatsapp"
            className="contacts__icon"
          />
        </a>
      </li>
      {isFooter && (
        <li>
          <p className="contacts__address">Москва, Путевой проезд 3с1, к 902</p>
        </li>
      )}
    </ul>
  );
}

export default Contacts;
