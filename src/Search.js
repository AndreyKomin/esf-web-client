import React from 'react';
import { css } from 'emotion';

import Header from './common/Header';
import SectionContent from './common/SectionContent';
import PrivateComponent from './common/PrivateComponent';
import SearchForm from './SearchForm';

export const createQueryString = (form) => {
  const direction = form.direction ? `direction=${form.direction}` : ''
  const dateFrom = form.startDate ? `&dateFrom=${form.startDate.format('YYYY-MM-DD')}` : ''
  const dateTo = form.endDate ? `&dateTo=${form.endDate.format('YYYY-MM-DD')}` : ''

  return `?${direction}${dateFrom}${dateTo}`
}

const container = {
}

const innerContainer = {
  display: 'flex',
  paddingTop: '16px',
  paddingBottom: '16px',
}

const sidebarContainer = {
  display: 'none',
  '@media(min-width: 768px)': {
    display: 'block',
    backgroundColor: 'transparent',
    flexBasis: '130px',
    marginTop: '20px',
  }
}

const sidebarItems = {
  color: '#262626',
  padding: '0px 15px',
  backgroundColor: 'transparent',
  borderRadius: '5px 0px 0px 5px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
}

const sidebarItemActive = {
  backgroundColor: '#f8f8f8',
}

const mainArea = {
  backgroundColor: '#f8f8f8',
  flexGrow: '1',
  borderRadius: '5px',
  paddingTop: '15px',
}

const Search = ({ locale, onLocaleChange, onMenuClick, history }) => {
  const onSubmit = (form) => {
    history.push(`/result${createQueryString(form)}`)
  }

  return (
    <PrivateComponent>
      <div className={css(container)}>
        <Header
          localeValue={locale}
          onLocaleChange={onLocaleChange}
          burgerClassName={css({ fill: '#697EFF' })}
          onMenuClick={onMenuClick}
        />
        <SectionContent>
          <div className={css(innerContainer)}>
            <div className={css(sidebarContainer)}>
              <div className={css(sidebarItems, sidebarItemActive)}>
                Search
              </div>
              <div className={css(sidebarItems)}>
                Result
              </div>
            </div>
            <div className={css(mainArea)}>
              <SearchForm onSubmit={onSubmit} />
            </div>
          </div>
        </SectionContent>
      </div>
    </PrivateComponent>
  )
}

export default Search;
