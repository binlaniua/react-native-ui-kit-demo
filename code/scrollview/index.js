import React, {StyleSheet, View, Text} from 'react-native';
import {
  UIScene,
  UIKit,
  UIScrollView,
  UIPullRefreshScrollView,
} from 'ui-kit';

import Card from '../card';

class ScrollView extends React.Component {

  static defaultProps = {};

  state = {
    t: '',
  };

  componentDidMount () {
  }

  render () {
    return (
      <UIScene
        header="ScrollView"
        hasBack={true}
        style={styles.container}>
        <Card title="Advance ScrollView">
          <Text>state => {this.state.t}</Text>
          <UIScrollView
            onPush={() => this.setState({t: 'isPushing'})}
            onPull={() => this.setState({t: 'isPulling'})}
            style={{width: UIKit.Width, height: 200}}>
            <View style={{width: UIKit.Width, height: 150, backgroundColor: 'gray'}}></View>
            <View style={{width: UIKit.Width, height: 150, backgroundColor: 'blue'}}></View>
          </UIScrollView>
        </Card>

        <Card title="Pull Refresh ScrollView">
          <UIPullRefreshScrollView
            onRefresh={() => {}}
            style={{width: UIKit.Width, height: 200}}>
            <View style={{width: UIKit.Width, height: 300, backgroundColor: 'gray'}}></View>
          </UIPullRefreshScrollView>
        </Card>
      </UIScene>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  }
});

export default ScrollView;