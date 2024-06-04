import React from 'react';
import { View, Pressable, StyleSheet, Image } from 'react-native';

interface BottomNavBarProps {
  onNavigate: (screen: string) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate }) => {
  return (
    <View style={styles.navBar}>
      <Pressable onPress={() => onNavigate('home')}>
        <Image source={require('../img/home.png')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => onNavigate('catalog')}>
        <Image source={require('../img/catalog.png')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => onNavigate('advisors')}>
        <Image source={require('../img/advisors.png')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => onNavigate('profile')}>
        <Image source={require('../img/profile.png')} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    padding: 10,
  },
  icon: {
    width: 85,
    height: 85,
  },
});

export default BottomNavBar;
