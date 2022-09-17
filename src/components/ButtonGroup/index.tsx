import { ComponentPropsWithRef, PropsWithChildren } from 'react'
import styled from 'styled-components'

const ButtonGroup = ({ className, children }: PropsWithChildren<ComponentPropsWithRef<'div'>>) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const StyledButtonGroup = styled(ButtonGroup)`
  button + button {
    margin-left: 8px;
  }
`

export { StyledButtonGroup as ButtonGroup }
