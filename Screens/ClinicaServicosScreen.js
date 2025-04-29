import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';

const servicos = [
  { nome: 'Manutenção', icone: 'tool', descricao: 'Manutenção preventiva e corretiva de equipamentos médicos, garantindo segurança e continuidade operacional.' },
  { nome: 'Calibração', icone: 'sliders', descricao: 'Calibração certificada de equipamentos críticos, assegurando precisão e conformidade com normas técnicas.' },
  { nome: 'Inventário', icone: 'clipboard', descricao: 'Controle patrimonial de dispositivos médicos, com rastreabilidade, atualização de registros e etiquetagem.' },
 
  { nome: 'Instalações', icone: 'cpu', descricao: 'Instalação e comissionamento de novos equipamentos, adequados aos requisitos estruturais e elétricos hospitalares.' },
  { nome: 'Tecnologia', icone: 'monitor', descricao: 'Consultoria em inovação e atualização tecnológica, integrando novos dispositivos às práticas clínicas.' },
  { nome: 'Inspeções', icone: 'check-circle', descricao: 'Inspeções periódicas de conformidade elétrica, mecânica e funcional em equipamentos de suporte ao cuidado.' },
];

export default function ClinicaServicosScreen() {
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
      <Text style={styles.title}>Engenharia Clínica</Text>
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
