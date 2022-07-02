import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Hello = props => {


const openCodeForm = () => {
  console.log("test")
}

  return (
    <Container>
      <Preambule>
        <Title>Préambule</Title>

        <p>Votre employeur souhaite évaluer votre perception des actions menées dans le cadre de la politique sécurité de l’entreprise..
        Vos réponses aux questions ci-dessous sont à la fois <strong> personnelles, totalement anonymes  et strictement confidentielles. </strong>
        Elles seront analysées parmi d’autres de votre environnement  professionnel proche ou lointain, afin de refléter la réalité et contribuer à la construction de
        la politique  Sécurité de l’organisation. Il n’est pas prévu qu’un retour individuel soit communiqué.
        </p>
        <p>
          Le terme « Sécurité » s’entend ici sous l’angle de la sécurité et de la santé dans un contexte professionnel.
        </p>
        <p>
          Nous vous remercions de l’objectivité de vos réponses à chacune des questions, le questionnaire ne nécessite qu’une vingtaine de minutes.
        </p>

        <p>
          Vous pourrez compléter le questionnaire de commentaires supplémentaires en dernière page.
        </p>

        <Start onClick={openCodeForm}> Commencer le questionnaire </Start>
      </Preambule>
    </Container>
    )
  }

const Container = styled.div`
  max-width: 70%;
  margin: auto;
`
const Preambule = styled.div`
  max-width: 80%;
  margin: auto;
`
const Title = styled.div`
  text-align: center;
  display: block;
  margin: 3rem;
  font-size: 50px;
  font-weight: 500;
`
const Start = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border-radius: 4px;
  max-width: 25rem;
  background-color: lightblue;
  height: 5rem;
  cursor: pointer;
  margin: auto;
  margin-top: 4rem;
`


