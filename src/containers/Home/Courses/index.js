import React, { Component } from "react";
import { View, Text } from "react-native";
import style from "./style";

class CourseList extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> ListStyle </Text>
      </View>
    );
  }
}

export default CourseList;