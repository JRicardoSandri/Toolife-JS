import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

export default function ChamadosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chamados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.fonts.size.large,
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
  },
});
