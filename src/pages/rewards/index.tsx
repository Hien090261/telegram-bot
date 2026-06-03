import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

const RewardsPage: React.FC = () => {
  return (
    <View className={styles.container}>
      <Text className={styles.icon}>🎁</Text>
      <Text className={styles.title}>Phần thưởng</Text>
      <Text className={styles.desc}>Lịch sử phần thưởng sẽ hiển thị ở đây!</Text>
    </View>
  );
};

export default RewardsPage;