import React, { Component } from "react";
import PropTypes from "prop-types";

export function LoadingButton({ submitting, children, className = "is-info is-outlined is-inverted", isCentered }) {
  let controlClassName = isCentered ? `control has-text-centered` : `control`;
  let buttonClassName = submitting ? `button ${className} is-loading` : `button ${className}`;
  return (
    <p className={controlClassName}>
      <button className={buttonClassName} type="submit">
        {children}
      </button>
    </p>
  )
}

LoadingButton.propTypes = {
  submitting: PropTypes.bool.isRequired
};

export const required = value => value ? undefined : 'Required';
export const maxSize = (max) => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const max27 = maxSize(27);
export const max64 = maxSize(64);

export const renderField = (props) => {
  let { meta: { touched, error } } = props;
  return (
    <div className="field">
      <div className="control">
        {flatField(props)}
      </div>
      {touched && error && <p className="help is-white">{error}</p>}
    </div>
  )
};

export const fieldWithLabel = (props) => {
  let { meta: { touched, error }, placeholder } = props;
  return (
    <div className="field">
      <label className="label">{placeholder}</label>
      <div className="control">
        {flatField(props)}
      </div>
      {touched && error && <p className="help is-white">{error}</p>}
    </div>
  )
};

export const smallFieldWithLabel = (props) => {
  let { meta: { error }, placeholder, help, className = "" } = props;
  let flatFieldProps = Object.assign({}, props, { className: `${className} is-small`});
  return (
    <div className="field">
      <label className="label is-small">{placeholder}</label>
      <div className="control">
        {flatField(flatFieldProps)}
      </div>
      {error ? <p className="help is-danger">{error}</p> : <p className="help">{help}</p>}
    </div>
  )
};

export const flatField = ({
  input,
  className,
  placeholder,
  type = "text",
  label,
  disabled,
  meta: { touched, error }
}) => {
  className += " input";
  if (error && touched) {
    className += " is-danger"
  }

  if (type === "image") {
    return [
      <input key={0} {...input} type="text" className={className} placeholder={placeholder} disabled={disabled}/>,
      <img key={1} src={input.value}/>,
    ];
  } else if (type === "textarea") {
    return <textarea {...input} type={type} className={className} placeholder={placeholder} disabled={disabled} rows={3}/>
  } else {
    if (label) {
      return [
        <label key={1}>{label}</label>,
        <input key={0} {...input} type={type} className={className} placeholder={placeholder} disabled={disabled}/>,
      ]
    } else {
      return <input {...input} type={type} className={className} placeholder={placeholder} disabled={disabled}/>
    }
  }
};