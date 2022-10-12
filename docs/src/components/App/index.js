/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import github from '../../../images/github.png';
import paperPen from '../../../images/paper_pen.svg';
import './styles.css';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object,
  };

  render() {
    return (
      <div className="app-root">
        <div>
          <span className="header">
            <a href="https://vdtsol.github.io/react-wysiwyg-draft/" rel="noopener noreferrer">
              <img src={paperPen} className="header-logo" alt="" />
            </a>
            <span className="header-text">
              <span className="header-title">
                <a href="https://vdtsol.github.io/react-wysiwyg-draft/" className="header-label">React Draft Wysiwyg</a>
              </span>
              <span className="header-subtitle">A Wysiwyg Built on ReactJS and DraftJS</span>
            </span>
            <a target="_blank" href="https://github.com/vdtsol/react-wysiwyg-draft" rel="noopener noreferrer">
              <img className="github" src={github} alt="Fork me on GitHub" />
            </a>
          </span>
        </div>
        <div className="flex-layout">
          <Menu pathname={this.props.location.pathname} />
          {this.props.children}
        </div>
        <span className="footer">
          Made with ❤ by <a target="_blank" href="https://twitter.com/vdtsol" className="author-link" rel="noopener noreferrer"> vdtsol</a>
        </span>
      </div>
    );
  }
}
