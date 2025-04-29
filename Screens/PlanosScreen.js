import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';

const planos = [
  {
    nome: 'Plano Avulso',
    descricao: 'Contrate serviços sob demanda sem mensalidade. Ideal para manutenções pontuais e chamados específicos.',
  },
  {
    nome: 'Plano Mensal',
    descricao: 'Plano mensal com cobertura para chamados recorrentes, manutenção preventiva programada e suporte técnico contínuo.',
  },
  {
    nome: 'Plano Anual',
    descricao: 'Assinatura anual com vantagens exclusivas: preço reduzido, prioridade nos atendimentos e gestão completa da infraestrutura técnica.',
  },
];

export default function PlanosScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.planTitle}>{item.nome}</Text>
      <Text style={styles.planDescription}>{item.descricao}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ConfirmacaoAssinatura')}
      >
        <Text style={styles.buttonText}>Assinar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos Planos</Text>
      <FlatList
        data={planos}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
        contentContainerStyle={styles.grid}
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
  title: {
    fontSize: theme.fonts.size.large,
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  planTitle: {
    fontSize: theme.fonts.size.medium,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    marginBottom: 12,
  },
  planDescription: {
    fontSize: theme.fonts.size.small,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: theme.fonts.size.medium,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
