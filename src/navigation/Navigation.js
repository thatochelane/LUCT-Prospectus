import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AllFacultiesScreen from '../screens/AllFacultiesScreen';
import CourseListScreen from '../screens/CourseListScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import QuizScreen from '../screens/QuizScreen';

const Stack = createNativeStackNavigator();

export default function Navigation (){
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#1d1c1c', // Maroon color for header
                    },
                    headerTintColor: '#fff', // White text in header
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen 
                    name='Home' 
                    component={HomeScreen}
                    options={{
                        title: 'Limkokwing University',
                        headerTitle: 'LUCT Prospectus',
                    }}
                />

                <Stack.Screen
                    name='Quiz'
                    component={QuizScreen}
                    options={{
                        title: 'Career Quide Quiz',
                    }}
                       
                />
                
                <Stack.Screen 
                    name='AllFaculties' 
                    component={AllFacultiesScreen}
                    options={({ route }) => ({ 
                        title: route.params?.facultyName || 'Available Faculties',
                    })}
                />
                
                <Stack.Screen 
                    name='CourseList' 
                    component={CourseListScreen}
                    options={({ route }) => ({ 
                        title: route.params?.facultyName + ' Courses' || 'Courses',
                    })}
                />
                
                <Stack.Screen 
                    name='CourseDetail' 
                    component={CourseDetailScreen}
                    options={({ route }) => ({ 
                        title: route.params?.courseName || 'Course Details',
                    })}
                />
                
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}