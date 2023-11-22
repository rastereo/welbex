import './Contacts.css';

import Telegram from '../../assets/telegram.svg';
import Viber from '../../assets/viber.svg';
import Whatsapp from '../../assets/whatsapp.svg';

function Contacts() {
  return (
    <ul className="contacts list">
      <li>
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
      <li className="contacts__item">
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
    </ul>
  );
}

export default Contacts;
