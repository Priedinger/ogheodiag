import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Hello = props => (
  <Hell>Hello {props.name}!</Hell>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

const Hell = styled.div`

  color: red;
  display: flex;
  justify-content: center;
`
