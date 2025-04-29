import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica de autenticação real se quiser
    navigation.navigate('Engenharia');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ToolLife</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={theme.colors.textSecondary}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={theme.colors.textSecondary}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.fonts.size.large,
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: theme.colors.secondary,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    color: theme.colors.textPrimary,
    marginBottom: 20,
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
