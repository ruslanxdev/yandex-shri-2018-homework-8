import { createElement } from './../../utils/bem';
import Nav from './../../blocks/Nav/Nav';
import './Header.css';

const Header = (props = {}) => {
  const block = 'Header';

  const view = createElement({
    block,
    tag: 'header',
    content: [
      {
        block,
        tag: 'a',
        elem: 'title',
        attrs: { href: '/' },
        content: 'Архитектура приложения'
      },
      Nav
    ]
  });

  return view;
};

export default Header;
