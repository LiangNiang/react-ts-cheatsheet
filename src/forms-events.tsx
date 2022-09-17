import { ChangeEventHandler, FormEvent, SyntheticEvent, useState, MouseEvent, ComponentPropsWithoutRef } from 'react'
import { ButtonGroup } from './components'

const FormsAndEvents = () => {
  const [value, setValue] = useState<string>('')
  const [value2, setValue2] = useState<string>('')

  /** 如果不是那么关心事件的具体类型，可以简单的使用  React.SyntheticEvent */
  const handleBtn2Click = (ev: SyntheticEvent) => {
    /** 
     * 如下会报错，因为 SyntheticEvent 并没有 clientX 和 clientY 属性，但实际上点击按钮的 ev 是有这两个属性的
     * 可以替换成 React.MouseEvent<HTMLButtonElement>
     */
    // @ts-ignore
    console.log(ev.clientX, ev.clientY)
  }

  /**
   * 单独定义事件处理函数
   * 第一种写法：将类型写在 = 右边
   * 更多的事件类型
   * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events#list-of-event-types}
   */
  const handleInputChange = (ev: FormEvent<HTMLInputElement>): void => {
    setValue(ev.currentTarget.value)
  }

  /**
   * 单独定义事件处理函数
   * 第二种写法：直接定义事件处理函数本身，将类型写于 = 左边
   */
  const handleInput2Change: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setValue2(ev.currentTarget.value)
  }

  return (
    <div>
      <h1>Forms and Events</h1>
      <h2>
        <ButtonGroup>
          <button
          // 如果性能不是问题（ 通常情况下都不会 ），内联的事件处理都是最简单和方便的
          // 内联的事件处理函数的类型能够被自动地推断
            onClick={(ev) => {
              console.log(ev)
            }}
          >inline event handler</button>
          <button onClick={handleBtn2Click}>SyntheticEvent</button>
        </ButtonGroup>
      </h2>
      <h2>
        <p>Your Input: {value}{value2}</p>
        <fieldset>
          <legend>Input 1</legend>
          <input value={value} onChange={handleInputChange} />
        </fieldset>
        <fieldset>
          <legend>Input 2</legend>
          <input value={value2} onChange={handleInput2Change} />
        </fieldset>
      </h2>
    </div>
  )
}

export default FormsAndEvents
