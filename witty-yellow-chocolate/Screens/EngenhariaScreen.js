import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';

const opcoes = [
  { nome: 'Engenharia Clínica', icone: 'activity', rota: 'ClinicaServicos' },
  { nome: 'Engenharia Predial', icone: 'tool', rota: 'PredialServicos' },
  { nome: 'Meu Perfil', icone: 'user', rota: 'Perfil' },
  { nome: 'Planos', icone: 'credit-card', rota: 'Planos' },
];

export default function EngenhariaScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.rota)}
    >
      <Feather name={item.icone} size={42} color={theme.colors.secondary} />
      <Text
        style={styles.label}
        numberOfLines={1}
        adjustsFontSizeToFit
        ellipsizeMode="tail"
      >
        {item.nome}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={opcoes}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: 12,
    width: '45%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: theme.fonts.size.medium,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    marginTop: 8,
  },
});



