import React from 'react'

export default props => (
  <div className="field">
    <label className="label">Email</label>
    <div className="control has-icons-left has-icons-right">
      <input
        className="input is-danger"
        type="email"
        placeholder="Email input"
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
)
