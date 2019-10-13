import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header, ImageCard} from './src/components/uikit';
import {url} from './constants';



export default class App extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({data});
    } catch (e) {
      throw e;
    }
  };

  render() {
    const {container} = styles;
    const {title, data} = this.state;


    return (
      <View>
        <Header title={this.state.title} />
        <ScrollView>
          <View style={container}>
            {data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150,
  },
});
