import { ChangeEvent, useEffect, useRef, useState } from 'react'

type Props = {
  message: string;
  count: number;
  disabled: boolean;
  names: string[];
  /** 状态，（ 可以通过这样的 ts-doc 来添加注释 ） */
  status: 'success' | 'error';
  onClick: (id: number) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  optional?: any;
  btnProps: CommonComponentProps['btnProps'];
};

/** React 组件 */
const ComponentPropsStateRef = ({
  /** 解构并赋值，等价于 defaultProps */
  message = 'hello',
  status,
  btnProps,
}: Props) => {
  /** state 部分 */
  /** 自动推断 state 类型 */
  const [visible, toggle] = useState(false)
  /** state 包含 null 初始值，使用联合类型 */
  const [user1, setUser1] = useState<User | null>(null)
  /** 当 state 在随后会初始化并之后一≥定会有值，可以使用类型断言 */
  const [user2, setUser2] = useState<User>({} as User)

  /** ref 部分 */
  /** 可变值 ref */
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null)
  /** dom 元素 ref */
  const btnRef = useRef<HTMLButtonElement>(null)
  /** 当确定 ref 一定不会为 null，可以使用 non-null 断言 ref */
  const btnRef2 = useRef<HTMLButtonElement>(null!)

  return (
    <div>
      <h1>ComponentPropsStateRef</h1>
      <span>Hello World</span>
      <button ref={btnRef}>Click 1</button>
      <button ref={btnRef2}>Click 2</button>
    </div>
  )
}

export default ComponentPropsStateRef
