import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

const Button = ({ appearance, children, className, arrow = 'none', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
