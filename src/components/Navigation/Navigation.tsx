import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu list undefined">
        <li>
          <a
            href="#"
            className="navigation__link link"
          >
            Услуги
          </a>
        </li>
        <li>
          <a
            href="#"
            className="navigation__link link"
          >
            Виджеты
          </a>
        </li>
        <li>
          <a
            href="#"
            className="navigation__link link"
          >
            Интеграции
          </a>
        </li>
        <li>
          <a
            href="#"
            className="navigation__link link"
          >
            Кейсы
          </a>
        </li>
        <li>
          <a
            href="#"
            className="navigation__link link"
          >
            Сертификаты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
