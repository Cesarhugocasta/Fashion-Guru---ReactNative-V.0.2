import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native';

interface Post {
  id: number;
  username: string;
  avatar: any;
  image: any;
  description: string;
  likes: number;
  comments: Comment[];
}

interface Comment {
  username: string;
  avatar: any;
  text: string;
}

const ImageCatalogPage: React.FC = () => {
  const initialPosts: Post[] = [
    {
      id: 1,
      username: 'fashionista01',
      avatar: require('../img/user1.jpg'),
      image: require('../img/item1.jpg'),
      description: 'Un día soleado en la playa con mi nuevo vestido favorito.',
      likes: 0,
      comments: [
        { username: 'styleguru', avatar: require('../img/user2.jpg'), text: '¡Me encanta tu vestido!' },
        { username: 'urbanchic', avatar: require('../img/user4.jpg'), text: 'Se ve increíble.' }
      ]
    },
    {
      id: 2,
      username: 'styleguru',
      avatar: require('../img/user2.jpg'),
      image: require('../img/item2.jpg'),
      description: 'Explorando la ciudad con un look casual y cómodo.',
      likes: 0,
      comments: []
    },
    {
      id: 3,
      username: 'trendygal',
      avatar: require('../img/user3.jpg'),
      image: require('../img/item3.jpg'),
      description: 'Me encanta este conjunto para una noche especial.',
      likes: 0,
      comments: []
    },
    {
      id: 4,
      username: 'urbanchic',
      avatar: require('../img/user4.jpg'),
      image: require('../img/item4.jpg'),
      description: 'Estilo urbano para un día en el parque.',
      likes: 0,
      comments: []
    },
    {
      id: 5,
      username: 'classycouture',
      avatar: require('../img/user5.jpg'),
      image: require('../img/item5.jpg'),
      description: 'Perfecto para una ocasión formal.',
      likes: 0,
      comments: []
    },
    {
      id: 6,
      username: 'bohostyle',
      avatar: require('../img/user6.jpg'),
      image: require('../img/item6.jpg'),
      description: 'Look bohemio para una tarde relajada.',
      likes: 0,
      comments: []
    },
    {
      id: 7,
      username: 'chicstreet',
      avatar: require('../img/user7.jpg'),
      image: require('../img/item7.jpg'),
      description: 'Moda de calle con un toque de elegancia.',
      likes: 0,
      comments: []
    },
    {
      id: 8,
      username: 'elegantdiva',
      avatar: require('../img/user8.jpg'),
      image: require('../img/item8.jpg'),
      description: 'Vestido elegante para una noche de gala.',
      likes: 0,
      comments: []
    },
    {
      id: 9,
      username: 'modernminimal',
      avatar: require('../img/user9.jpg'),
      image: require('../img/item9.jpg'),
      description: 'Estilo minimalista para un look moderno.',
      likes: 0,
      comments: []
    }
  ];

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleAddComment = (postId: number) => {
    const comment = newComment[postId];
    if (comment) {
      const newCommentObj: Comment = { username: 'Juan123', avatar: require('../img/perfil.jpg'), text: comment };
      setPosts(posts.map(post => post.id === postId ? { ...post, comments: [...post.comments, newCommentObj] } : post));
      setNewComment({ ...newComment, [postId]: '' });
    }
  };

  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>👑 Comunidad Fashion-Guru 👑</Text>
        <View style={styles.feed}>
          {posts.map(post => (
            <View key={post.id} style={styles.post}>
              <View style={styles.postHeader}>
                <Image source={post.avatar} style={styles.avatar} />
                <Text style={styles.username}>{post.username}</Text>
              </View>
              <Image source={post.image} style={styles.image} />
              <Text style={styles.description}>{post.description}</Text>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => handleLike(post.id)}>
                  <Text style={styles.actionText}>Like ({post.likes})</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.commentsSection}>
                <Text style={styles.commentsTitle}>Comentarios</Text>
                {post.comments.map((comment, index) => (
                  <View key={index} style={styles.commentContainer}>
                    <Image source={comment.avatar} style={styles.commentAvatar} />
                    <Text style={styles.commentUsername}>{comment.username}</Text>
                    <Text style={styles.comment}>{comment.text}</Text>
                  </View>
                ))}
                <TextInput
                  style={styles.input}
                  value={newComment[post.id] || ''}
                  onChangeText={(text) => setNewComment({ ...newComment, [post.id]: text })}
                  placeholder="Añadir un comentario..."
                  placeholderTextColor="#999"
                />
                <Button title="Comentar" onPress={() => handleAddComment(post.id)} />
              </View>
            </View>
          ))}
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
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    color: '#f0a500',
    fontWeight: 'bold',
  },
  commentsSection: {
    marginTop: 10,
  },
  commentsTitle: {
    fontSize: 16,
    color: '#f0a500',
    marginBottom: 5,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  commentAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  commentUsername: {
    fontSize: 14,
    color: '#0000ff', // Blue color for the username
    fontWeight: 'bold',
    marginRight: 5,
  },
  comment: {
    fontSize: 14,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#000',
    backgroundColor: '#fff',
  },
});

export default ImageCatalogPage;
