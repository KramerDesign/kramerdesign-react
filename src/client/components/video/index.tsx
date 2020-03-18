import * as React from 'react'
import styled from 'styled-components'

import * as Img from '~/src/assets'

type Props = {
  width: string
  height: string
  sources: string[]
  autoPlay?: boolean
  muted?: boolean
}

type State = {
  OverlayVisible: boolean
}

export class Video extends React.Component<Props, State> {
  videoRef: HTMLVideoElement

  static defaultProps = {
    autoPlay: false,
    muted: true
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      OverlayVisible: !props.autoPlay
    }
  }

  play = () => {
    this.setState(
      () => {
        return {
          OverlayVisible: false
        }
      },
      () => {
        if (this.videoRef.paused) {
          this.videoRef.play()
        }
      }
    )
  }

  pause = () => {
    this.setState(
      () => {
        return {
          OverlayVisible: true
        }
      },
      () => {
        if (!this.videoRef.paused) {
          this.videoRef.pause()
        }
      }
    )
  }

  toggle = () => {
    if (this.videoRef.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  render() {
    const { width, height, sources, autoPlay, muted } = this.props
    const { OverlayVisible } = this.state
    return (
      <Container onClick={this.toggle}>
        <VideoContainer
          ref={ref => (this.videoRef = ref)}
          width={width}
          height={height}
          muted={muted}
          autoPlay={autoPlay}
          onPause={this.pause}
          onPlay={this.play}
        >
          {sources.map((src, index) => {
            return <source key={`src-${index}`} src={src} type="video/mp4" />
          })}
        </VideoContainer>
        <Overlay visible={OverlayVisible} width={width} height={height}>
          <img alt="Start Video" src={Img.PlayPause} />
        </Overlay>
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  border-radius: 10px;
  border: 2px solid black;
  overflow: hidden;
`

const VideoContainer = styled.video`
  width: 300px;
  max-width: 100%;
  height: auto;
  //background-color: blue;
  position: absolute;
`

const Overlay = styled.div<{ width: string; height: string; visible: boolean }>`
  background-color: rgba(48, 49, 48, 0.9);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: 0.7;
  visibility: ${props => (props.visible ? 'visble' : 'hidden')};
`
