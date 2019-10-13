import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, ImageCard} from './src/components/uikit';
import {url} from './constants';


export default class App extends Component {
  state = {
    title: 'STAR GAME',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      this.setState({data});
    } catch (e) {
      throw e;
    }
  };

  render() {
    console.log('state', this.state);


    return (
      <View>
        <Header title={this.state.title} />
        <Header title="one" />
        <Header title={this.state.title} />
        <Header title="67" />
        <ImageCard/>
      </View>
    );
  }
}
