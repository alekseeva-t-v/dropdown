import { useState } from "react";
import DropdownList from "./DropdownList";

/**
 * Компонент отвечающий за вывод кнопки открытия выпадающего списка. Родительский компонент App.Дочерний компонент DropdownList (отображает список пунктов выпадающего списка)
 *
 */
const Dropdown = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <div className="dropdown-wrapper">
      <button
        data-id="toggle"
        className="btn"
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList dropdownActive={dropdownActive} />
    </div>
  );
};

export default Dropdown;
