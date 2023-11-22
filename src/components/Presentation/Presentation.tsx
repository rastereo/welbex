import './Presentation.css';

function Presentation() {
  return (
    <main className="presentation">
      <div className="presentation__description">
        <h1 className="presentation__title">
          Зарабатывайте больше
          {' '}
          <span className="presentation__gradient presentation__gradient_size_big">
            с&nbsp;WELBEX
          </span>
        </h1>
        <p className="presentation__develop">
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className="presentation__present">
        <h2 className="presentation__subtitle">
          Вместе с
          {' '}
          <span className="presentation__gradient presentation__gradient_size_small">
            бесплатной консультацией
          </span>
          {' '}
          мы дарим:
        </h2>
        <ul className="presentation__gift-list list">
          <li className="presentation__item">
            <h3 className="presentation__gift">
              Виджеты
            </h3>
            <p className="presentation__text">
              30 готовых решений
            </p>
          </li>
          <li className="presentation__item">
            <h3 className="presentation__gift">
              Dashboard
            </h3>
            <p className="presentation__text">
              с показателями вашего бизнеса
            </p>
          </li>
          <li className="presentation__item">
            <h3 className="presentation__gift">
              Skype Аудит
            </h3>
            <p className="presentation__text">
              отдела продаж и&nbsp;CRM системы
            </p>
          </li>
          <li className="presentation__item">
            <h3 className="presentation__gift">
              35 дней
            </h3>
            <p className="presentation__text">
              использования CRM
            </p>
          </li>
        </ul>
        <button
          type="button"
          className="presentation__button"
        >
          Получить консультацию
        </button>
      </div>
    </main>
  );
}

export default Presentation;
