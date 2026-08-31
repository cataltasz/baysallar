import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--accent', 'btn--secondary', 'btn--white'];
const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  href,
  className = '',
  target,
  rel,
  icon
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];
  const combinedClass = `custom-btn ${checkButtonStyle} ${checkButtonSize} ${className}`.trim();

  // If external link (http, https, tel, mailto, etc.)
  if (href && (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://wa.me'))) {
    return (
      <a 
        href={href} 
        className={combinedClass} 
        target={target || '_blank'} 
        rel={rel || 'noopener noreferrer'}
        onClick={onClick}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  // If internal route link
  if (href) {
    return (
      <Link to={href} className={combinedClass} onClick={onClick}>
        {icon && <span className="btn-icon">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  // Regular button
  return (
    <button
      className={combinedClass}
      onClick={onClick}
      type={type || 'button'}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
