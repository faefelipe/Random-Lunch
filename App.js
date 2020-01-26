import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';


const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];


function Item({ title }) {
  
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>      
      <Button
        onPress={this._onPressButton}
        title="Press Me"
      />
    </View>  
  );
}

export default class App extends Component {  
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}{Button}</Text>
          )}
        />
      </SafeAreaView>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    margin: 20
  },
});
