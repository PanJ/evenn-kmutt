import React from 'react'

export default props => (
  <div className="field">
    <label className="label">{props.title}</label>
    <div
      className={`control has-icons-left ${
        props.error ? 'has-icons-right' : ''
      }`}
    >
      <input
        className={`input ${props.error ? 'is-danger' : ''}`}
        type={props.type}
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
        value={props.value}
      />
      <span className="icon is-small is-left">
        <i className={`fas ${props.icon}`} />
      </span>
      {props.error && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      )}
    </div>
    {props.required &&
      props.value.length === 0 && (
        <p className="help is-danger">{props.title} is required</p>
      )}
    {props.error && <p className="help is-danger">{props.error}</p>}
  </div>
)
