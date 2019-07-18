import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { connect } from 'react-redux'

import LangSelect from '../common/LangSelect'
import { onLocaleChange } from '../store'

const container = {
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(90deg,#744fc6 12%,#697eff 100%)',
  paddingTop: '18px',
}

const logo = {
  fill: '#FFF',
}

const githubLink = {
  padding: '4px 28px',
}

const langSelect = {
  flexBasis: '72px',
}

const Footer = ({ locale, dispatch }) => (
  <div className={css(container)}>
    <LangSelect
      value={locale}
      onChange={value => onLocaleChange(value, dispatch)}
      menuPlacement="top"
      className={css(langSelect)}
      controlStyles={{
        color: '#FFFFFF',
        height: '30px',
      }}
    />
  </div>
)

Footer.propTypes = {
  locale: PropTypes.string,
  dispatch: PropTypes.func,
}

Footer.defaultProps = {
  locale: 'en-US',
  dispatch: () => {},
}

const mapStateToProps = state => ({
  locale: state.locale,
})

export default connect(mapStateToProps)(Footer)
