import React from 'react';
import { NavLink } from 'react-router-dom';
function Navigation() {
  const items = [
    { name: 'Me', to: '/' },
    { name: 'Hobbies', to: '/hobbies' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} activeclassname="active">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
