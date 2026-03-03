import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/HomeScreenStyles';
import BottomActionBar from '../components/BottomActionBar';
import RateApp from '../components/RateApp';
import CustomPopup from '../components/CustomPopup';
import { addToCalendar, openDayEvents } from '../utils/calendarHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [showRateModal, setShowRateModal] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showCalendarPopup, setShowCalendarPopup] = useState(false);

  useEffect(() => {
    const checkRateStatus = async () => {
      const hasRated = await AsyncStorage.getItem('hasRatedApp');
      const neverAsk = await AsyncStorage.getItem('neverAskRate');
      
      if (!hasRated && !neverAsk) {
        setTimeout(() => setShowRateModal(true), 3000);
      }
    };
    
    checkRateStatus();
  }, []);

  const contactOptions = [
    { 
      icon: '📞', 
      text: 'Call Us', 
      onPress: () => Linking.openURL('tel:+26622315767') 
    },
    { 
      icon: '✉️', 
      text: 'Send Email', 
      onPress: () => Linking.openURL('mailto:admissions@limkokwing.ac.ls') 
    },
    { 
      icon: '🌐', 
      text: 'Visit Website', 
      onPress: () => Linking.openURL('https://www.limkokwing.ac.ls') 
    },
  ];

  const calendarOptions = openDayEvents.map(event => ({
    icon: '📌',
    text: event.title.split('-')[1]?.trim() || event.title,
    onPress: () => addToCalendar(event)
  }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image 
            source={require('../assets/Images/limkokwing-image.jpeg')}
            style={styles.headerImage}
          />
          <View style={styles.overlay} />
          <View style={styles.headerContent}>
            <Text style={styles.universityName}>LUCT</Text>
            <Text style={styles.tagline}>BE THE BEST</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>PROSPECTUS 2026</Text>
          </View>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to Limkokwing University</Text>
          <Text style={styles.welcomeText}>
            Explore our innovative programmes that shape careers of the future. 
            Choose from our wide range of faculties and courses designed to 
            nurture the next generation of global leaders.
          </Text>
        </View>

        {/* Quiz Button */}
        <TouchableOpacity 
          style={styles.quizButton}
          onPress={() => navigation.navigate('Quiz')}
          activeOpacity={0.9}
        >
          <Text style={styles.quizButtonText}>CAREER GUIDE QUIZ</Text>
          <Text style={styles.quizButtonSubtext}>Find your perfect path</Text>
        </TouchableOpacity>

        {/* View Faculties Button */}
        <TouchableOpacity 
          style={styles.viewFacultiesButton}
          onPress={() => navigation.navigate('AllFaculties')}
          activeOpacity={0.9}
        >
          <View style={styles.viewFacultiesContent}>
            <Text style={styles.viewFacultiesText}>VIEW ALL FACULTIES</Text>
            <Text style={styles.viewFacultiesSubtext}>Explore 6 faculties and their programmes</Text>
          </View>
        </TouchableOpacity>

        {/* Featured Section */}
        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Why Choose LUCT?</Text>
            <View style={styles.sectionLine} />
          </View>
          
          <View style={styles.featuredGrid}>
            <View style={styles.featuredCard}>
              <Text style={styles.featuredTitle}>Global Network</Text>
              <Text style={styles.featuredText}>Students from 150+ countries</Text>
            </View>
            
            <View style={styles.featuredCard}>
              <Text style={styles.featuredTitle}>Award Winning</Text>
              <Text style={styles.featuredText}>Lesotho's most awarded university</Text>
            </View>
            
            <View style={styles.featuredCard}>
              <Text style={styles.featuredTitle}>Innovation</Text>
              <Text style={styles.featuredText}>Cutting-edge programmes</Text>
            </View>
            
            <View style={styles.featuredCard}>
              <Text style={styles.featuredTitle}>Career Ready</Text>
              <Text style={styles.featuredText}>Industry-focused curriculum</Text>
            </View>
          </View>
        </View>
        
        {/* Add bottom padding for the action bar */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Bottom Action Bar */}
      <BottomActionBar 
        onContact={() => setShowContactPopup(true)}
        onRate={() => setShowRateModal(true)}
        onCalendar={() => setShowCalendarPopup(true)}
      />

      {/* Custom Popups */}
      <CustomPopup
        visible={showContactPopup}
        onClose={() => setShowContactPopup(false)}
        title="Contact an Advisor"
        options={contactOptions}
        type="contact"
      />

      <CustomPopup
        visible={showCalendarPopup}
        onClose={() => setShowCalendarPopup(false)}
        title="Open Day Events"
        options={calendarOptions}
        type="calendar"
      />

      {/* Rate App Modal */}
      <RateApp 
        visible={showRateModal} 
        onClose={() => setShowRateModal(false)} 
      />
    </SafeAreaView>
  );
};

export default HomeScreen;