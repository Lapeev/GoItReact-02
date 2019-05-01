import React, { Component } from 'react';
import shortid from 'shortid';
import Transaction from './transactions/transaction';
import Controls from './controls/control';
import Balance from './Balance/balance';
import style from './office.module.css';

export default class Office extends Component {
  constructor() {
    super();
    this.isEmpty = false;
    this.isBigger = false;
    this.state = {
      history: [],
      balance: 5000,
      value: '',
      temporary: {},
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.handleOff();
  };

  handleIncrement = () => {
    if (this.state.value !== '') {
      this.isEmpty = false;
      this.setState(prevState => ({
        balance: prevState.balance + Number(prevState.value),
        temporary: {
          type: 'deposit',
          id: shortid.generate(),
          amount: prevState.value,
          date: new Date().toDateString(),
        },
      }));
      this.setState(state => ({
        history: [...state.history, state.temporary],
      }));
    } else {
      this.isEmpty = true;
    }
    this.imputReset();
  };

  handleDecrement = () => {
    if (
      this.state.value <= Number(this.state.balance) &&
      this.state.value !== ''
    ) {
      this.isEmpty = false;
      this.isBigger = false;
      this.setState(prevState => ({
        balance: prevState.balance - Number(prevState.value),
        temporary: {
          type: 'withdraw',
          id: shortid.generate(),
          amount: prevState.value,
          date: new Date().toDateString(),
        },
      }));
      this.setState(state => ({
        history: [...state.history, state.temporary],
      }));
    } else if (this.state.value !== '') {
      this.isBigger = true;
    } else {
      this.isEmpty = true;
    }
    this.imputReset();
  };

  imputReset = () => {
    this.setState({ value: '' });
  };

  handleOff = () => {
    this.isEmpty = false;
    this.isBigger = false;
  };

  render() {
    const { balance, history, value } = this.state;
    return (
      <div className={style.dashboard}>
        <section className={style.controls}>
          <Controls
            value={value}
            handleChange={this.handleChange}
            isEmpty={this.isEmpty}
            isBigger={this.isBigger}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        </section>

        <section className={style.balance}>
          <Balance history={history} balance={balance} />
        </section>

        <table className={style.history}>
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map(transaction => (
              <Transaction
                key={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                date={transaction.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
