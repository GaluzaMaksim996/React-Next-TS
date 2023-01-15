import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)}>
      <div>OwlTop © 2023 - Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
