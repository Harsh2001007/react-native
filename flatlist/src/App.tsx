import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

const CurrencyList = () => {
  const currencyData = [
    {
      name: 'DOLLAR',
      value: 0.012271428,
      flag: '🇺🇸',
      symbol: '$',
    },
    {
      name: 'EURO',
      value: 0.01125809,
      flag: '🇪🇺',
      symbol: '€',
    },
    {
      name: 'POUND',
      value: 0.0099194378,
      flag: '🇬🇧',
      symbol: '£',
    },
    {
      name: 'RUBEL',
      value: 0.85040469,
      flag: '🇷🇺',
      symbol: '₽',
    },
    {
      name: 'AUS DOLLAR',
      value: 0.01732574,
      flag: '🇦🇺',
      symbol: 'A$',
    },
    {
      name: 'CAN DOLLAR',
      value: 0.016457908,
      flag: '🇨🇦',
      symbol: 'C$',
    },
    {
      name: 'YEN',
      value: 1.5909089,
      flag: '🇯🇵',
      symbol: '¥',
    },
    {
      name: 'DINAR',
      value: 0.0037446993,
      flag: '🇰🇼',
      symbol: 'KD',
    },
    {
      name: 'BITCOIN',
      value: 0.000000543544886,
      flag: '🎰',
      symbol: '₿',
    },
  ];

  const renderCurrencyItem = ({item}) => (
    <View style={styles.currencyItem}>
      <Text style={styles.currencyName}>{item.name}</Text>
      <Text style={styles.currencyValue}>{item.value}</Text>
      <Text style={styles.currencySymbol}>{item.symbol}</Text>
      <Text style={styles.currencyFlag}>{item.flag}</Text>
    </View>
  );

  return (
    <FlatList
      data={currencyData}
      keyExtractor={item => item.symbol}
      renderItem={renderCurrencyItem}
    />
  );
};

const styles = StyleSheet.create({
  currencyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  currencyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currencyValue: {
    fontSize: 16,
  },
  currencySymbol: {
    fontSize: 16,
    marginLeft: 5,
  },
  currencyFlag: {
    fontSize: 20,
  },
});

export default CurrencyList;
