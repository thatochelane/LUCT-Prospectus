import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { quizQuestions, facultyRecommendations } from '../data/quizQuestions';

const QuizScreen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedFaculty, setRecommendedFaculty] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(1));

  const handleOptionSelect = (questionId, optionId, facultyId) => {
    // Store the selected option
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: { optionId, facultyId }
    });

    // Animate transition
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();

    // Move to next question or show results
    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 200);
    } else {
      // Calculate result
      setTimeout(() => {
        calculateResult();
      }, 200);
    }
  };

  const calculateResult = () => {
    // Count faculty occurrences
    const facultyCounts = {};
    Object.values(selectedOptions).forEach(option => {
      const facultyId = option.facultyId;
      facultyCounts[facultyId] = (facultyCounts[facultyId] || 0) + 1;
    });

    // Find the most selected faculty
    let maxCount = 0;
    let recommendedId = null;
    
    Object.entries(facultyCounts).forEach(([facultyId, count]) => {
      if (count > maxCount) {
        maxCount = count;
        recommendedId = facultyId;
      }
    });

    // If no clear winner or no selections, default to ICT
    if (!recommendedId) {
      recommendedId = '6';
    }

    setRecommendedFaculty(facultyRecommendations[recommendedId]);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions({});
    setShowResult(false);
    setRecommendedFaculty(null);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResult && recommendedFaculty) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.resultContainer}>
            <View style={styles.resultHeader}>
              <Text style={styles.resultIcon}>{recommendedFaculty.icon}</Text>
              <Text style={styles.resultTitle}>Your Recommended Faculty</Text>
            </View>

            <View style={styles.resultCard}>
              <Text style={styles.resultFacultyName}>{recommendedFaculty.name}</Text>
              <Text style={styles.resultDescription}>{recommendedFaculty.description}</Text>
              
              <View style={styles.divider} />
              
              <Text style={styles.recommendedCoursesTitle}>Recommended Programmes:</Text>
              {recommendedFaculty.courses.map((course, index) => (
                <View key={index} style={styles.courseItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.courseText}>{course}</Text>
                </View>
              ))}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.exploreButton]}
                onPress={() => {
                  navigation.navigate('AllFaculties');
                }}
              >
                <Text style={styles.exploreButtonText}>EXPLORE THIS FACULTY</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.retakeButton]}
                onPress={resetQuiz}
              >
                <Text style={styles.retakeButtonText}>RETAKE QUIZ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {question.options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedOptions[question.id]?.optionId === option.id && 
                styles.optionButtonSelected
              ]}
              onPress={() => handleOptionSelect(question.id, option.id, option.facultyId)}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.optionText,
                selectedOptions[question.id]?.optionId === option.id && 
                styles.optionTextSelected
              ]}>
                {option.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Extra bottom padding for better scrolling */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {currentQuestion + 1} of {quizQuestions.length} answered
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
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
  
  // Main ScrollView
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
  },
  
  // Question Card
  questionCard: {
    backgroundColor: '#14141A',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
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
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#14141A',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2A2A35',
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
    }),
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
  bottomPadding: {
    height: 20,
  },

  // Footer
  footer: {
    padding: 24,
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
    padding: 24,
  },
  resultHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  resultIcon: {
    fontSize: 64,
    marginBottom: 16,
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
    padding: 24,
    borderWidth: 1,
    borderColor: '#2A2A35',
    marginBottom: 24,
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },
  resultFacultyName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  resultDescription: {
    fontSize: 16,
    color: '#A0A0B0',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: '#2A2A35',
    marginVertical: 16,
  },
  recommendedCoursesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD700',
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFD700',
    marginRight: 12,
  },
  courseText: {
    fontSize: 15,
    color: '#A0A0B0',
    flex: 1,
    lineHeight: 22,
    fontWeight: '400',
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    }),
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
});

export default QuizScreen;