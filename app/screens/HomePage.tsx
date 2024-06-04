import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const HomePage: React.FC = () => {
  return (
    <ImageBackground
      source={require('../img/background.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={require('../img/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Bienvenido a FashionGuru</Text>
          <Text style={styles.subtitle}>Tu Asesor de Moda Personal</Text>
          <Text style={styles.description}>
            FashionGuru es tu compañero ideal para todas tus necesidades de moda. Conéctate con asesores de moda en tiempo real, recibe recomendaciones personalizadas y disfruta de una experiencia de compra única.
          </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.textBox}>
            <Text style={styles.sectionTitle}>¿Qué Ofrecemos?</Text>
            <Text style={styles.sectionDescription}>
              Descubre nuestra gama de servicios y cómo podemos ayudarte a mejorar tu estilo.
            </Text>
          </View>
          <Image
            source={require('../img/image1.jpg')}
            style={styles.image}
          />
          <View style={styles.textBox}>
            <Text style={styles.serviceTitle}>Asesoramiento Personalizado</Text>
            <Text style={styles.serviceDescription}>
              Conéctate con asesores de moda en tiempo real para recibir recomendaciones personalizadas basadas en tus preferencias y necesidades.
            </Text>
          </View>
          <Image
            source={require('../img/image2.jpg')}
            style={styles.image}
          />
          <View style={styles.textBox}>
            <Text style={styles.serviceTitle}>Prueba Virtual</Text>
            <Text style={styles.serviceDescription}>
              Utiliza nuestra tecnología de realidad aumentada para "probar" prendas antes de comprarlas y ver cómo se verían en ti.
            </Text>
          </View>
          <Image
            source={require('../img/image3.jpg')}
            style={styles.image}
          />
          <View style={styles.textBox}>
            <Text style={styles.serviceTitle}>Compra Directa</Text>
            <Text style={styles.serviceDescription}>
              Compra directamente los productos recomendados por nuestros asesores a través de la aplicación para una experiencia de compra integral.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.textBox}>
            <Text style={styles.sectionTitle}>Únete a la Comunidad</Text>
            <Text style={styles.sectionDescription}>
              Comparte tus looks, recibe comentarios y sigue a otros amantes de la moda en nuestra comunidad en línea.
            </Text>
          </View>
          <Image
            source={require('../img/image4.jpg')}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 16,
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#f0a500',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    width: '100%',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f0a500',
    textShadowColor: '#f0a500',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f0a500',
    textShadowColor: '#f0a500',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffffff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0a500',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
    shadowColor: '#f0a500',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f0a500',
    marginBottom: 10,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  textBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default HomePage;
