import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Action = (props) => {
  const { text, icon, onClick, style, disabled } = props

  const color = () => {
    switch (style) {
    case 'blue':
      return '#1882FF'
    }
  }

  return (
    <Container onClick={onClick} disabled={disabled} color={color()}>
      {icon}
      <p>{text}</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  color: ${props => props.disabled ? '#727272' : props.color};
  font-size: 0.9rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  > p {
    flex: 0 0 auto;
  }

  &:hover {
    opacity: 0.4;
  }
`
