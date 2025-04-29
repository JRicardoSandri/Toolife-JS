import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import theme from '../theme';

export default function NovoChamadoScreen() {
  const [servico, setServico] = useState('');
  const [descricao, setDescricao] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [urgencia, setUrgencia] = useState('');

  const handleEnviar = () => {
    if (!servico || !descricao || !localizacao || !urgencia) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    Alert.alert('Simulação', 'Chamado enviado com sucesso!');

    // Limpar os campos após envio
    setServico('');
    setDescricao('');
    setLocalizacao('');
    setUrgencia('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Chamado</Text>

      <TextInput
        style={styles.input}
        placeholder="Serviço"
        placeholderTextColor={theme.colors.textSecondary}
        value={servico}
        onChangeText={setServico}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva o problema ou solicitação"
        placeholderTextColor={theme.colors.textSecondary}
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />

      <TextInput
        style={styles.input}
        placeholder="Localização / Setor"
        placeholderTextColor={theme.colors.textSecondary}
        value={localizacao}
        onChangeText={setLocalizacao}
      />

      <TextInput
        style={styles.input}
        placeholder="Urgência (Baixa, Média, Alta)"
        placeholderTextColor={theme.colors.textSecondary}
        value={urgencia}
        onChangeText={setUrgencia}
      />

      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar Chamado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: theme.fonts.size.large,
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.secondary,
    borderRadius: 10,
    padding: 12,
    color: theme.colors.textPrimary,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: theme.fonts.size.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


