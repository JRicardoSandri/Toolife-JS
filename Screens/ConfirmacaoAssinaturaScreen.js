import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';

export default function ConfirmacaoAssinaturaScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Feather name="check-circle" size={80} color={theme.colors.secondary} />
      <Text style={styles.title}>Assinatura Confirmada!</Text>
      <Text style={styles.subtitle}>
        Seu plano foi contratado com sucesso.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Engenharia')}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: theme.fonts.size.large,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.bold,
    marginTop: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: theme.fonts.size.medium,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: theme.fonts.size.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
