import * as React from 'react'
import styled from 'styled-components'

import { items } from '../all_shared_components'

import { Link } from '~/src/client/routes/link'
import console = require('console')

type Props = {
  children?: any
  items: { name: string; link: string }[]
  selected: string
}

export class Navbar_For_Footer extends React.Component<Props> {
  static defaultProps = {
    children: null,
    selected: '',
    items: items
  }

  componentDidMount() {
    console.log('My Object', this.props)
  }

  render() {
    const { children, items, selected } = this.props

    return (
      <MenuBox>
        {children}

        {items.map(item => {
          return (
            <Items
              color={selected === item.name ? 'black' : 'blue'}
              key={item.name}
            >
              <Link_1 to={item.link}>{item.name}</Link_1>
            </Items>
          )
        })}
      </MenuBox>
    )
  }
}

const MenuBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
  //background-color: #006fd6;
  padding: 5px 0px 5px 0px;
  justify-content: space-evenly;
`

const Items = styled.div<{ color: string }>`
  //padding: 0px 5px 0px 5px;
  //background-color: ${props => props.color};
  background-color: transparent;
  
`

const Link_1 = styled(Link)`
  color: white;
  padding: 0px 25px 0 25px;
  text-decoration: none;
`
