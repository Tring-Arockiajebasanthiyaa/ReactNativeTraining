import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Modal,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, Post } from '../store/postsSlice';
import { RootState, AppDispatch } from '../store';
import {
  Text,
  Button,
  Card,
  Header,
  ScreenContainer,
  Spacer,
} from '../components';

const PostsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading } = useSelector(
    (state: RootState) => state.posts
  );

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <Card
      title={item.title}
      description={item.body}
      onPress={() => {
        setSelectedPost(item);
        setModalVisible(true);
      }}
      containerStyle={styles.card}
    />
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenContainer scrollable>
        <Header 
          title="Posts"
          subtitle="Browse all posts"
        />

        <Spacer height={12} />

        {loading && posts.length === 0 ? (
          <View style={styles.centerContent}>
            <Text variant="body" color="#999999">
              Loading posts...
            </Text>
          </View>
        ) : (
          <FlatList
            data={posts}
            horizontal
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        )}

        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text variant="h2" weight="700">
                  {selectedPost?.title}
                </Text>
              </View>

              <Spacer height={16} />

              <Text variant="body" style={styles.modalBody}>
                {selectedPost?.body}
              </Text>

              <Spacer height={24} />

              <Button
                title="Close"
                onPress={() => setModalVisible(false)}
                variant="primary"
                size="large"
              />
            </View>
          </View>
        </Modal>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 280,
    marginRight: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: '60%',
  },
  modalHeader: {
    marginBottom: 16,
  },
  modalBody: {
    lineHeight: 24,
  },
});
