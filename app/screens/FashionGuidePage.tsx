import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native';

const FashionGuidePage: React.FC = () => {
  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Guía de Modas</Text>
        <View style={styles.post}>
          <View style={styles.header}>
            <Image source={require('../img/advisor1.jpg')} style={styles.avatar} />
            <Text style={styles.username}>Ana López</Text>
          </View>
          <Text style={styles.postTitle}>Tendencias Urbanas</Text>
          <Image source={require('../img/fashion1.jpg')} style={styles.image} />
          <Text style={styles.content}>Explora las últimas tendencias urbanas para esta temporada y descubre cómo combinarlas con tu estilo personal.</Text>
        </View>
        <View style={styles.post}>
          <View style={styles.header}>
            <Image source={require('../img/advisor2.jpg')} style={styles.avatar} />
            <Text style={styles.username}>Carlos Pérez</Text>
          </View>
          <Text style={styles.postTitle}>El Traje Perfecto</Text>
          <Image source={require('../img/fashion2.jpg')} style={styles.image} />
          <Text style={styles.content}>Consejos para elegir el traje perfecto que se ajuste a cualquier ocasión, asegurando elegancia y confort.</Text>
        </View>
        <View style={styles.post}>
          <View style={styles.header}>
            <Image source={require('../img/advisor3.jpg')} style={styles.avatar} />
            <Text style={styles.username}>Laura García</Text>
          </View>
          <Text style={styles.postTitle}>Looks Casual</Text>
          <Image source={require('../img/fashion3.jpg')} style={styles.image} />
          <Text style={styles.content}>Ideas y combinaciones para un look casual que te hará destacar en cualquier situación informal.</Text>
        </View>
        {/* Agrega más publicaciones según sea necesario */}
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
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f0a500',
    textAlign: 'center',
    marginBottom: 20,
  },
  post: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  postTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#666',
  },
});

export default FashionGuidePage;
