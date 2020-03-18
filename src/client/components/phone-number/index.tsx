import * as React from 'react'
import styled from 'styled-components'

type Props = {
  value: string
}

export class PhoneNumber extends React.Component<Props> {
  render() {
    const { value, ...rest } = this.props

    return (
      <Container href={`tel:${value}`} {...rest}>
        {value}
      </Container>
    )
  }
}

const Container = styled.a``
