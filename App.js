import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import GetPage from "./src/GetPage";
import PostPage from "./src/PostPage";
import PutPage from "./src/PutPage";
import DeletePage from "./src/DeletePage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNeedsTobeRendered: "Main"
    };
  }

  openGetPage = () => {
    this.setState({ pageNeedsTobeRendered: "GetPage" });
  };

  openPostPage = () => {
    this.setState({ pageNeedsTobeRendered: "PostPage" });
  };

  openPutPage = () => {
    this.setState({ pageNeedsTobeRendered: "PutPage" });
  };

  openDeletePage = () => {
    this.setState({ pageNeedsTobeRendered: "DeletePage" });
  };

  render() {
    const {pageNeedsTobeRendered} = this.state;

    if (pageNeedsTobeRendered === "GetPage") {
      return <GetPage/>;
    } 
    else if (pageNeedsTobeRendered === "PostPage") {
      return <PostPage/>;
    } 
    else if (pageNeedsTobeRendered === "PutPage") {
      return <PutPage/>;
    } 
    else if (pageNeedsTobeRendered === "DeletePage") {
      return <DeletePage/>;
    } 

    return (
      <View>
        <Text>Networking App</Text>

        <TouchableOpacity
          onPress={() => this.openGetPage()}>
          <Text style={Styles.textButton}>Open Get Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.openPostPage()}>
          <Text style={Styles.textButton}>Open Post Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.openPutPage()}>
          <Text style={Styles.textButton}>Open Put Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.openDeletePage()}>
          <Text style={Styles.textButton}>Open Delete Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  textButton: { margin: 10, backgroundColor: "yellow" }
});

export default App;
