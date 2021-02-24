import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

export default () => {
  return (
    <>
        <SpinnerLoading animation="grow" size="sm" />
        <SpinnerLoading animation="grow" />
    </>
  )
}

const SpinnerLoading = styled(Spinner)`
color:goldenrod;

`

