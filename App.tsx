import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserMainScreen from './screens/UserMainScreen';
import RegisterationDetails from './screens/RegisterationDetailsScreen';
import TournamentGallery from './screens/TournamentGalleryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "#FFF" }, headerShown: false }}>
        <Stack.Screen name='UserHome' component={UserMainScreen} />
        <Stack.Screen name='RegisterationDetails' component={RegisterationDetails} />
        <Stack.Screen name='TournamentGallery' component={TournamentGallery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}