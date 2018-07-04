import React from 'react';

const navItem = (props) => {
  return (
    <li className="NavItem">
      <a href={ props.link }>{ props.children }</a>
    </li>
  );
};
export default navItem;