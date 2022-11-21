import { Component, ErrorInfo, PropsWithChildren, useEffect } from 'react'

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = {
    hasError: false,
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  /**
   * @see {@link https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror}
   */
  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>
    }
    return this.props.children
  }
}

const ErrorDemo = () => {
  // const a = 1
  // // @ts-ignore
  // a.push(2)
  return (
    <>
      <h1>Error Demo</h1>
    </>
  )
}

export default ErrorDemo
