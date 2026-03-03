import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows, layout } from './theme';

export const styles = StyleSheet.create({
  container: {
    ...layout.container,
    backgroundColor: '#0A0A0F',
  },
  
  // Header
  header: {
    padding: spacing.xl,
    paddingBottom: spacing.md,
    backgroundColor: '#14141A',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A35',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFD700',
    marginBottom: spacing.xs,
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
    letterSpacing: 0.5,
  },

  // Progress Bar
  progressContainer: {
    height: 4,
    backgroundColor: '#1A1A24',
    width: '100%',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#FFD700',
    width: '0%',
  },

  // Content
  content: {
    flex: 1,
    padding: spacing.xl,
  },
  
  // Question Card
  questionCard: {
    backgroundColor: '#14141A',
    borderRadius: 24,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.medium,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 28,
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  // Options
  optionsContainer: {
    gap: spacing.md,
  },
  optionButton: {
    backgroundColor: '#14141A',
    borderRadius: 20,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.small,
  },
  optionButtonSelected: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  optionText: {
    fontSize: 16,
    color: '#A0A0B0',
    lineHeight: 22,
    fontWeight: '400',
  },
  optionTextSelected: {
    color: '#0A0A0F',
    fontWeight: '600',
  },

  // Footer
  footer: {
    padding: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: '#2A2A35',
    backgroundColor: '#14141A',
  },
  footerText: {
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.3,
  },

  // Result Screen
  resultContainer: {
    flex: 1,
    padding: spacing.xl,
  },
  resultHeader: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  resultIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
    color: '#FFD700',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFD700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  resultCard: {
    backgroundColor: '#14141A',
    borderRadius: 24,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.medium,
    marginBottom: spacing.xl,
  },
  resultFacultyName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: spacing.md,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  resultDescription: {
    fontSize: 16,
    color: '#A0A0B0',
    lineHeight: 24,
    marginBottom: spacing.lg,
    textAlign: 'center',
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: '#2A2A35',
    marginVertical: spacing.lg,
  },
  recommendedCoursesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD700',
    marginBottom: spacing.md,
    letterSpacing: 0.3,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFD700',
    marginRight: spacing.md,
  },
  courseText: {
    fontSize: 15,
    color: '#A0A0B0',
    flex: 1,
    lineHeight: 22,
    fontWeight: '400',
  },
  buttonContainer: {
    gap: spacing.md,
  },
  button: {
    padding: spacing.lg,
    borderRadius: 30,
    alignItems: 'center',
    ...shadows.small,
  },
  exploreButton: {
    backgroundColor: '#FFD700',
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A0A0F',
    letterSpacing: 0.5,
  },
  retakeButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  retakeButtonText: {
    fontSize: 16,
    color: '#A0A0B0',
    fontWeight: '500',
    letterSpacing: 0.3,
  },

  // Scroll View for options (if needed)
  optionsScrollView: {
    flex: 1,
    marginHorizontal: spacing.xl,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },
});