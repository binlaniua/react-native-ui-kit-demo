import React, {StyleSheet, View, Text} from 'react-native';
import {
  UIScene,
  UITabBar
} from 'ui-kit';

import Card from '../card';

class TarBar extends React.Component {

  static defaultProps = {};

  state = {
    select: 1
  };

  componentDidMount () {
  }

  render () {
    return (
      <UIScene
        header="TabBar"
        hasBack={true}>

        <UITabBar
          style={{}}
          tintColor="#3d85cc"
          barTintColor="#fff">
          <UITabBar.Item
            title="1"
            icon={require('./image/home_grey.png')}
            selectedIcon={require('./image/home_blue.png')}
            selected={this.state.select == 1}
            onPress={() => this.setState({select: 1})}>
            <Text>111111</Text>
          </UITabBar.Item>
          <UITabBar.Item
            title="2"
            icon={require('./image/home_grey.png')}
            selectedIcon={require('./image/home_blue.png')}
            selected={this.state.select == 2}
            onPress={() => this.setState({select: 2})}>
            <Text>2222</Text>
          </UITabBar.Item>
        </UITabBar>
      </UIScene>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  }
});

export default TarBar;