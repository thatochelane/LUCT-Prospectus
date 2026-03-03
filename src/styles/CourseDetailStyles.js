import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows, layout } from './theme';

export const styles = StyleSheet.create({
  container: {
    ...layout.container,
    backgroundColor: '#0A0A0F',
  },
  
  // Hero Image Section
  heroSection: {
    height: 280,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10,10,15,0.85)',
    zIndex: 1,
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.xxl,
    zIndex: 2,
  },
  courseLevel: {
    fontSize: 13,
    color: '#FFD700',
    marginBottom: spacing.sm,
    letterSpacing: 2,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  courseName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: spacing.sm,
    letterSpacing: 0.5,
  },
  courseId: {
    fontSize: 13,
    color: '#888888',
    fontWeight: '400',
  },

  // Main Content
  contentContainer: {
    flex: 1,
    padding: spacing.xl,
  },
  
  // Info Cards
  infoCard: {
    backgroundColor: '#14141A',
    borderRadius: 24,
    padding: spacing.xl,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.medium,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD700',
    marginBottom: spacing.lg,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  
  // Description Section
  descriptionText: {
    fontSize: 15,
    color: '#A0A0B0',
    lineHeight: 24,
    fontWeight: '400',
  },
  
  // Requirements Section
  requirementsContainer: {
    marginTop: spacing.sm,
  },
  requirementItem: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFD700',
    marginRight: spacing.md,
    marginTop: 8,
  },
  requirementText: {
    fontSize: 14,
    color: '#A0A0B0',
    flex: 1,
    lineHeight: 22,
    fontWeight: '400',
  },

  // Duration and Stats Grid
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    backgroundColor: '#1A1A24',
    borderRadius: 20,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
    marginBottom: spacing.xs,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFD700',
    marginBottom: 2,
  },
  statSubtext: {
    fontSize: 11,
    color: '#888888',
    fontWeight: '400',
  },

  // Rating Section
  ratingSection: {
    backgroundColor: '#14141A',
    borderRadius: 24,
    padding: spacing.xl,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: '#2A2A35',
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD700',
    marginBottom: spacing.lg,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  currentRating: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FFD700',
    marginBottom: spacing.xs,
  },
  ratingMax: {
    fontSize: 14,
    color: '#888888',
    marginBottom: spacing.lg,
    fontWeight: '400',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  starIcon: {
    fontSize: 32,
    marginHorizontal: spacing.xs,
  },
  starFilled: {
    color: '#FFD700',
  },
  starEmpty: {
    color: '#2A2A35',
  },
  rateButton: {
    backgroundColor: '#FFD700',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xxl,
    borderRadius: 30,
    ...shadows.medium,
  },
  rateButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A0A0F',
    letterSpacing: 0.5,
  },
  rateButtonDisabled: {
    backgroundColor: '#2A2A35',
    opacity: 1,
  },
  // Video Section
  videoCard: {
  backgroundColor: '#14141A',
  borderRadius: 24,
  padding: spacing.lg,
  marginBottom: spacing.lg,
  borderWidth: 1,
  borderColor: '#2A2A35',
  ...shadows.medium,
  minHeight: 280, // Add minimum height
},
videoThumbnail: {
  width: '100%',
  height: 200,
  borderRadius: 16,
  overflow: 'hidden',
  position: 'relative',
  marginTop: spacing.sm,
  borderWidth: 1,
  borderColor: '#2A2A35',
  backgroundColor: '#1A1A24', // Add background for thumbnail
},
thumbnailImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover', // Ensure image covers the area
},
playButtonOverlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0,0,0,0.4)',
  justifyContent: 'center',
  alignItems: 'center',
},
playButtonCircle: {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: '#FFD700',
  justifyContent: 'center',
  alignItems: 'center',
  ...shadows.medium,
},
playButtonIcon: {
  fontSize: 24,
  color: '#0A0A0F',
  marginLeft: 4,
  fontWeight: '600',
},
videoCaption: {
  fontSize: 13,
  color: '#888888',
  textAlign: 'center',
  marginTop: spacing.sm,
  fontWeight: '500',
  letterSpacing: 0.3,
},
webviewContainer: {
  height: 220,
  width: '100%',
  borderRadius: 16,
  overflow: 'hidden',
  marginTop: spacing.sm,
  borderWidth: 1,
  borderColor: '#2A2A35',
  backgroundColor: '#000000',
  justifyContent: 'center', // Center content
  alignItems: 'center',
},
webview: {
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: '#000000',
},
videoContainer: {
  width: '100%',
  height: 220,
  borderRadius: 16,
  overflow: 'hidden',
  marginTop: spacing.sm,
  backgroundColor: '#000000',
},
video: {
  width: '100%',
  height: '100%',
},

  // Back Button
  backToTop: {
    backgroundColor: '#14141A',
    padding: spacing.lg,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.small,
  },
  backToTopText: {
    fontSize: 15,
    color: '#FFD700',
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // Loading State
  loadingContainer: {
    ...layout.container,
    ...layout.center,
    backgroundColor: '#0A0A0F',
  },
  loadingText: {
    fontSize: 16,
    color: '#888888',
    marginTop: spacing.md,
    fontWeight: '400',
  },

  // Error State
  errorContainer: {
    ...layout.container,
    ...layout.center,
    padding: spacing.xxl,
    backgroundColor: '#0A0A0F',
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: spacing.lg,
    color: '#FFD700',
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  errorSubtext: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 20,
  },
  errorButton: {
    backgroundColor: '#FFD700',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xxl,
    borderRadius: 30,
    ...shadows.medium,
  },
  errorButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A0A0F',
    letterSpacing: 0.5,
  },
  // Contact
  contactButton: {
  backgroundColor: '#14141A',
  padding: spacing.lg,
  borderRadius: 25,
  alignItems: 'center',
  marginTop: spacing.md,
  borderWidth: 1,
  borderColor: '#FFD700',
  ...shadows.small,
},
contactButtonText: {
  fontSize: 15,
  color: '#FFD700',
  fontWeight: '600',
  letterSpacing: 0.5,
},
});