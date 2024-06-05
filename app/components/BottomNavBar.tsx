import React from 'react';
import { View, Pressable, StyleSheet, Image } from 'react-native';

interface BottomNavBarProps {
  onNavigate: (screen: string) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate }) => {
  return (
    <View style={styles.navBar}>
      <Pressable onPress={() => onNavigate('community')}>
        <Image source={require('../img/catalog.jpg')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => onNavigate('chatList')}>
        <Image source={require('../img/chat.jpg')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => onNavigate('advisors')}>
        <Image source={require('../img/advisors.jpg')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => onNavigate('fashionGuide')}>
        <Image source={require('../img/fashionGuide.jpg')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => onNavigate('profile')}>
        <Image source={require('../img/profile.jpg')} style={styles.icon} />
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
