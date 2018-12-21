import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Pin from './Pin'
import Password from './Password';

const container = {
  height: '100%',
}

class Auth extends React.Component {
  state = {
    p12decrypted: null,
  }

  onDecrypt = (p12decrypted) => this.setState({ p12decrypted })

  render() {
    return (
      <div className={css(container)}>
        {!this.state.p12decrypted && (
          <Pin
            onDecrypt={this.onDecrypt}
            onCancel={this.props.onCancel}
            p12base64={this.props.p12base64}
          />
        )}
        {this.state.p12decrypted && (
          <Password
            onCancel={this.props.onCancel}
            p12decrypted={this.state.p12decrypted}
          />
        )}
      </div>
    )
  }
}

Auth.propTypes = {
  p12base64: PropTypes.string,
  onCancel: PropTypes.func,
}

export default Auth