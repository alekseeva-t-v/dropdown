const DropdownList = ({ active, setActive }) => {
  const DropdownItem = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];

  const items = DropdownItem.map(function (item, index) {
    return (
      <li key={index}>
        <a href="#">{item}</a>
      </li>
    );
  });

  return <ul className={active ? 'dropdown-open' : 'dropdown'}>{items}</ul>;
};

export default DropdownList;
