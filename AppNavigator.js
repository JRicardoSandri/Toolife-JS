import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importação das telas
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ChamadosScreen from './Screens/ChamadosScreen';
import PerfilScreen from './Screens/PerfilScreen';
import EngenhariaScreen from './Screens/EngenhariaScreen';
import ClinicaServicosScreen from './Screens/ClinicaServicosScreen';
import PredialServicosScreen from './Screens/PredialServicosScreen';
import DetalheServicoScreen from './Screens/DetalheServicoScreen';
import NovoChamadoScreen from './Screens/NovoChamadoScreen';
import PlanosScreen from './Screens/PlanosScreen';
import ConfirmacaoAssinaturaScreen from './Screens/ConfirmacaoAssinaturaScreen';
import DashboardScreen from './Screens/DashboardScreen';

import theme from './theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          if (route.name === 'Chamados') iconName = 'list-outline';
          if (route.name === 'Perfil') iconName = 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chamados" component={ChamadosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="Engenharia" component={EngenhariaScreen} />
      <Stack.Screen name="ClinicaServicos" component={ClinicaServicosScreen} />
      <Stack.Screen name="PredialServicos" component={PredialServicosScreen} />
      <Stack.Screen name="DetalheServico" component={DetalheServicoScreen} />
      <Stack.Screen name="NovoChamado" component={NovoChamadoScreen} />
      <Stack.Screen name="Planos" component={PlanosScreen} />
      <Stack.Screen name="ConfirmacaoAssinatura" component={ConfirmacaoAssinaturaScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}


