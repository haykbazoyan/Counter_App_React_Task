import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Inputs/Input';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
      step: 1,
      minimum: 0,
      maximum: 10,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  clickInc = () => {
    this.setState((prevCount) => ({
      count: prevCount.count + this.state.step,
    }));
  }

  clickDec = () => {
    this.setState((prevCount) => ({
      count: prevCount.count - this.state.step,
    }));
  }

  clickRes = () => {
    this.setState({
      count: this.state.minimum,
    });
  }

  changeStep = ({ target: { value } }) => {
    this.setState({
      step: Number(value),
    });
  }

  changeMaxNum = ({ target: { value } }) => {
    this.setState({
      maximum: Number(value),
    });
  }

  changeMinNum = ({ target: { value } }) => {
    this.setState({
      minimum: Number(value),
    });
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const { minimum, maximum, count } = this.state;
    const isDecDisable = count <= minimum;
    const isIncDisable = count >= maximum;

    return (
      <div className="App">
        <p>Counter: {this.state.count}</p>
        <Button onClickFn={this.clickInc} isDisable={isIncDisable} btnName="Increase" />
        <Button onClickFn={this.clickDec} isDisable={isDecDisable} btnName="Decrease" />
        <Button onClickFn={this.clickRes} isDisable={!count} btnName="Reset" />
        <br />
        <br />
        <Input type="number" inputName="Step" defaultValue={this.state.step} onChange={this.changeStep} />
        <br />
        <Input type="number" inputName="Max" defaultValue={this.state.maximum} onChange={this.changeMaxNum} />
        <br />
        <Input type="number" inputName="Min" defaultValue={this.state.minimum} onChange={this.changeMinNum} />
        <h2>Now { this.state.date.toLocaleTimeString() }</h2>
      </div>
    );
  }
}

export default Counter;
