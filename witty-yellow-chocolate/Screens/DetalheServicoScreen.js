import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';

export default function DetalheServicoScreen({ route }) {
  const { nome, descricao, escopo, icone } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {icone && <View style={styles.iconWrapper}>{icone}</View>}

        <Text style={styles.title}>{nome}</Text>

        <Text style={styles.description}>{descricao}</Text>

        <View style={styles.escopo}>
          {escopo?.map((item, index) => (
            <Text key={index} style={styles.escopoItem}>• {item}</Text>
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NovoChamado', { servico: nome })}
        >
          <Text style={styles.buttonText}>Abrir Chamado</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderColor: theme.colors.secondary,
    borderWidth: 2,
    borderRadius: 16,
    padding: 24,
    width: '100%',
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: theme.fonts.size.large,
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: theme.fonts.size.medium,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  escopo: {
    marginBottom: 24,
  },
  escopoItem: {
    color: theme.colors.textPrimary,
    fontSize: theme.fonts.size.medium,
    marginBottom: 4,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: theme.fonts.size.medium,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
