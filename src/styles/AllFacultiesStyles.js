import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows, layout } from './theme';

export const styles = StyleSheet.create({
  container: {
    ...layout.container,
    backgroundColor: '#0A0A0F',
  },
  
  header: {
    padding: spacing.xxl,
    paddingBottom: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A35',
    backgroundColor: '#14141A',
  },
  headerTitle: {
    ...typography.h2,
    fontSize: 28,
    marginBottom: spacing.xs,
    color: '#FFD700',
    fontWeight: '700',
    letterSpacing: 1,
  },
  headerSubtitle: {
    ...typography.body2,
    color: '#888888',
    letterSpacing: 1,
    padding: spacing.xxs,
    fontSize: 14,
  },
  
  listContainer: {
    padding: spacing.xl,
    paddingTop: spacing.md,
  },
  
  facultyCard: {
    backgroundColor: '#14141A',
    borderRadius: 24,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...shadows.medium,
  },
  firstCard: {
    marginTop: 0,
  },
  
  cardGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#FFD700',
    opacity: 0.8,
  },
  
  cardContent: {
    padding: spacing.xl,
  },
  
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  // New icon box style - rectangular with border radius
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#1A1A24',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  facultyIcon: {
    width: 32,
    height: 32,
    marginRight: spacing.md,
    color: '#FFD700',
  },
  facultyName: {
    ...typography.h4,
    fontSize: 18,
    flex: 1,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.3,
    lineHeight: 24,
  },
  
  facultyDescription: {
    ...typography.body2,
    marginBottom: spacing.xl,
    lineHeight: 22,
    color: '#A0A0B0',
    fontSize: 14,
  },
  
  cardStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#2A2A35',
    paddingTop: spacing.lg,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    ...typography.h4,
    fontSize: 22,
    color: '#FFD700',
    marginBottom: spacing.xs,
    fontWeight: '700',
  },
  statLabel: {
    ...typography.caption,
    color: '#888888',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#2A2A35',
  },
  
  exploreArrow: {
    fontSize: 24,
    color: '#FFD700',
    opacity: 0.5,
    fontWeight: '300',
  },
  
  // Loading State
  loadingContainer: {
    ...layout.container,
    ...layout.center,
    backgroundColor: '#0A0A0F',
  },
  loadingText: {
    ...typography.body1,
    color: '#888888',
    marginTop: spacing.md,
    fontSize: 16,
  },

  // Empty State
  emptyContainer: {
    ...layout.center,
    padding: spacing.xxl,
    minHeight: 300,
  },
  emptyIcon: {
    fontSize: 48,
    color: '#888888',
    marginBottom: spacing.lg,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: spacing.sm,
  },
  emptyText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 20,
  },
  emptyButton: {
    backgroundColor: '#14141A',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  emptyButtonText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  bottomPadding: {
    height: 80,
  },
});