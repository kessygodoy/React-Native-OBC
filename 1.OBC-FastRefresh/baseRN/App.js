/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
} from 'react-native';

function Item(props){
  return(
    <View style={{
      backgroundColor: props.bgColor,
      borderRadius: 16,
      marginTop: 16,
      marginRight: 16,
      padding: 16,
      width: '100%',
    }}>
      <Text style={{ fontWeight: '700' }}>{props.text}</Text>
    </View>
  )
}


function App() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Minha jornada no React Native</Text>
      <View style={styles.items}>
        <Item text="Fundamentos do React Native" bgColor="#00ff9f"/>
        <Item text="Expo e xpo CLI" bgColor="#00ff9f"/>
        <Item text="Estilização com StyleSheet" bgColor="#00ff9f"/>
        <Item text="Navegação" bgColor="#f64348"/>
        <Item text="ScrollView" bgColor="#f64348"/>
        <Item text="Periféricos" bgColor="#f64348"/>
        <Item text="Styled Components" bgColor="#f64348"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 80,

  },
  sectionTitle: {
    borderBottomColor: '#121212',
    borderBottomWidth: 1,
    color: "#121212",
    fontSize: 24,
    paddingBottom: 8,
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
