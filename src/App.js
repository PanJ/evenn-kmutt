import React, { Component } from 'react'
import moment from 'moment'
import Input from './Input'
import { connect } from 'react-redux'
import { setEmail } from './reducer'
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
      countdown: '',
      username: ''
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
    const {
      email,
      ticketType,
      agreeTerms,
      addFood,
      countdown,
      username
    } = this.state
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>Ticket sale ends in</p>
          <p>{countdown}</p>
          <Input
            type="email"
            title="Email"
            placeholder="Email Input..."
            icon="fa-envelope"
            value={this.props.email}
            onChange={email => this.props.setEmail(email)}
            required
          />
          <Input
            type="text"
            title="Username"
            placeholder="e.g. John"
            icon="fa-user"
            value={username}
            onChange={username => this.setState({ username })}
          />

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
                  onChange={() => this.setState({ addFood: true })}
                />{' '}
                Yes (+ 50 THB)
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="question"
                  checked={!addFood}
                  onChange={() => this.setState({ addFood: false })}
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

const mapStateToProps = state => ({
  email: state.email
})

const mapDispatchToProps = dispatch => ({
  setEmail: value => dispatch(setEmail(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
