import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Example.scss";

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;

    return (
      <div className={styles.test + " " + styles.test2}>Button {text}</div>
    );
  }
}