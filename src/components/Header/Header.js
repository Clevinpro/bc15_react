import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import s from './Header.module.css';

const a = 10;

jss.setup(preset());

const styl = {
  navLink: {
    listStyle: 'none',
    '&:hover': {
      background: 'blue',
    },
  },
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '700px',
    margin: '0 auto',
  },
};

const { classes } = jss.createStyleSheet(styl).attach();

const Header = () => (
  <header>
    <nav style={styles.nav}>
      {/* li*5>a{link $} */}
      <li className={classes.navLink}>
        <a className={s.nav__link} href="http://facebook.com">
          link 1
        </a>
      </li>
      <li className={classes.navLink}>
        <a className={s.nav__link} href="http://facebook.com">
          link 2+
        </a>
      </li>
      <li className={classes.navLink}>
        <a className={s.nav__link} href="http://facebook.com">
          link 3
        </a>
      </li>
      <li className={classes.navLink}>
        <a className={s.nav__link} href="http://facebook.com">
          link 4
        </a>
      </li>
      <li className={classes.navLink}>
        <a className={s.nav__link} href="http://facebook.com">
          link 5
        </a>
      </li>
    </nav>
  </header>
);

export default Header;
