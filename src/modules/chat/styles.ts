import type { CSSProperties } from 'react';

// TODO this styles & styles in Login/Sign Up form wrapper need to extract to global styles
export const containerStyles: CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  padding: 16,
  background: 'rgba(255, 255, 255, 0.18)',
  borderRadius: 16,
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.16)',
  WebkitBackdropFilter: 'blur(5px)'
};

export const messagesWrapperStyles: CSSProperties = {
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  border: '1px solid rgba(255, 255, 255, 0.16)',
  borderRadius: 8,
  background: 'rgba(127, 17, 224, 0.10)',
  padding: 16
};

export const messageWrapperStyles: CSSProperties = {
  width: '100%',
  padding: 12,
  borderRadius: 8,
  border: '1px solid rgba(255, 255, 255, 0.16)',
  background: 'rgba(127, 17, 224, 0.15)'
};

export const messageTitleWrapperStyles: CSSProperties = {
  width: '100%',
  marginBottom: 12
};

export const titleStyles: CSSProperties = {
  color: 'rgba(33, 0, 93, 0.55)'
};

export const messageStyles: CSSProperties = {
  fontSize: 16
};
