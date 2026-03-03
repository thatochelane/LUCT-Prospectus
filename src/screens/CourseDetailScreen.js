import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/CourseDetailStyles';
import { WebView } from 'react-native-webview';
import { Video, ResizeMode } from 'expo-av';

const mockCourseData = {
  'diploma-creative-advertising': {
    level: 'Diploma',
    description: 'Learn the art of creating compelling advertising campaigns that capture attention and drive action. This program combines creative thinking with strategic communication to prepare you for the dynamic world of advertising.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English',
      'Submission of a portfolio',
      'C grade in Art or Design is an added advantage'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Creative Director', 'Art Director', 'Copywriter', 'Advertising Manager'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/creative-design-video.mp4'),
  },
  'diploma-graphic-design': {
    level: 'Diploma',
    description: 'Master visual communication through typography, illustration, and digital design. This program develops your creative and technical skills to become a professional graphic designer.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English',
      'Submission of a portfolio',
      'C grade in Art or Design is an added advantage'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Graphic Designer', 'UI/UX Designer', 'Brand Identity Designer', 'Illustrator'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/graphic-design.mp4'), 
  },
  'diploma-fashion-apparel': {
    level: 'Diploma',
    description: 'Explore fashion design, textile technology, and apparel production. This program nurtures your creative vision and technical skills for the fashion industry.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English',
      'Submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Fashion Designer', 'Textile Designer', 'Fashion Stylist', 'Apparel Production Manager'],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoUrl: 'vnd.youtube:_ADkxx3qFis' 
  },
  'diploma-interior-design': {
    level: 'Diploma',
    description: 'Transform spaces into functional, aesthetic environments. Learn space planning, color theory, materials, and 3D visualization techniques.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Fashion Designer', 'Textile Designer', 'Fashion Stylist'],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/fashion-apparel.mp4'),
  },
  'diploma-multimedia-design': {
    level: 'Diploma',
    description: 'Master digital media creation including animation, video production, web design, and interactive content for modern platforms.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Fashion Designer', 'Textile Designer', 'Fashion Stylist'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/multimedia-design.mp4'),
  },

  // Faculty of CMB
  'degree-prof-com': {
    level: 'Degree',
    description: 'Clear communication moves solutions forward. Study professional writing and journalism.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English',
      'With C grade or better in Mathematics',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/prof-com.mp4'),
  },
  'degree-broadcasting': {
    level: 'Degree',
    description: 'Clear communication moves solutions forward. Study professional public relations, journalism and public speaking.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English',
      'With C grade or better in Mathematics',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/broadcasting.mp4'),
  },
  'diploma-television': {
    level: 'Diploma',
    description: 'Clear communication moves solutions forward. Study professional public relations, journalism and public speaking.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/television.mp4'),
  },
  'diploma-public-relations': {
    level: 'Diploma',
    description: 'Clear communication moves solutions forward. Study professional public relations, journalism and public speaking.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English/Literature',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/public-relation.mp4'),
  },
  'diploma-journalism': {
    level: 'Diploma',
    description: 'Clear communication moves solutions forward. Study professional public relations, journalism and public speaking.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English/Literature',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/journalism.mp4'),
  },

  // Faculty of Architecture
  'diploma-arch': {
    level: 'Diploma',
    description: 'A design discipline for building projects, combining technical and aesthetic expertise.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English/Literature',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/diplo-arch.mp4'),
  },
  'degree-architectural-studies': {
    level: 'Degree',
    description: 'Comprehensive foundation in architectural design, history, theory, and technology preparing students for professional practice and further study.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'With a C in any of the following:',
      'Art, Woodwork, Design and Technology, or Technical Drawing',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/arch-studies.mp4'),
  },
  'degree-construction-management': {
    level: 'Degree',
    description: 'Learn to manage construction projects from conception to completion, including budgeting, scheduling, quality control, and team coordination.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'With a C in any of the following:',
      'Art, Woodwork, Design and Technology, or Technical Drawing',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/constru-management.mp4'),
  },
  'degree-interior-architecture': {
    level: 'Degree',
    description: 'Explore the design of interior spaces that blend functionality, aesthetics, and human experience in residential and commercial environments.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'With a C in any of the following:',
      'Art, Woodwork, Design and Technology, or Technical Drawing',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/interior-arch.mp4'),
  },
  'diploma-civil-engineering': {
    level: 'Diploma',
    description: 'Gain practical skills in structural design, construction materials, surveying, and infrastructure development for buildings and public works.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'With a C in any of the following:',
      'Science or technical subject',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/civil.mp4'),
  },

  // Faculty of Business and Globalization
  'degree-international-business': {
    level: 'Degree',
    description: 'Comprehensive program focusing on global business strategies, cross-cultural management, and international trade.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/inter-business.mp4'),
  },
  'degree-entrepreneurship': {
    level: 'Degree',
    description: 'Develop skills to start and manage your own business, including innovation, venture creation, and business planning.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/entrepreneurship.mp4'),
  },
  'degree-hrm': {
    level: 'Degree',
    description: 'Learn to manage talent, develop workplace policies, and lead organizational change effectively.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/hrm.mp4'),
  },
  'diploma-business-management': {
    level: 'Diploma',
    description: 'Foundation in business principles including marketing, finance, operations, and organizational behavior.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/business-management.mp4'),
  },
  'diploma-marketing': {
    level: 'Diploma',
    description: 'Foundation in business principles including marketing, finance, operations, and organizational behavior.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/marketing.mp4'),
  },
  
  // Faculty of Creativity in Tourism and Hospitality
  'degree-tourism-management': {
    level: 'Degree',
    description: 'Comprehensive study of tourism industry including destination management, sustainable tourism, and travel operations.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/tourism.mp4'),
  },
  'diploma-tourism-management': {
    level: 'Diploma',
    description: 'Comprehensive study of tourism industry including destination management, sustainable tourism, and travel operations.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English/Mathematics',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/tourism.mp4'),
  },
  'diploma-hotel-management': {
    level: 'Diploma',
    description: 'Learn hotel operations, front office management, housekeeping, food and beverage services, and hospitality leadership.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English and Geography',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/hospitality.mp4'),
  },
  'diploma-events-management': {
    level: 'Diploma',
    description: 'Master the art of planning, organizing, and executing successful events from conferences to weddings and festivals.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English and Geography',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/events.mp4'),
  },
  'diploma-hospitality-studies': {
    level: 'Diploma',
    description: 'Comprehensive introduction to the hospitality industry including customer service, food production, and accommodation management.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least a D in English and Geography',
      'And C grade in Commercial subjects',
      'And submission of a portfolio'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/hospitality.mp4'),
  },

  // Faculty of ICT
  'degree-software-engineering': {
    level: 'Degree',
    description: 'Comprehensive program covering software development, multimedia applications, and emerging technologies.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a C in Mathematics',
      'And submission of a portfolio'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/software-engineer.mp4'),
  },
  'degree-business-it': {
    level: 'Degree',
    description: 'Combine business acumen with technical skills to drive digital transformation.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least a C in Mathematics',
      'And Commercial/Financial Subjects'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/business-it.mp4'),
  },
  'degree-it': {
    level: 'Degree',
    description: 'Comprehensive IT program covering networking, security, and systems management.',
    requirements: [
      'A minimum of 4 C grades and 2 D passes',
      'At least C grade or better in Mathematics',
      'And Commercial/Financial Subjects'
    ],
    duration: '4 Years',
    credits: '480',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/it.mp4'),
  },
  'diploma-it': {
    level: 'Diploma',
    description: 'Comprehensive IT program covering networking, security, and systems management.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least C grade or better in Mathematics',
      'And Commercial/Financial Subjects'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/it.mp4'),
  },
  'diploma-in-it': {
    level: 'Diploma',
    description: 'Comprehensive IT program covering networking, security, and systems management.',
    requirements: [
      'A minimum of 3 C grades and 2 D passes',
      'At least C grade or better in Mathematics',
      'And Commercial/Financial Subjects'
    ],
    duration: '3 Years',
    credits: '360',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/it.mp4'),
  },

};

