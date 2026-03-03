import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RatingSystem = ({ initialRating = 0, onRatingChange, maxRating = 6 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRate = () => {
    if (rating < maxRating) {
      const newRating = rating + 1;
      setRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingLabel}>Course Rating:</Text>
        <View style={styles.starsContainer}>
          {[...Array(maxRating)].map((_, index) => (
            <Text key={index} style={styles.star}>
              {index < rating ? '⭐' : '☆'}
            </Text>
          ))}
        </View>
        <Text style={styles.ratingValue}>{rating}/{maxRating}</Text>
      </View>
      
      <TouchableOpacity 
        style={[styles.rateButton, rating >= maxRating && styles.disabledButton]} 
        onPress={handleRate}
        disabled={rating >= maxRating}
      >
        <Text style={styles.rateButtonText}>
          {rating >= maxRating ? 'Max Rating Reached' : 'Rate This Course (+1)'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  star: {
    fontSize: 20,
    marginHorizontal: 2,
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  rateButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  rateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RatingSystem;