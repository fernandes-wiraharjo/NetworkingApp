import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";

class GetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      height: "",
      hairColor: "",
      gender: "",
      isLoading: false
    };
  }

  getStarWarsData = () => {
    this.setState({ isLoading: true });
    const url = "https://swapi.co/api/people/1/";
    axios
      .get(url)
      .then(response => {
        console.log(response);
        this.setState({
          name: response.data.name,
          height: response.data.height,
          hairColor: response.data.hair_color,
          gender: response.data.gender,
          isLoading: false
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { name, height, hairColor, gender, isLoading } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {isLoading && <ActivityIndicator size="large" />}
        <Text>Get Page</Text>
        <Text>Name: {name}</Text>
        <Text>Height: {height}</Text>
        <Text>Hair Color: {hairColor}</Text>
        <Text>Gender: {gender}</Text>
        <TouchableOpacity onPress={() => this.getStarWarsData()}>
          <Text style={{ margin: 10, backgroundColor: "green" }}>
            Get Star Wars Data
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.backToMainPage("Main")}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Back to Main Page
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GetPage;
