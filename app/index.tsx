import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabLayout from './(tabs)/_layout';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TabLayout} />
        <Tab.Screen name="Create" component={TabLayout} />
        <Tab.Screen name="Calendar" component={TabLayout} />
        <Tab.Screen name="Startup" component={TabLayout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}