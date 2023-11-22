import './Navigation.css';

import { IMenuItemList } from '../../utils/navigationItemListConstats';

interface IMenuItemListProps {
  menuItemList: IMenuItemList[],
  isFooter?: boolean,
}

function Navigation({ menuItemList, isFooter }: IMenuItemListProps) {
  return (
    <nav className="navigation">
      <ul className={`navigation__menu list ${isFooter && 'navigation__menu_position_column'}`}>
        {menuItemList.map(({ name, path }, index) => (
          <li key={index}>
            <a
              href={path}
              className="link"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
