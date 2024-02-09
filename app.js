import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calculator from './Componentes/Calculadora'; 

const LibraryApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CALCULADORA</Text>
      </View>
      <View style={styles.content}>
        {}
        
        {/* aqui va el desarrollo */}
        <Calculator />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 EDILERTO. Todos los derechos reservados.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentText: {
    textAlign: 'center',
    fontSize: 18,
  },
  footer: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
});

export default LibraryApp;
