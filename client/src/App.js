import React, { Component } from "react";
import AppNavbar from "./components/appNavbar";
import RecordList from "./components/RecordList";

import RecordModal from "./components/RecordModal";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <RecordModal />
            <RecordList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
