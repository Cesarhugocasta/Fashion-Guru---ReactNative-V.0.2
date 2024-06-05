import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './app/screens/Header';
import HomePage from './app/screens/HomePage';
import ImageCatalogPage from './app/screens/ImageCatalogPage';
import FashionAdvisorsPage from './app/screens/FashionAdvisorsPage';
import ProfilePage from './app/screens/ProfilePage';
import AnaProfile from './app/screens/AnaProfile';
import CarlosProfile from './app/screens/CarlosProfile';
import LauraProfile from './app/screens/LauraProfile';
import BottomNavBar from './app/components/BottomNavBar';
import CommunityPage from './app/screens/ImageCatalogPage';
import FashionGuidePage from './app/screens/FashionGuidePage';
import ChatListPage from './app/screens/ChatListPage';
import ChatPage from './app/screens/ChatPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('community');
  const [selectedUser, setSelectedUser] = useState<{ id: number; username: string; avatar: any } | null>(null);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
  };

  const navigateToChat = (user: { id: number; username: string; avatar: any }) => {
    setSelectedUser(user);
    setCurrentPage('chat');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onNavigate={navigateToPage} />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'community' && <CommunityPage />}
      {currentPage === 'chatList' && <ChatListPage onNavigateToChat={navigateToChat} />}
      {currentPage === 'chat' && selectedUser && <ChatPage user={selectedUser} />}
      {currentPage === 'catalog' && <ImageCatalogPage />}
      {currentPage === 'advisors' && <FashionAdvisorsPage onNavigate={navigateToPage} />}
      {currentPage === 'fashionGuide' && <FashionGuidePage />}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'AnaProfile' && <AnaProfile />}
      {currentPage === 'CarlosProfile' && <CarlosProfile />}
      {currentPage === 'LauraProfile' && <LauraProfile />}
      <BottomNavBar onNavigate={navigateToPage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
