import React, { Component } from "react";

export default class Icon extends Component {
    render() {
        let className = `fa fa-${this.props.fa}`;
        return (
            <span className="icon ">
                <i className={className}></i>
            </span>
        )
    }
}

Icon.propTypes = {
    fa: PropTypes.string.isRequired
};