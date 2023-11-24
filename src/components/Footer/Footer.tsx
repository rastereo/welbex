import './Footer.css';

import Contacts from '../Contacts/Contacts';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__navigation">
        <h4 className="footer__title">О компании</h4>
        <ul className="footer__menu-list footer__menu-list_position_column list">
          <li>
            <a
              href="#"
              className="footer__link link"
            >
              Партнёрская программа
            </a>
          </li>
          <li>
            <a
              href="#"
              className="footer__link link"
            >
              Вакансии
            </a>
          </li>
        </ul>
      </nav>
      <nav className="footer__navigation">
        <h4 className="footer__title">Меню</h4>
        <ul className="footer__menu-list footer__menu-list_padding-top list">
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Расчёт стоимости
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Кейсы
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Услуги
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link footer__link_show link"
            >
              Благодарственные письма
            </a>
            <a
              href="#"
              className="footer__link footer__link_hide link"
            >
              Благодарность клиентов
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Виджеты
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Сертификаты
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Интеграции
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Блог на Youtube
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Наши клиенты
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
            >
              Вопрос / Ответ
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer__contacts">
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
