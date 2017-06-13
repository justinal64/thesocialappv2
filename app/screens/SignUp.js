import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn, auth } from "../auth";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cpassword: ""
    };
  }

  login = () => {
    console.log("this.state.email = ", this.state.email);
    console.log("this.state.password = ", this.state.password);
    console.log("this.state.cpassword = ", this.state.cpassword);
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="Email address..."
            onChangeText={email => this.setState({ email })}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder="Password..."
            onChangeText={password => this.setState({ password })}
          />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder="Confirm Password..."
            onChangeText={cpassword => this.setState({ cpassword })}
          />
          {/*<UselessTextInputMultiline />*/}
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => {
              auth(this.state.email, this.state.password);
              {
                /*onSignIn().then(() =>
                navigation.navigate("SignedIn")
              );*/
              }
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="Sign In"
            onPress={() => navigation.navigate("SignIn")}
          />
        </Card>
      </View>
    );
  }
}

// TO DO
// 1. OnLoseFocus to validate password.cpassword

// <View>
//   <Tile
//     imageSrc={{ require: zoey }}
//     title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
//     featured
//     caption="Some Caption Text"
//   />
// </View>
