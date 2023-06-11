import Dropdown from './components/Dropdown';

/**
 * Основной компонент приложения, отвечающий за отображение всех элементов на странице. Дочерний компонент Dropdown (кнопка активации выпадающего списка)
 *
 */
const App = () => {
  return (
    <div className="container">
      <div className="dropdown-wrapper open">
        <Dropdown />
      </div>
    </div>
  );
};

export default App;
