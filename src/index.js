import React from "react";
import { render } from "react-dom";

import Counter from "./components/Counter";
import Button from "./components/Button";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  _onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <Counter count={this.state.count} />
        <Button label={"Click me!"} onClick={() => this._onClick()} />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
