import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const ProfilePage: React.FC = () => {
  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        <Image source={require('../img/perfil.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>Juan Pérez</Text>
        <Text style={styles.info}>Correo: juan.perez@example.com</Text>
        <Text style={styles.info}>Teléfono: +52 123 456 7890</Text>
        <Text style={styles.info}>Dirección: Av. Siempre Viva 123, Springfield</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0a500',
    marginBottom: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});

export default ProfilePage;
