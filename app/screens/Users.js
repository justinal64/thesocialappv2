import React from "react";
import { ScrollView, Linking, View, Header } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import PageHeader from "../components/Header";
import axios from "axios";

const data = () => {
  axios.get(`http://localhost:5000/api/request`).then(res => {
    // this.setState({ userData: res.data });
    console.log("res.data= ", res.data);
  });
};

export default () =>
  <View style={{ flex: 1 }}>
    {data()}
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <Text h4>Users Page</Text>
    </ScrollView>
  </View>;
