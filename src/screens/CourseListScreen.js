import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Platform, Alert, Linking } from 'react-native';
import { getCoursesByFaculty } from '../data/courses';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomActionBar from '../components/BottomActionBar';
import { addToCalendar, openDayEvents } from '../utils/calendarHelper';

const CourseListScreen = ({ route, navigation }) => {
    const { facultyId, facultyName } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
    
    const courses = getCoursesByFaculty(facultyId);
    
    // Filter courses based on search only
    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 course.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesSearch;
        });
    }, [courses, searchQuery]);

    const handleContact = () => {
        Alert.alert(
          "Contact an Advisor",
          "How would you like to reach us?",
          [
            { text: "📞 Call", onPress: () => Linking.openURL('tel:+26622315767') },
            { text: "✉️ Email", onPress: () => Linking.openURL('mailto:admissions@limkokwing.ac.ls') },
            { text: "🌐 Website", onPress: () => Linking.openURL('https://www.limkokwing.ac.ls') },
            { text: "Cancel", style: "cancel" }
          ]
        );
    };

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

    const handleCalendar = () => {
        Alert.alert(
          "Open Day Events",
          "Select an event to add to your calendar",
          openDayEvents.map(event => ({
            text: event.title.split('-')[1]?.trim() || event.title,
            onPress: () => addToCalendar(event)
          })).concat([{ text: "Cancel", style: "cancel" }])
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                style={styles.coursesContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.header}>
                    <Text style={styles.facultyName}>{facultyName}</Text>
                    <View style={styles.statsRow}>
                        <Text style={styles.courseCount}>Courses: {courses.length}</Text>
                        <View style={styles.statDivider} />
                        <Text style={styles.courseCount}>
                           Degree: {courses.filter(c => c.level === 'Degree').length}
                        </Text>
                        <View style={styles.statDivider} />
                        <Text style={styles.courseCount}>
                           Diplomas: {courses.filter(c => c.level === 'Diploma').length}
                        </Text>
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search programmes..."
                        placeholderTextColor="#666666"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <TouchableOpacity
                            key={course.id}
                            style={styles.courseCard}
                            onPress={() => navigation.navigate('CourseDetail', { 
                                courseId: course.id,
                                courseName: course.name 
                            })}
                            activeOpacity={0.9}
                        >
                            <Image 
                                source={typeof course.image === 'string' ? { uri: course.image } : course.image} 
                                style={styles.courseImage} 
                            />
                            <View style={styles.courseOverlay} />
                            <View style={styles.courseBadge}>
                                <Text style={styles.courseBadgeText}>{course.level}</Text>
                            </View>
                            
                            <View style={styles.courseInfo}>
                                <Text style={styles.courseName}>{course.name}</Text>
                                <Text style={styles.courseDescription} numberOfLines={2}>
                                    {course.description}
                                </Text>
                                
                                <View style={styles.courseFooter}>
                                    <View style={styles.ratingContainer}>
                                        <Text style={styles.ratingValue}>{course.rating}/6</Text>
                                    </View>
                                    <Text style={styles.viewText}>View Details</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyTitle}>No programmes found</Text>
                        <Text style={styles.emptyText}>
                            Try adjusting your search
                        </Text>
                        <TouchableOpacity 
                            style={styles.resetButton}
                            onPress={() => {
                                setSearchQuery('');
                            }}
                        >
                            <Text style={styles.resetButtonText}>Reset Search</Text>
                        </TouchableOpacity>
                    </View>
                )}
                
                {/* Add bottom padding for the action bar */}
                <View style={styles.bottomPadding} />
            </ScrollView>

            {/* Bottom Action Bar */}
            <BottomActionBar 
                onContact={handleContact}
                onRate={handleRate}
                onCalendar={handleCalendar}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0F',
    },
    header: {
        backgroundColor: '#14141A',
        padding: 16,
        borderBottomWidth: 3,
        borderBottomColor: '#2A2A35',
    },
    facultyName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    courseCount: {
        fontSize: 13,
        color: '#A0A0B0',
        fontWeight: '500',
    },
    statDivider: {
        width: 1,
        height: 12,
        backgroundColor: '#2A2A35',
        marginHorizontal: 12,
    },
    searchContainer: {
        padding: 5,
        backgroundColor: '#14141A',
        borderBottomWidth: 1,
        borderBottomColor: '#2A2A35',
        bottom: 2,
    },
    searchInput: {
        backgroundColor: '#1A1A24',
        borderRadius: 25,
        padding: 14,
        paddingHorizontal: 20,
        color: '#FFFFFF',
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#2A2A35',
    },
    coursesContainer: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 0,
    },
    courseCard: {
        backgroundColor: '#14141A',
        borderRadius: 24,
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#2A2A35',
        position: 'relative',
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
    courseImage: {
        width: '100%',
        height: 180,
    },
    courseOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 180,
    },
    courseBadge: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: '#FFD700',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
    },
    courseBadgeText: {
        color: '#0A0A0F',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    courseInfo: {
        padding: 20,
    },
    courseName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 8,
        letterSpacing: 0.3,
    },
    courseDescription: {
        fontSize: 14,
        color: '#A0A0B0',
        lineHeight: 20,
        marginBottom: 16,
    },
    courseFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#2A2A35',
        paddingTop: 16,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingValue: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFD700',
        backgroundColor: '#1A1A24',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#2A2A35',
    },
    viewText: {
        fontSize: 14,
        color: '#FFD700',
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
        paddingHorizontal: 20,
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    emptyText: {
        fontSize: 14,
        color: '#888888',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 20,
    },
    resetButton: {
        backgroundColor: '#14141A',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#FFD700',
    },
    resetButtonText: {
        color: '#FFD700',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    bottomPadding: {
        height: 80,
    },
});

export default CourseListScreen;