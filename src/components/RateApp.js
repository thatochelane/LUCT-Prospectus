import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Platform, Alert, Linking } from 'react-native';
import * as StoreReview from 'expo-store-review';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RateApp = ({ visible, onClose }) => {
  const [isModalVisible, setModalVisible] = useState(visible);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  const handleStarPress = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitRating = async () => {
    if (selectedRating === 0) {
      Alert.alert('Please select a rating', 'Tap on the stars to rate the app');
      return;
    }

    try {
      if (selectedRating >= 4) {
        // High rating - ask to rate on Play Store
        if (await StoreReview.isAvailableAsync()) {
          await StoreReview.requestReview();
        } else {
          Linking.openURL('market://details?id=com.anonymous.LUCTProspectus')
            .catch(() => Linking.openURL('https://play.google.com/store/apps/details?id=com.anonymous.LUCTProspectus'));
        }
        await AsyncStorage.setItem('hasRatedApp', 'true');
        setHasRated(true);
      } else {
        // Low rating - show feedback message
        Alert.alert(
          'Thank you for your feedback',
          'Would you like to tell us how we can improve?',
          [
            { text: 'Send Feedback', onPress: () => Linking.openURL('mailto:feedback@limkokwing.ac.ls?subject=App Feedback') },
            { text: 'Not Now', style: 'cancel' }
          ]
        );
      }
      
      setTimeout(() => {
        setModalVisible(false);
        onClose();
      }, 500);
    } catch (error) {
      console.error('Rate error:', error);
      Alert.alert('Error', 'Could not process your rating');
    }
  };

  const handleLater = () => {
    setModalVisible(false);
    onClose();
  };

  const handleNever = async () => {
    await AsyncStorage.setItem('neverAskRate', 'true');
    setModalVisible(false);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <TouchableOpacity 
          style={styles.modalContent} 
          activeOpacity={1} 
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header with icon */}
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.headerIcon}>⭐</Text>
            </View>
            <Text style={styles.headerTitle}>Rate LUCT Prospectus</Text>
          </View>

          {/* Stars */}
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => handleStarPress(star)}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.starIcon,
                  star <= selectedRating && styles.starIconSelected
                ]}>
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <Text style={styles.modalText}>
            Tap on the stars to rate the app. Your feedback helps us improve!
          </Text>

          {selectedRating > 0 && (
            <View style={styles.selectedRatingContainer}>
              <Text style={styles.selectedRatingText}>
                You selected {selectedRating} {selectedRating === 1 ? 'star' : 'stars'}
              </Text>
            </View>
          )}

          {/* Submit Button */}
          <TouchableOpacity 
            style={[
              styles.rateButton,
              selectedRating === 0 && styles.rateButtonDisabled
            ]} 
            onPress={handleSubmitRating}
            activeOpacity={0.8}
            disabled={selectedRating === 0}
          >
            <Text style={styles.rateButtonText}>SUBMIT RATING</Text>
          </TouchableOpacity>

          {/* Later Button */}
          <TouchableOpacity 
            style={styles.laterButton} 
            onPress={handleLater}
            activeOpacity={0.7}
          >
            <Text style={styles.laterButtonText}>LATER</Text>
          </TouchableOpacity>

          {/* Never Button */}
          <TouchableOpacity 
            style={styles.neverButton} 
            onPress={handleNever}
            activeOpacity={0.6}
          >
            <Text style={styles.neverButtonText}>DON'T ASK AGAIN</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalContent: {
    backgroundColor: '#14141A',
    borderRadius: 28,
    width: '85%',
    borderWidth: 1,
    borderColor: '#2A2A35',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A35',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1A1A24',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  headerIcon: {
    fontSize: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFD700',
    letterSpacing: 0.5,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  starIcon: {
    fontSize: 40,
    marginHorizontal: 6,
    color: '#2A2A35',
  },
  starIconSelected: {
    color: '#FFD700',
  },
  modalText: {
    fontSize: 14,
    color: '#A0A0B0',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
    paddingHorizontal: 24,
  },
  selectedRatingContainer: {
    backgroundColor: '#1A1A24',
    marginHorizontal: 24,
    marginBottom: 20,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  selectedRatingText: {
    fontSize: 15,
    color: '#FFD700',
    textAlign: 'center',
    fontWeight: '500',
  },
  rateButton: {
    backgroundColor: '#FFD700',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  rateButtonDisabled: {
    backgroundColor: '#2A2A35',
    borderColor: '#2A2A35',
    opacity: 0.5,
  },
  rateButtonText: {
    fontSize: 15,
    color: '#0A0A0F',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  laterButton: {
    backgroundColor: '#1A1A24',
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  laterButtonText: {
    fontSize: 14,
    color: '#A0A0B0',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  neverButton: {
    marginBottom: 20,
    padding: 8,
    alignItems: 'center',
  },
  neverButtonText: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '400',
    letterSpacing: 0.3,
  },
});

export default RateApp;