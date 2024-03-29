import { useState } from 'react';

/**
 * Компонент отвечающий за вывод списка пунктов выпадающего меню
 *
 * @param {boolean} props.dropdownActive Значение показывающее раскрыт ли выпадающий список
 */
const DropdownList = (props) => {
  const { dropdownActive } = props;

  const [linkActive, setLinkActive] = useState('');

  const DropdownItem = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];

  const items = DropdownItem.map(function (item, index) {

    const className = item === linkActive ? 'link-active' : ''

    return (
      <li key={index}>
        <a href="#!" onClick={() => setLinkActive(item)} className={className}>
          {item}
        </a>
      </li>
    );
  });

  return (
    <ul className={dropdownActive ? 'dropdown-open' : 'dropdown'}>{items}</ul>
  );
};

export default DropdownList;
