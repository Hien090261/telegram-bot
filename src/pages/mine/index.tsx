import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

const MinePage: React.FC = () => {
  return (
    <View className={styles.container}>
      <Text className={styles.icon}>👤</Text>
      <Text className={styles.title}>Cá nhân</Text>
      <Text className={styles.desc}>Thông tin cá nhân sẽ hiển thị ở đây!</Text>
    </View>
  );
};

export default MinePage;