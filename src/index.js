import React from "react";
import ReactDOM from "react-dom";
import FilterColumns from "./filter";
import mammoth from "mammoth";
import "./styles.css";
import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterItems: [
        { name: "item1", selected: true },
        { name: "item2", selected: true }
      ],
      selectedValues: []
    };
  }
  filterHandler(selectedItems) {
    this.setState({ selectedValues: selectedItems });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <FilterColumns
          filterItems={this.state.filterItems}
          filterHandler={this.state.filterHandler}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
