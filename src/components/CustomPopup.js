import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Platform, Linking } from 'react-native';

const CustomPopup = ({ visible, onClose, title, options, type }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
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
              {type === 'contact' && <Text style={styles.headerIcon}>📞</Text>}
              {type === 'calendar' && <Text style={styles.headerIcon}>📅</Text>}
              {type === 'rate' && <Text style={styles.headerIcon}>⭐</Text>}
            </View>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>

          {/* Options */}
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  index === options.length - 1 && styles.lastOption
                ]}
                onPress={() => {
                  if (option.onPress) option.onPress();
                  onClose();
                }}
                activeOpacity={0.7}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionIcon}>{option.icon}</Text>
                  <Text style={styles.optionText}>{option.text}</Text>
                </View>
                <Text style={styles.optionArrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Cancel Button */}
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Text style={styles.cancelButtonText}>CANCEL</Text>
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
  optionsContainer: {
    padding: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A24',
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  lastOption: {
    marginBottom: 0,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIcon: {
    fontSize: 22,
    marginRight: 12,
    width: 30,
    textAlign: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  optionArrow: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#1A1A24',
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  cancelButtonText: {
    fontSize: 15,
    color: '#888888',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default CustomPopup;