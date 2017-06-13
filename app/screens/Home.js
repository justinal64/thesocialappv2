import React, { Component } from "react";
import { View, TextInput, ScrollView } from "react-native";
import {
  Card,
  ListItem,
  Button,
  Badge,
  Avatar,
  Text
} from "react-native-elements";
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

  //   public string dbid {get; set;}
  //   public string Company { get; set; }
  //   public string Posts { get; set; }
  // public string Username { get; set; }
  // public string Password { get; set; }
  postToDb = () => {
    console.log("test");
    // Or use the callback interface if you prefer.
    // UUIDGenerator.getRandomUUID((uuid) => {
    //   this.setState({ uuid });
    // });
  };

  render() {
    if (this.state.userData === null) return null;
    // const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1, paddingVertical: 20 }}>
        <View>
          <Text h4>Home Page</Text>
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
      </ScrollView>
    );
  }
}

// {this.state.userData.map((user, key) => )}
