import * as React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

export class Link extends React.Component<LinkProps> {
  render() {
    const { to, children, ...rest } = this.props
    return (
      <RouterLink to={`${to}`} {...rest}>
        {children}
      </RouterLink>
    )
  }
}
