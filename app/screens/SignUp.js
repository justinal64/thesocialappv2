import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

// export default ({ navigation }) =>
//   <View style={{ paddingVertical: 20 }}>
//     <Card>
//       <FormLabel>Email</FormLabel>
//       <FormInput placeholder="Email address..." textInputRef="email" />
//       <FormLabel>Password</FormLabel>
//       <FormInput secureTextEntry placeholder="Password..." />
//       <FormLabel>Confirm Password</FormLabel>
//       <FormInput secureTextEntry placeholder="Confirm Password..." />
//       {/*<UselessTextInputMultiline />*/}
//       <Button
//         buttonStyle={{ marginTop: 20 }}
//         backgroundColor="#03A9F4"
//         title="SIGN UP"
//         onPress={() => {
//           console.log(this.refs.forminput.refs.email);
//           onSignIn().then(() => navigation.navigate("SignedIn"));
//         }}
//       />
//       <Button
//         buttonStyle={{ marginTop: 20 }}
//         backgroundColor="transparent"
//         textStyle={{ color: "#bcbec1" }}
//         title="Sign In"
//         onPress={() => navigation.navigate("SignIn")}
//       />
//     </Card>
//   </View>;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      password: ""
    };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address..." textInputRef="email" />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..." />
          {/*<UselessTextInputMultiline />*/}
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => {
              onSignIn().then(() => navigation.navigate("SignedIn"));
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

// class UselessTextInputMultiline extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       password: ""
//     };
//   }

// If you type something in the text box that is a color, the background will change to that
// color.
//   render(password) {
//     return (
//       <View
//         style={{
//           backgroundColor: "#ffffff",
//           borderBottomColor: "#000000",
//           borderBottomWidth: 1
//         }}
//       >
//         <FormInput
//           secureTextEntry
//           placeholder="Confirm Password..."
//           onChangeText={password => this.setState({ password })}
//         />
//       </View>
//     );
//   }
// }

// <View>
//   <Tile
//     imageSrc={{ require: zoey }}
//     title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
//     featured
//     caption="Some Caption Text"
//   />
// </View>
