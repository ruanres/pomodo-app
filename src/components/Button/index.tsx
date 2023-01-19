import React from 'react';
import './button.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
};
const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
