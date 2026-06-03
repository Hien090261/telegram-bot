import React, { useState, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  const [coins, setCoins] = useState(100);
  const [level, setLevel] = useState(1);

  // Load dữ liệu từ storage
  useEffect(() => {
    const savedCoins = Taro.getStorageSync('coins');
    const savedLevel = Taro.getStorageSync('level');
    if (savedCoins !== '') setCoins(savedCoins || 100);
    if (savedLevel !== '') setLevel(savedLevel || 1);
  }, []);

  const levelUpCost = level * 15;

  const handleWatchAd = () => {
    // Mở AdsGram
    const adsgramUrl = 'https://adsgram.io/iframe/YOUR_ADSGRAM_ID';
    // Giả định xem quảng cáo xong nhận được 10 coin
    const newCoins = coins + 10;
    setCoins(newCoins);
    Taro.setStorageSync('coins', newCoins);
    Taro.showToast({
      title: 'Nhận được 10 xu!',
      icon: 'success',
      duration: 2000
    });
  };

  const handleLevelUp = () => {
    if (coins >= levelUpCost) {
      const newCoins = coins - levelUpCost;
      const newLevel = level + 1;
      setCoins(newCoins);
      setLevel(newLevel);
      Taro.setStorageSync('coins', newCoins);
      Taro.setStorageSync('level', newLevel);
      Taro.showToast({
        title: 'Level up!',
        icon: 'success',
        duration: 2000
      });
    } else {
      Taro.showToast({
        title: 'Không đủ xu!',
        icon: 'none',
        duration: 2000
      });
    }
  };

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>⛏️ Khai Thác Vàng</Text>
        <Text className={styles.subtitle}>Xem quảng cáo nhận xu!</Text>
      </View>

      <View className={styles.statsCard}>
        <Text className={styles.coinsAmount}>{coins.toLocaleString()}</Text>
        <Text className={styles.coinsLabel}>💎 Xu của bạn</Text>
      </View>

      <View className={styles.levelCard}>
        <Text className={styles.levelTitle}>👷 Cấp độ thợ mỏ</Text>
        <Text className={styles.levelValue}>Lv. {level}</Text>
        <Text className={styles.levelUpCost}>Chi phí nâng cấp: {levelUpCost} xu</Text>
      </View>

      <Button className={styles.watchAdButton} onClick={handleWatchAd}>
        <Text className={styles.buttonIcon}>🎬</Text>
        Xem quảng cáo nhận 10 xu
      </Button>
    </View>
  );
};

export default HomePage;