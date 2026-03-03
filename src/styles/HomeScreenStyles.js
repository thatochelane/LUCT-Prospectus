import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows, layout } from './theme';

export const styles = StyleSheet.create({
  container: {
    ...layout.container,
    backgroundColor: '#0A0A0F', // Deeper dark background
  },
  
  // Header Section
  header: {
    height: 400,
    position: 'relative',
    zIndex: 0,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 10, 15, 0.87)', // Darker overlay
    zIndex: 1,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    padding: spacing.xxl,
    
  },
  universityName: {
    ...typography.h1,
    fontSize: 48,
    marginBottom: spacing.sm,
    color: '#FFFFFF',
    fontWeight: '800',
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 14,
    color: '#FFD700', // Gold accent
    letterSpacing: 4,
    marginBottom: spacing.lg,
    fontWeight: '500',
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: '#FFD700', // Gold divider
    marginBottom: spacing.lg,
    borderRadius: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#888888',
    letterSpacing: 2,
    fontWeight: '400',
  },

  // Welcome Section - Card Style
  welcomeSection: {
    marginHorizontal: spacing.lg,
    marginTop: -40,
    padding: spacing.xl,
    backgroundColor: '#1A1A24', // Dark card background
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.medium,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: spacing.sm,
    letterSpacing: 0.5,
  },
  welcomeText: {
    fontSize: 14,
    color: '#A0A0B0',
    lineHeight: 22,
    fontWeight: '400',
  },

  // Quiz Button - Gradient-like with gold
  quizButton: {
    backgroundColor: '#1A1A24',
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    padding: spacing.xl,
    borderRadius: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
    ...shadows.medium,
  },
  quizButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFD700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  quizButtonSubtext: {
    fontSize: 12,
    color: '#A0A0B0',
    fontWeight: '400',
  },

  // View Faculties Button - Sleek dark
  viewFacultiesButton: {
    backgroundColor: '#1A1A24',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    padding: spacing.xl,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.small,
  },
  viewFacultiesContent: {
    flex: 1,
  },
  viewFacultiesText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  viewFacultiesSubtext: {
    fontSize: 12,
    color: '#888888',
    fontWeight: '400',
  },
  viewFacultiesArrow: {
    fontSize: 20,
    color: '#888888',
    marginLeft: spacing.md,
    fontWeight: '300',
  },

  // Featured Section
  featuredSection: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  sectionHeader: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: spacing.sm,
    letterSpacing: 0.5,
  },
  sectionLine: {
    width: 324,
    height: 2,
    backgroundColor: '#FFD700',
    opacity: 0.5,
    borderRadius: 1,
  },
  featuredGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featuredCard: {
    width: '48%',
    backgroundColor: '#1A1A24',
    borderRadius: 20,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.small,
  },
  featuredIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
    color: '#FFD700',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  featuredText: {
    fontSize: 12,
    color: '#888888',
    lineHeight: 18,
    fontWeight: '400',
  },

  // Stats/Rating Badge Style (for future use)
  badge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0A0A0F',
    letterSpacing: 0.3,
  },

  // Card with gradient effect
  gradientCard: {
    backgroundColor: '#14141A',
    borderRadius: 24,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.medium,
  },
  bottomPadding: {
  height: 80, 
},
});