import React, {
  StyleSheet,
  View
} from 'react-native';
import {
  UIScene,
  UIKit,
  UIForm,
} from 'ui-kit';

import Card from '../card';

class FromView extends React.Component {

  static defaultProps = {};

  state = {};

  componentDidMount () {
  }

  render () {
    return (
      <UIScene
        header="From"
        hasBack={true}
        style={styles.container}>

        <Card title="Input">
          <UIForm.Input
            label="普通输入框"
            />
        </Card>

        <Card title="Password Input">
          <UIForm.Password
            label="密码输入框"
          />
        </Card>

        <Card title="Date Input">
          <UIForm.Date
            label="日期输入框"
          />
        </Card>

        <Card title="Text">
          <UIForm.Text
            label="文本"
            value="文本内容"
          />
        </Card>

        <Card title="Select && Multi Select">
          <UIForm.Text
            label="选择"
          />
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

export default FromView;