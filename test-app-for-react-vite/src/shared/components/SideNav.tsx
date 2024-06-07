import { useRef, useState } from "react";
import { Transition } from "react-transition-group";

interface SideNavProps {
    children: JSX.Element | JSX.Element[];
}

const duration = 300;

const defaultStyle = {
  transition: `left ${duration}ms ease-in-out`,
  left: '0px'
}

const transitionStyles = {
  entering:{ left: '0px'},
  entered:  { left: '-300px'},
  exiting:  { left: '0px'},
  exited:  { left: '0px'},
  unmounted:  { left: '0px'},
};

function SideNav({ children}: SideNavProps) {
    const nodeRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <search className="flex">
        <Transition nodeRef={nodeRef} in={isOpen} timeout={duration}>
        {(state) => (
            <nav className="w-[300px] bg-slate-300 absolute left-0 h-screen border-r border-gray-200 dark:border-gray-600 p-4" 
            style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
                <ul>
                    <li>Home {state}</li>
                    <li>About</li>
                </ul>
                
            </nav>
        )}
        </Transition>
        <aside className={`flex-1 p-4 transition-all ${isOpen ? '' : 'ps-[300px]'}`}>
            <button onClick={() => setIsOpen(open => !open)}>Open Close</button>
            {children}
        </aside>
    </search>
  );
}

export default SideNav;