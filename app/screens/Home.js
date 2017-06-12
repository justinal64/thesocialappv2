import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, ListItem, Button, Badge, Avatar } from "react-native-elements";
import PageHeader from "../components/Header";
import axios from "axios";
import zoey from "../img/zoey.jpg";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: [] };
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/request`).then(res => {
      this.setState({ userData: res.data });
      console.log("this.state.userData = ", this.state.userData);
    });
  }
  render() {
    if (this.state.userData === null) return null;
    // const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.userData.map((user, key) =>
          <Card key={user.dbid} title={user.username}>
            <Text style={{ marginBottom: 10 }}>
              {user.posts}
            </Text>
            {/*<Badge value={3} textStyle={{ color: "orange" }} />*/}
          </Card>
        )}
      </View>
    );
  }
}

// {this.state.userData.map((user, key) => )}
