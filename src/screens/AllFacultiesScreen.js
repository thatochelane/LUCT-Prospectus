import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { faculties } from '../data/faculties';
import { styles } from '../styles/AllFacultiesStyles';
import BottomActionBar from '../components/BottomActionBar';
import CustomPopup from '../components/CustomPopup';
import { addToCalendar, openDayEvents } from '../utils/calendarHelper';

const AllFacultiesScreen = ({ navigation }) => {
  const [showContactPopup, setShowContactPopup] = React.useState(false);
  const [showCalendarPopup, setShowCalendarPopup] = React.useState(false);

  const contactOptions = [
    { icon: '📞', text: 'Call Us', onPress: () => Linking.openURL('tel:+26622315767') },
    { icon: '✉️', text: 'Send Email', onPress: () => Linking.openURL('mailto:admissions@limkokwing.ac.ls') },
    { icon: '🌐', text: 'Visit Website', onPress: () => Linking.openURL('https://www.limkokwing.ac.ls') },
  ];

  const calendarOptions = openDayEvents.map(event => ({
    icon: '📌',
    text: event.title.split('-')[1]?.trim() || event.title,
    onPress: () => addToCalendar(event)
  }));

  const handleRate = () => {
    Alert.alert(
      "Rate this App",
      "Would you like to rate LUCT Prospectus on the Play Store?",
      [
        { text: "⭐ Rate Now", onPress: () => Linking.openURL('market://details?id=com.anonymous.LUCTProspectus') },
        { text: "Later", style: "cancel" }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={faculties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.facultyCard,
              index === 0 && styles.firstCard
            ]}
            onPress={() => navigation.navigate('CourseList', { 
              facultyId: item.id,
              facultyName: item.name 
            })}
            activeOpacity={0.8}
          >
            <View style={styles.cardGradient} />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                {/* Icon in rectangular box with border radius */}
                <View style={styles.iconBox}>
                  <FontAwesome6 
                    name={item.iconName || 'university'} 
                    size={24} 
                    color="#FFD700" 
                    solid
                  />
                </View>
                <Text style={styles.facultyName}>{item.name}</Text>
              </View>
              <Text style={styles.facultyDescription}>{item.description}</Text>
              <View style={styles.cardStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>5</Text>
                  <Text style={styles.statLabel}>COURSES</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>→</Text>
                  <Text style={styles.statLabel}>EXPLORE</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={styles.bottomPadding} />}
      />

      {/* Bottom Action Bar */}
      <BottomActionBar 
        onContact={() => setShowContactPopup(true)}
        onRate={handleRate}
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
    </SafeAreaView>
  );
};

export default AllFacultiesScreen;