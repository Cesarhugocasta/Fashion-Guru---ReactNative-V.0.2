import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface HeaderProps {
  onNavigate: (screen: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        FashionGuru
      </Text>
      <Pressable style={styles.button} onPress={() => onNavigate('home')}>
        <Text style={styles.buttonText}>About</Text>
      </Pressable>
    </View>
  );
};

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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    borderColor: '#f0a500',
    borderWidth: 2,
    alignItems: 'center',
    shadowColor: '#f0a500',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#f0a500',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: '#f0a500',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

export default Header;
