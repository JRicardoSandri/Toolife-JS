// BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './Screens/HomeScreen';
import ChamadosScreen from './Screens/ChamadosScreen';
import PerfilScreen from './Screens/PerfilScreen';
import theme from './theme';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFD60A',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#001814',
          borderTopWidth: 0,
        },
        tabBarIcon: ({ route, color, size }) => {
  let iconName;

  if (route.name === 'Home') iconName = 'home-outline';
  if (route.name === 'Chamados') iconName = 'list-outline';
  if (route.name === 'Perfil') iconName = 'person-outline';

  return <Ionicons name={iconName} size={size} color={color} />;
}

      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chamados" component={ChamadosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
