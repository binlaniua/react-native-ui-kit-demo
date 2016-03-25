import React, {StyleSheet, View} from 'react-native';
import {
  UIApp,
  UIRoute,
} from 'ui-kit';

import RouteMap from './route';

console.disableYellowBox = true;
class Bootstrap extends React.Component {

  static defaultProps = {};

  state = {};

  componentDidMount () {
  }

  render () {
    return (
      <UIApp>
        <UIRoute start="Form" routerMap={RouteMap}></UIRoute>
      </UIApp>
    );
  }
}

const styles = StyleSheet.create ({
});

export default Bootstrap;