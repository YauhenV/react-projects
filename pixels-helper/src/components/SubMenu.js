import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";

function SubMenu( {item}, props) {

  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => {
    setSubNav(!subNav);
    props.subMenuFlag = !props.subMenuFlag;
  };

  return (
      <li className={`${item.cName} (${subNav} &&  ${styles["new-nav-text"]})`} onClick={item.subNav && showSubNav}>
        <div className={item.cSubName}>
          <div>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
              {item.subNav && subNav 
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null
              }

            </Link>

          </div>
          {subNav && item.subNav.map((item, index) => {
            return (
              <div key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </div>
            )
          })} 
        </div>  
      </li>
  )
}

export default SubMenu