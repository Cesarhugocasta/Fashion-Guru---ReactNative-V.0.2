import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native';

const CommunityPage: React.FC = () => {
  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Comunidad</Text>
        <View style={styles.feed}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user1.jpg')} style={styles.avatar} />
              <Text style={styles.username}>fashionista01</Text>
            </View>
            <Image source={require('../img/item1.jpg')} style={styles.image} />
            <Text style={styles.description}>Un día soleado en la playa con mi nuevo vestido favorito.</Text>
          </View>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user2.jpg')} style={styles.avatar} />
              <Text style={styles.username}>styleguru</Text>
            </View>
            <Image source={require('../img/item2.jpg')} style={styles.image} />
            <Text style={styles.description}>Explorando la ciudad con un look casual y cómodo.</Text>
          </View>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user3.jpg')} style={styles.avatar} />
              <Text style={styles.username}>trendygal</Text>
            </View>
            <Image source={require('../img/item3.jpg')} style={styles.image} />
            <Text style={styles.description}>Me encanta este conjunto para una noche especial.</Text>
          </View>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user4.jpg')} style={styles.avatar} />
              <Text style={styles.username}>urbanchic</Text>
            </View>
            <Image source={require('../img/item4.jpg')} style={styles.image} />
            <Text style={styles.description}>Estilo urbano para un día en el parque.</Text>
          </View>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user5.jpg')} style={styles.avatar} />
              <Text style={styles.username}>classycouture</Text>
            </View>
            <Image source={require('../img/item5.jpg')} style={styles.image} />
            <Text style={styles.description}>Perfecto para una ocasión formal.</Text>
          </View>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user6.jpg')} style={styles.avatar} />
              <Text style={styles.username}>bohostyle</Text>
            </View>
            <Image source={require('../img/item6.jpg')} style={styles.image} />
            <Text style={styles.description}>Look bohemio para una tarde relajada.</Text>
          </View>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user7.jpg')} style={styles.avatar} />
              <Text style={styles.username}>chicstreet</Text>
            </View>
            <Image source={require('../img/item7.jpg')} style={styles.image} />
            <Text style={styles.description}>Moda de calle con un toque de elegancia.</Text>
          </View>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user8.jpg')} style={styles.avatar} />
              <Text style={styles.username}>elegantdiva</Text>
            </View>
            <Image source={require('../img/item8.jpg')} style={styles.image} />
            <Text style={styles.description}>Vestido elegante para una noche de gala.</Text>
          </View>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={require('../img/user9.jpg')} style={styles.avatar} />
              <Text style={styles.username}>modernminimal</Text>
            </View>
            <Image source={require('../img/item9.jpg')} style={styles.image} />
            <Text style={styles.description}>Estilo minimalista para un look moderno.</Text>
          </View>
        </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f0a500',
    textAlign: 'center',
    marginBottom: 20,
  },
  feed: {
    width: '100%',
  },
  post: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    color: '#f0a500',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default CommunityPage;
