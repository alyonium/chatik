import type { CSSProperties } from 'react';

export const headerStyle: CSSProperties = {
  textAlign: 'center',
  background: 'transparent',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
};

export const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 32,
};

export const footerStyle: CSSProperties = {
  textAlign: 'center',
  background: 'transparent',
  color: '#fff',
};

export const layoutStyle: CSSProperties = {
  background:
    'radial-gradient(circle,rgba(197, 181, 255, 1) 0%, rgba(255, 224, 241, 1) 100%)',
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  height: '100svh',
};

export const titleStyles: CSSProperties = {
  color: '#21005d',
};
