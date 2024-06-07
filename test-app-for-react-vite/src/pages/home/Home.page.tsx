import { Transition, CSSTransition, SwitchTransition } from 'react-transition-group';
import { useState, useRef } from 'react';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
  unmounted:  { opacity: 0 },
};

function HomePage() {
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    const nodeRef2 = useRef(null);
    const nodeRef3 = useRef(null);
    const [state, setState] = useState(false);

  const handleClick = () => {
    setInProp(() => !inProp)
  }
  return (
    <div className='pt-[100px]'>
      <h1>Home Page</h1>
      <div>
        <Transition nodeRef={nodeRef} in={inProp} timeout={3000}>
          {(state: any) => (
            <div>{state}</div>
          )}
        </Transition>
        <button onClick={handleClick}>
          Click to Enter
        </button>
      </div>
      <div>
        <Transition nodeRef={nodeRef2} in={inProp} timeout={duration}>
          {(state) => (
            <div ref={nodeRef} style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              I'm a fade Transition! {state}
            </div>
          )}
        </Transition>
      </div>
      <div>
      <SwitchTransition>
        <CSSTransition
          key={state ? "Goodbye, world!" : "Hello, world!"}
          nodeRef={nodeRef3}
          addEndListener={(done: () => void) => {
            (nodeRef3.current as HTMLElement | null)?.addEventListener("transitionend", done, false)
          }}
          classNames='fade'
        >
          <button ref={nodeRef3} onClick={() => setState(state => !state)}>
            {state ? "Goodbye, world!" : "Hello, world!"}
          </button>
        </CSSTransition>
      </SwitchTransition>
      </div>
    </div>
  );
}
export default HomePage;