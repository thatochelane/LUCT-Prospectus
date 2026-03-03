export const colors = {
  background: '#0A0A0F',
  surface: '#14141A',
  surfaceLight: '#1A1A24',
  surfaceDark: '#0A0A0F',
  text: {
    primary: '#FFFFFF',
    secondary: '#A0A0B0',
    tertiary: '#888888',
    muted: '#666666',
  },
  border: '#2A2A35',
  accent: '#FFD700', // Gold accent
  accentLight: '#FFE55C',
  overlay: 'rgba(10,10,15,0.85)',
  cardBorder: '#2A2A35',
  divider: '#2A2A35',
};

export const typography = {
  h1: {
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: 2,
    color: colors.text.primary,
  },
  h2: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 1,
    color: colors.text.primary,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: colors.text.primary,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.3,
    color: colors.text.primary,
  },
  body1: {
    fontSize: 16,
    color: colors.text.secondary,
    lineHeight: 24,
    fontWeight: '400',
  },
  body2: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 22,
    fontWeight: '400',
  },
  caption: {
    fontSize: 12,
    color: colors.text.tertiary,
    letterSpacing: 0.5,
    fontWeight: '500',
  },
};

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 48,
};

export const borderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  xl: 20,
  xxl: 24,
  round: 999,
};

export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
};

export const layout = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};