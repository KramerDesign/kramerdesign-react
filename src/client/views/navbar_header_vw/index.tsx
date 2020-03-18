import * as React from 'react'
import styled from 'styled-components'

import { Link } from '~/src/client/routes/link'
import { items } from '../all_shared_components'

type Props = {
  children?: any
  items: { name: string; link: string }[]
  selected: string
}

export class Navbar extends React.Component<Props> {
  static defaultProps = {
    children: null,
    selected: '',
    items: items
  }

  render() {
    const { children, items, selected } = this.props

    return (
      <MenuBox>
        {children}

        {items.map(item => {
          return (
            <Items
              color={selected === item.name ? 'pink' : 'transparent'}
              key={item.name}
            >
              <Link_1
                to={item.link}
                decor={selected === item.name ? 'underline' : 'none'}
              >
                {item.name}
              </Link_1>
            </Items>
          )
        })}
      </MenuBox>
    )
  }
}

const MenuBox = styled.div`
  display: flex; 

  width: 100%;
  height:100%
  background-color: transparent;
  justify-content: flex-start;
  //padding: 10px 0 0 0;


@media (min-width: 500px) {
  flex-direction: row;
  //padding: 10px 10px 0 10px;
  margin: 10px 10px 1px 20px;
}

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 10px 0 0 0;
    //margin: 10px 1px 1px 10px;
  }
  
`

const Items = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  //padding: 10px 5px 0 5px;
  background-color: ${props => props.color};

  border-radius: 4px;
  margin: 5px 10px 10px 5px;
  max-width: 180px;
`

const Link_1 = styled(Link)<{ decor: string }>`
  color: white;
  font-weight: 900;
  font-size: 1.3em;
  text-decoration: ${props => props.decor};
  padding: 0px 25px 0 25px;
`
