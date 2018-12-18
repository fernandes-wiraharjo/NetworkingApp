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

  openPage = page => {
    if (page && page !== "") this.setState({ pageNeedsTobeRendered: page });
  };

  render() {
    const { pageNeedsTobeRendered } = this.state;

    if (pageNeedsTobeRendered === "Get") {
      return <GetPage />;
    } else if (pageNeedsTobeRendered === "Post") {
      return <PostPage />;
    } else if (pageNeedsTobeRendered === "Put") {
      return <PutPage />;
    } else if (pageNeedsTobeRendered === "Delete") {
      return <DeletePage />;
    }

    return (
      <View>
        <Text>Networking App</Text>

        <TouchableOpacity onPress={() => this.openPage("Get")}>
          <Text style={Styles.textButton}>Open Get Page</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.openPostPage("Post")}>
          <Text style={Styles.textButton}>Open Post Page</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.openPutPage("Put")}>
          <Text style={Styles.textButton}>Open Put Page</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.openDeletePage("Delete")}>
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
