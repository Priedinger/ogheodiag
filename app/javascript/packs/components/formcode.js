import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Action } from './action'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { checkFormCode } from '../api_service'

export const FormCode = (props) => {

  const [formCodeIsVisible, setFormCodeIsVisible] = useState(false)
  const { visible, onCancel, onConfirm } = props

  const initialValues = {
    form_code: ''
  }

  const validationSchema = Yup.object().shape({
    form_code: Yup.string(),
  })

  const checkCodeValidity = (value) => {
    checkFormCode(value).then((response) => {
      console.log(response)
      if (response.data.success){
        console.log("true")
      } else {
        console.log("false")
      }
    })
    setFormCodeIsVisible(false)
  }

  return (
    <Container>
      <Wrapper />
      <FormBox>
        <p>Saisissez le code qui vous a été fourni:</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={(values, { setSubmitting }) => {
            checkCodeValidity(values.form_code)
          }}
        >
          {({ handleChange, submitForm, values, errors, setFieldValue, setFieldTouched, setFieldError }) => (
            <Form>
              <FormContainer>
                <input
                  type="text"
                  label="Code"
                  name="form_code"
                  placeholder=""
                  onChange={handleChange}
                />
              </FormContainer>
                <Button type="submit" onClick={submitForm} disabled={false}>Valider</Button>
            </Form>
          )}
        </Formik>
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
const FormContainer = styled.div`
  display: flex;
  grid-gap: 2rem 4rem;
  flex-wrap: wrap;
  > label {
    flex: 0 0 29%;
  }
`
const ButtonContainer = styled.div`
  margin: 2rem 0 0;
  display: flex;
  justify-content: flex-end;
`
const Button = styled.div`

`
