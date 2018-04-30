import React from 'react';
import { StyleSheet, Text, View,FlatList,Alert,TouchableHighlight } from 'react-native';

const list = [
  {
      name: 'Amy ',
      subtitle: 'Vice President'
  },
  {
      name: 'Chris Jackson ',
      subtitle: 'Vice Chairman'
  },
  {
      name: 'Lukas ',
      subtitle: 'Vice Toilet'
  }
]

export default class App extends React.Component {


  OnPress =(key)=>{
    Alert.alert(key);
  }

  render() {
    return (
      <View style={styles.container}>
         <FlatList 
            data={list}
            renderItem={({...item})=>
            <TouchableHighlight onPress={this.OnPress(item.name)}>
                  <View style={{flexDirection: 'row'}}>
                        <Text style={{margin:10}}>{item.name} </Text>
                        <Text style={{margin:10}}>{item.subtitle} </Text>
                  </View>              
            </TouchableHighlight>          
          }
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
