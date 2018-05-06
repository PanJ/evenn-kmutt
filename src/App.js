import React, { Component } from 'react'
import moment from 'moment'
import logo from './logo.svg'
import Input from './Input'
import './App.css'

const targetDate = moment('2018-05-06 17:00:00')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      ticketType: '',
      agreeTerms: false,
      addFood: false,
      countdown: ''
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.updateCountdown, 1000)
    this.updateCountdown()
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  updateCountdown = () => {
    const duration = moment.duration(targetDate.diff(moment()))
    const hour = Math.floor(duration.asHours())
    const minute = duration.minutes()
    const second = duration.seconds()
    this.setState({
      countdown: `${hour} hours ${minute} minutes ${second} seconds`
    })
  }
  render() {
    const { email, ticketType, agreeTerms, addFood, countdown } = this.state
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>Ticket sale ends in</p>
          <p>{countdown}</p>
          <Input />
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle" />
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Ticket type</label>
            <div className="control">
              <div className="select">
                <select
                  value={ticketType}
                  onChange={e => this.setState({ ticketType: e.target.value })}
                >
                  <option>Select dropdown</option>
                  <option value="regular">Regular 100 THB</option>
                  <option value="premium">Premium 300 THB</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={e =>
                    this.setState({ agreeTerms: e.target.checked })
                  }
                />{' '}
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field">
            <label className="label">Add food?</label>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="question"
                  checked={addFood}
                  onClick={() => this.setState({ addFood: true })}
                />{' '}
                Yes (+ 50 THB)
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="question"
                  checked={!addFood}
                  onClick={() => this.setState({ addFood: false })}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
