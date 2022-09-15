import { Component } from 'react'

type Props = {
  message: string
  age?: number
}

type State = {
  count: number
}

class ClassComponent extends Component<Props, State> {
  /** 
   * 不需要加 Readonly，React 已经正确标记了
   * @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/pull/26813}
   * */
  state: State = {
    count: 0
  }

  /** 类属性 */
  pointer?: number
  /** 类属性，初始🈯️自动推断类型 */
  username = 'blank'

  componentDidMount() {
    this.pointer = 3
  }

  /** 类方法 */
  increment = (value: number) => {
    this.setState((state) => ({
      count: state.count + value
    }))
  }

  render() {
    /** 解构并赋值，等价于 defaultProps */
    const { age = 20, message } = this.props
    return (
      <div>
        <h1>ClassComponent</h1>
        <h2>{message}: {age}</h2>
        <h2>{this.state.count} & {this.username}</h2>
        <h2>
          <button onClick={() => this.increment(1)}>+1</button>
        </h2>
      </div>
    )
  }
}

export default ClassComponent