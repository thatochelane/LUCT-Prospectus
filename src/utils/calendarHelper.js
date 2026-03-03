import * as Calendar from 'expo-calendar';
import { Alert, Platform } from 'react-native';

export const addToCalendar = async (eventDetails) => {
  const { title, startDate, endDate, location, notes } = eventDetails;

  try {
    // Request permissions
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Calendar permission is required to add events');
      return;
    }

    // Get default calendar source
    const calendars = await Calendar.getCalendarsAsync();
    const defaultCalendar = calendars.find(cal => cal.allowsModifications) || calendars[0];

    if (!defaultCalendar) {
      Alert.alert('Error', 'No calendar found on device');
      return;
    }

    // Create event
    const eventId = await Calendar.createEventAsync(defaultCalendar.id, {
      title,
      startDate,
      endDate,
      location,
      notes,
      timeZone: 'Africa/Johannesburg',
    });

    Alert.alert(
      'Success!',
      'Event added to your calendar',
      [{ text: 'OK' }]
    );

  } catch (error) {
    console.error('Calendar error:', error);
    Alert.alert('Error', 'Could not add event to calendar');
  }
};

// Predefined open day events
export const openDayEvents = [
  {
    title: 'LUCT Open Day - Design Innovation',
    startDate: new Date(2026, 2, 15, 10, 0), // March 15, 2026 10:00 AM
    endDate: new Date(2026, 2, 15, 15, 0),   // March 15, 2026 3:00 PM
    location: 'Faculty of Design Innovation',
    notes: 'Tour our design studios and meet faculty members.'
  },
  {
    title: 'LUCT Open Day - ICT & Business',
    startDate: new Date(2026, 2, 22, 10, 0),
    endDate: new Date(2026, 2, 22, 15, 0),
    location: 'Faculty of ICT',
    notes: 'Explore our tech labs and business simulation centers.'
  },
  {
    title: 'LUCT Open Day - Communication & Media',
    startDate: new Date(2026, 2, 29, 10, 0),
    endDate: new Date(2026, 2, 29, 15, 0),
    location: 'Faculty of Communication, Media and Broadcasting',
    notes: 'Tour our TV studios and media labs.'
  },
  {
    title: 'LUCT Open Day - Tourism & Hospitality',
    startDate: new Date(2026, 3, 5, 10, 0), // April 5, 2026
    endDate: new Date(2026, 3, 5, 15, 0),
    location: 'Faculty of Creativity in Tourism and Hospitality',
    notes: 'Experience our hospitality training facilities.'
  },
  {
    title: 'LUCT Open Day - Architecture',
    startDate: new Date(2026, 3, 12, 10, 0),
    endDate: new Date(2026, 3, 12, 15, 0),
    location: 'Faculty of Architecture and the Built Environment',
    notes: 'Tour our design studios and architecture workshops.'
  },
];