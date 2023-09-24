import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserMainScreen from './src/screens/UserMainScreen';
import TournamentDetailsScreen from './src/screens/TournamentDetailsScreen';
import TournamentGalleryScreen from './src/screens/TournamentGalleryScreen';
import Styling from './src/constants/Styling'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Styling.NOTCH_BACKGROUND_COLOR} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: `${Styling.BACKGROUND_COLOR}` }, headerShown: false }}>
        <Stack.Screen name='UserHome' component={UserMainScreen} />
        <Stack.Screen name='TournamentDetails' component={TournamentDetailsScreen} />
        <Stack.Screen name='TournamentGallery' component={TournamentGalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}