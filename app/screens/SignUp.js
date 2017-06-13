import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default ({ navigation }) =>
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput
        placeholder="Email address..."
        onChangeText={email => this.setState({ email })}
      />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <FormLabel>Confirm Password</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => {
          console.log(email);
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
  </View>;

// <View>
//   <Tile
//     imageSrc={{ require: zoey }}
//     title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
//     featured
//     caption="Some Caption Text"
//   />
// </View>
