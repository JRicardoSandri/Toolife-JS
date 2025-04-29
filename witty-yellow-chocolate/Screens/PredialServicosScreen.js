import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';

const servicos = [
  { nome: 'Elétrica', icone: 'zap', descricao: 'Manutenção de sistemas elétricos de baixa e média tensão, assegurando funcionamento contínuo de áreas críticas.' },
  { nome: 'Hidráulica', icone: 'droplet', descricao: 'Reparo e inspeção de redes hidráulicas, combatendo riscos de contaminação e vazamentos em ambientes hospitalares.' },
  { nome: 'Ar Condicionado', icone: 'wind', descricao: 'Manutenção de sistemas HVAC hospitalares, priorizando qualidade microbiológica do ar e eficiência energética.' },
  { nome: 'Sistema de Incêndio', icone: 'shield', descricao: 'Inspeção, testes e manutenção corretiva de sistemas de prevenção e combate a incêndios, com suporte a áreas de internação.' },
  { nome: 'Obras e Reformas', icone: 'tool', descricao: 'Execução de obras civis e reformas técnicas, respeitando normas hospitalares e minimizando impacto assistencial.' },
 
  { nome: 'Controle de Pragas', icone: 'alert-triangle', descricao: 'Serviço especializado de controle integrado de pragas, visando proteção sanitária em ambientes críticos.' },
];

export default function PredialServicosScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('DetalheServico', {
          nome: item.nome,
          descricao: item.descricao,
        })
      }
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
      <Text style={styles.title}>Engenharia Predial</Text>
      <FlatList
        data={servicos}
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 24,
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
