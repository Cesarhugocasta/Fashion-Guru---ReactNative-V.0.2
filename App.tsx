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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'catalog' && <ImageCatalogPage />}
      {currentPage === 'advisors' && <FashionAdvisorsPage onNavigate={navigateToPage} />}
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
