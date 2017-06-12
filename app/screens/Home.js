import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Card, ListItem, Button, Badge, Avatar } from "react-native-elements";
import PageHeader from "../components/Header";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      post: ""
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/request`).then(res => {
      this.setState({ userData: res.data });
      console.log("this.state.userData = ", this.state.userData);
    });
  }

  postToDb = () => {
    axios.post(`http://localhost:5000/api/request`).then(res => {
      this.setState({ userData: res.data });
      console.log("this.state.userData = ", this.state.userData);
    });
  };
  render() {
    if (this.state.userData === null) return null;
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <View>
          <TextInput
            style={{ height: 40 }}
            placeholder="New Post...."
            onChangeText={post => this.setState({ post })}
          />
          <Button
            raised
            buttonStyle={{ backgroundColor: "red", borderRadius: 10 }}
            textStyle={{ textAlign: "center" }}
            title={`Submit`}
            onPress={() => this.postToDb()}
          />
        </View>
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