const CourseDetailScreen = ({ route, navigation }) => {
  const { courseId, courseName } = route.params;
  const [rating, setRating] = useState(0);
  const [isLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = React.useRef(null);
  
  const courseDetails = mockCourseData[courseId] || {
    level: 'Diploma',
    description: 'Comprehensive program designed to equip students with the skills and knowledge needed for a successful career.',
    requirements: [
      'A minimum of 2 C grades and 2 D passes',
      'At least a D in English',
    ],
    duration: '3 Years',
    credits: '90-120',
    careerPaths: ['Industry Professional', 'Specialist', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    video: require('../assets/Videos/creative-design-video.mp4') // Default video
  };

  const contactAdvisor = () => {
  Alert.alert(
    "Contact an Advisor",
    "How would you like to reach us?",
    [
      { 
        text: "📞 Call", 
        onPress: () => Linking.openURL('tel:+26622315767') 
      },
      { 
        text: "✉️ Email", 
        onPress: () => Linking.openURL('mailto:admissions@limkokwing.ac.ls') 
      },
      { 
        text: "🌐 Visit Website", 
        onPress: () => Linking.openURL('http://limkokwing.ac.ls/subpanel/limkokwing_university.asp') 
      },
      { text: "Cancel", style: "cancel" }
    ]
  );
};

  const handleRate = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading course details...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image Section */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: courseDetails.image }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <Text style={styles.courseLevel}>{courseDetails.level}</Text>
            <Text style={styles.courseName}>{courseName}</Text>
            <Text style={styles.courseId}>Course ID: {courseId}</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Description Card */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>PROGRAMME OVERVIEW</Text>
            <Text style={styles.descriptionText}>
              {courseDetails.description}
            </Text>
          </View>

          {/* Video Player Section */}
          <View style={styles.videoCard}>
            <Text style={styles.cardTitle}>PROGRAMME VIDEO</Text>
            {!showVideo ? (
              <TouchableOpacity 
                style={styles.videoThumbnail}
                onPress={() => setShowVideo(true)}
                activeOpacity={0.7}
              >
                <Image 
                  source={courseDetails.image ? { uri: courseDetails.image } : require('../assets/Images/it-tech.jpg')} 
                  style={styles.thumbnailImage}
                />
                <View style={styles.playButtonOverlay}>
                  <View style={styles.playButtonCircle}>
                    <Text style={styles.playButtonIcon}>▶</Text>
                  </View>
                </View>
                <Text style={styles.videoCaption}>Tap to play video</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.videoContainer}>
                <Video
                  ref={videoRef}
                  style={styles.video}
                  source={courseDetails.video}
                  useNativeControls
                  resizeMode={ResizeMode.CONTAIN}
                  isLooping={false}
                  shouldPlay={true}
                  onPlaybackStatusUpdate={(status) => {
                    if (status.didJustFinish) {
                      setShowVideo(false);
                    }
                  }}
                  onError={(error) => {
                    console.log('Video error:', error);
                    setShowVideo(false);
                  }}
                />
              </View>
            )}
          </View>

          {/* Requirements Card */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>ENTRY REQUIREMENTS</Text>
            <View style={styles.requirementsContainer}>
              {courseDetails.requirements.map((req, index) => (
                <View key={index} style={styles.requirementItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.requirementText}>{req}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Stats Grid */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>PROGRAMME DETAILS</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>DURATION</Text>
                <Text style={styles.statValue}>{courseDetails.duration}</Text>
                <Text style={styles.statSubtext}>Full time</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>CREDITS</Text>
                <Text style={styles.statValue}>{courseDetails.credits}</Text>
                <Text style={styles.statSubtext}>Total credits</Text>
              </View>
            </View>
          </View>

          {/* Career Paths Card */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>CAREER OPPORTUNITIES</Text>
            <View style={styles.requirementsContainer}>
              {courseDetails.careerPaths.map((career, index) => (
                <View key={index} style={styles.requirementItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.requirementText}>{career}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Rating Section */}
          <View style={styles.ratingSection}>
            <Text style={styles.ratingTitle}>RATE THIS COURSE</Text>
            <Text style={styles.currentRating}>{rating}</Text>
            <Text style={styles.ratingMax}>out of 6</Text>
            
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5, 6].map((star) => (
                <Text 
                  key={star} 
                  style={[
                    styles.starIcon,
                    star <= rating ? styles.starFilled : styles.starEmpty
                  ]}
                >
                  ★
                </Text>
              ))}
            </View>

            <TouchableOpacity 
              style={[
                styles.rateButton,
                rating >= 6 && styles.rateButtonDisabled
              ]}
              onPress={handleRate}
              disabled={rating >= 6}
              activeOpacity={0.8}
            >
              <Text style={styles.rateButtonText}>
                {rating >= 6 ? 'MAXIMUM RATING REACHED' : 'RATE THIS PROGRAMME'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Back Button */}
          <TouchableOpacity 
            style={styles.backToTop}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Text style={styles.backToTopText}>BACK</Text>
          </TouchableOpacity>

          
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;