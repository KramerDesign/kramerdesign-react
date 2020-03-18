import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

type Props = {
  status: 'shown' | 'hidden'
  onCloseHandler?: () => void
  children?: any
  width: string
  height: string
  color: string
  border: string
  borderRad: string
}

const isClient = typeof window !== 'undefined'

export class Modal extends React.Component<Props> {
  domNode: HTMLElement

  constructor(props: Props) {
    super(props)

    this.domNode = null

    if (isClient) {
      const domNode = document.getElementById('modal')
      if (!domNode) {
        throw new Error('modal div not found')
      }
      this.domNode = domNode
    }
  }

  // componentDidMount() {
  //   console.log('Hi')
  // }

  disableMouseScroll = (e: any) => {
    e.preventDefault()
    return false
  }

  onClose = (e: any): void => {
    e.preventDefault()

    const { onCloseHandler } = this.props
    onCloseHandler && onCloseHandler()
  }

  renderModal() {
    const {
      width,
      height,
      color,
      border,
      borderRad,
      children,
      status
    } = this.props

    return (
      <div>
        <BackDrop visible={status === 'shown'} onClick={this.onClose}>
          <Container onClick={this.onClose}>
            <Content
              width={width}
              height={height}
              color={color}
              border={border}
              borderRad={borderRad}
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              {children}
            </Content>
          </Container>
        </BackDrop>
      </div>
    )
  }

  render() {
    const { status } = this.props
    //console.log('BBBBBBB', window.scrollY)

    if (status === 'shown' && isClient) {
      document.body.style.overflow = 'hidden'
    }
    if (status !== 'shown' && isClient) {
      document.body.style.overflow = ''
    }

    const container = status === 'shown' ? this.renderModal() : null

    return isClient
      ? (ReactDOM.createPortal(container, this.domNode) as any)
      : null
  }
}

const fadeIn = keyframes`
from {
  opacity: .3;
}
to {
  opacity: 1;
}
`
const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`

const BackDrop = styled.div<{ visible: boolean }>`
  background-color: rgba(48, 49, 48, .9);
  //background-color:rgba(129, 207, 224, .9);
  //background-color: blue;
  position: absolute;
  width: 100%;
  height: 10000px;
  visibility: ${props => (props.visible ? 'shown' : 'hidden')}
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 0.5s linear ;
  transition: visiblity linear;

  //transition-property: background-color;
  //transition-duration: 1s;
  //transition: opacity 3s ease-in;
`

const Container = styled.div`
  z-index: 1000;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Content = styled.div<{
  width: string
  height: string
  color: string
  border: string
  borderRad: string
}>`
  max-width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.color};
  border: ${props => props.border}
  border-radius: ${props => props.borderRad}
  position: absolute;
`
