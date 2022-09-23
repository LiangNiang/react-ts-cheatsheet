import { useContext, useEffect } from 'react'
import { ButtonGroup } from '../components'
import {
  AppContextComplex,
  AppContextComplexProvider,
  AppContextSimple,
  sampleCtxValue,
} from './context'

const ContextDemoSimple = () => {
  const appContext = useContext(AppContextSimple)
  return (
    <div>
      <h1>Context Demo Simple</h1>
      <ul>
        <li>name: {appContext?.name}</li>
        <li>age: {appContext?.age}</li>
        <li>sex: {appContext?.sex}</li>
      </ul>
    </div>
  )
}

export const WrapperSimple = () => {
  return (
    <AppContextSimple.Provider value={sampleCtxValue}>
      <ContextDemoSimple />
    </AppContextSimple.Provider>
  )
}

const ContextDemoComplex = () => {
  const { state, update } = useContext(AppContextComplex)
  useEffect(() => {
    setTimeout(() => {
      update((s) => ({
        information: { ...s.information, address: 'dsafasdfs' },
      }))
    }, 1500)
  }, [])
  return (
    <div>
      <h1>Context Demo Complex</h1>
      <div>
        <ButtonGroup>
          <button onClick={() => update({ name: 'aaa' })}>
            update name to aaa
          </button>
          <button onClick={() => update((s) => ({ age: s.age + 1 }))}>
            update age to age + 1
          </button>
          <button onClick={() => update({ sex: 'female' })}>
            update sex to female
          </button>
          <button
            onClick={() =>
              update((s) => ({
                information: {
                  ...s.information,
                  friends: [
                    ...s.information?.friends ?? [],
                    { name: 'bbb', age: 30 },
                  ],
                },
              }))
            }
          >
            Add friend
          </button>
        </ButtonGroup>
      </div>
      <ul>
        <li>name: {state.name}</li>
        <li>age: {state.age}</li>
        <li>sex: {state.sex}</li>
        <li>address: {state.information?.address}</li>
        <li>
          friend:{' '}
          {state.information?.friends?.map((f, i) => (
            <span key={i}>
              name: {f.name} && age: {f.age}
            </span>
          ))}
        </li>
      </ul>
    </div>
  )
}

export const WrapperComplex = () => {
  return (
    <AppContextComplexProvider>
      <ContextDemoComplex />
    </AppContextComplexProvider>
  )
}
