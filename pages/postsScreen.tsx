import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setSelectedPost(item);
        setModalVisible(true);
      }}
    >
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Posts</Text>

      <FlatList
        data={posts}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedPost?.title}
            </Text>

            <Text style={styles.modalBody}>
              {selectedPost?.body}
            </Text>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    width: 220,
    marginRight: 12,
    padding: 12,
    borderRadius: 10,
    height: 120,
    backgroundColor: '#f2f2f2',
    borderBlockColor: '#050000',
    shadowColor: '#000', //iOS shadow
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.15, 
    shadowRadius: 10,    
    elevation: 5, //android shadow
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  modalBody: {
    fontSize: 14,
    marginBottom: 20,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
    fontWeight: '600',
  },
});
