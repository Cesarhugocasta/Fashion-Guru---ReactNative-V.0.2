import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface User {
  id: number;
  username: string;
  avatar: any;
}

interface ChatListPageProps {
  onNavigateToChat: (user: User) => void;
}

const ChatListPage: React.FC<ChatListPageProps> = ({ onNavigateToChat }) => {
  const users: User[] = [
    { id: 1, username: 'fashionista01', avatar: require('../img/user1.jpg') },
    { id: 2, username: 'styleguru', avatar: require('../img/user2.jpg') },
    { id: 3, username: 'trendygal', avatar: require('../img/user3.jpg') },
    { id: 4, username: 'urbanchic', avatar: require('../img/user4.jpg') },
    { id: 5, username: 'classycouture', avatar: require('../img/user5.jpg') },
    { id: 6, username: 'bohostyle', avatar: require('../img/user6.jpg') },
    { id: 7, username: 'chicstreet', avatar: require('../img/user7.jpg') },
    { id: 8, username: 'elegantdiva', avatar: require('../img/user8.jpg') },
    { id: 9, username: 'modernminimal', avatar: require('../img/user9.jpg') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Chats</Text>
      {users.map(user => (
        <TouchableOpacity key={user.id} style={styles.user} onPress={() => onNavigateToChat(user)}>
          <Image source={user.avatar} style={styles.avatar} />
          <Text style={styles.username}>{user.username}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f0a500',
    textAlign: 'center',
    marginBottom: 20,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    color: '#333',
  },
});

export default ChatListPage;
