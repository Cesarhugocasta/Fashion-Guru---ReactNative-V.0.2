import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground, Pressable } from 'react-native';

interface FashionAdvisorsPageProps {
  onNavigate: (page: string) => void;
}

const FashionAdvisorsPage: React.FC<FashionAdvisorsPageProps> = ({ onNavigate }) => {
  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Asesores de Moda</Text>
        <Pressable onPress={() => onNavigate('AnaProfile')}>
          <View style={styles.advisor}>
            <Image source={require('../img/advisor1.jpg')} style={styles.image} />
            <Text style={styles.name}>Ana López</Text>
            <Text style={styles.details}>Especialista en moda urbana. 5 años de experiencia.</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onNavigate('CarlosProfile')}>
          <View style={styles.advisor}>
            <Image source={require('../img/advisor2.jpg')} style={styles.image} />
            <Text style={styles.name}>Carlos Pérez</Text>
            <Text style={styles.details}>Asesor de moda formal. 8 años de experiencia.</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onNavigate('LauraProfile')}>
          <View style={styles.advisor}>
            <Image source={require('../img/advisor3.jpg')} style={styles.image} />
            <Text style={styles.name}>Laura García</Text>
            <Text style={styles.details}>Experta en moda casual. 6 años de experiencia.</Text>
          </View>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0a500',
    marginBottom: 16,
  },
  advisor: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  details: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});

export default FashionAdvisorsPage;
