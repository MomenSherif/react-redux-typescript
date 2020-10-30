import React from 'react';

type Props = {
  message: string,
};

type State = {
  count: number
};

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  render() {
    return (
      <div className="container text-center">
        <h1>{this.props.message} {this.state.count}</h1>
        <button type="button" className="btn btn-danger mr-4" onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
        <button type="button" className="btn btn-success" onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    )
  }
}

export default Counter;