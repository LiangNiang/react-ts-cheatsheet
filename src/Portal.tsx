/* eslint-disable react/no-unescaped-entities */
import { Component, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.querySelector('#modal-root')!

// class component Modal
export class Modal extends Component<PropsWithChildren> {
  el: HTMLElement = document.createElement('div')

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    return createPortal(children, this.el)
  }
}

// functional component Modal
export function Modal2({ children }: PropsWithChildren) {
  const elRef = useRef<HTMLDivElement | null>(null)
  if (!elRef.current) elRef.current = document.createElement('div')

  useEffect(() => {
    const el = elRef.current!
    modalRoot.appendChild(el)
    return () => {
      modalRoot.removeChild(el)
    }
  }, [])

  return createPortal(children, elRef.current)
}

const ModalDemo = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <h1>Portal Demo</h1>
      {
        showModal ? (
          <Modal2>
            <div
              style={{
                display: 'grid',
                placeItems: 'center',
                height: '100vh',
                width: '100vh',
                background: 'rgba(0,0,0,0.1)',
                zIndex: 99,
              }}
            >
            I'm a modal!{' '}
              <button
                style={{ background: 'papyawhip' }}
                onClick={() => setShowModal(false)}
              >
              close
              </button>
            </div>
          </Modal2>
        ) : <button onClick={() => setShowModal(true)}>show Modal</button>
      }
    </>
  )
}

export default ModalDemo
