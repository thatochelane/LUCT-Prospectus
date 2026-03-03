import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const BottomActionBar = ({ onContact, onRate, onCalendar }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <FontAwesome6 name="house" size={18} color="#FFD700" solid />
        </View>
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.actionButton}
        onPress={onContact}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <FontAwesome6 name="headset" size={18} color="#FFD700" solid />
        </View>
        <Text style={styles.iconLabel}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.actionButton}
        onPress={onRate}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <FontAwesome6 name="star" size={18} color="#FFD700" solid />
        </View>
        <Text style={styles.iconLabel}>Rate</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.actionButton}
        onPress={onCalendar}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <FontAwesome6 name="calendar" size={18} color="#FFD700" solid />
        </View>
        <Text style={styles.iconLabel}>Events</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#14141A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#2A2A35',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1A1A24',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  iconLabel: {
    fontSize: 11,
    color: '#888888',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});

export default BottomActionBar;