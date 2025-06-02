import React from 'react';

const Typography = ({
  children,
  variant = 'body',
  color = 'default',
  weight = 'normal',
  className = '',
  as,
}) => {
  const variantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle: 'h6',
    body: 'p',
    caption: 'span',
  };

  const Component = as || variantMap[variant];

  const variantStyles = {
    h1: 'text-4xl md:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl md:text-3xl font-bold',
    h4: 'text-xl md:text-2xl font-semibold',
    h5: 'text-lg md:text-xl font-semibold',
    h6: 'text-base md:text-lg font-semibold',
    subtitle: 'text-lg font-medium',
    body: 'text-base leading-relaxed',
    caption: 'text-sm',
  };

  const colorStyles = {
    default: 'text-gray-900',
    primary: 'text-yellow-500',
    secondary: 'text-blue-600',
    white: 'text-white',
    muted: 'text-gray-600',
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <Component
      className={`${variantStyles[variant]} ${colorStyles[color]} ${weightStyles[weight]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Typography;
