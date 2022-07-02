import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Action } from './action'

export const FormCode = (props) => {

  const [formCodeIsVisible, setFormCodeIsVisible] = useState(false)
  const { visible, onCancel, onConfirm } = props

  return (
    <Container>

      <Wrapper />
      <FormBox>
        <p>Saisissez le code qui vous a été fourni:</p>

        <input />

        <ModalBottom>
          <Action onClick={onCancel} text='Annuler'/>
          <Action onClick={onConfirm} text='Confirmer'/>
        </ModalBottom>
      </FormBox>
    </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
`
const FormBox = styled.div`
  background-color: white;
  z-index: 10;
  padding: 4rem;
  width: 40%;
  margin: auto;

  h3 {
    text-align: center;
  }
`
const ModalBottom = styled.div`
  color: red;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0 0;
`

const Title = styled.div`
  text-align: center;
  display: block;
  font-size: 50px;
  font-weight: 500;
`
