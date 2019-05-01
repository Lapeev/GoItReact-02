import React, { Component } from 'react';
import Counter from './counter/counter';
import Controls from './controls/controls';
import styles from './reader.module.css';

export default class Reader extends Component {
  constructor(data) {
    super();
    this.data = data.data;
    this.state = {
      value: 0,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.reader}>
        <section className={styles.publication}>
          <h2>{this.data[value].title}</h2>
          <p>{this.data[value].text}</p>
        </section>

        <Counter value={value} length={this.data.length} />

        <Controls
          value={value}
          length={this.data.length}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}
