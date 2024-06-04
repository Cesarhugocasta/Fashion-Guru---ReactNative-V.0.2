import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        FashionGuru
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    shadowColor: '#f0a500',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0a500',
    textShadowColor: '#f0a500',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    fontFamily: 'Arial',
  },
});

export default Header;
