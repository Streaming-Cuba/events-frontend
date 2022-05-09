import React from "react";
import { Transition } from "react-transition-group";

interface CustomFdeProps {
    inProp: boolean
    children: JSX.Element,
    duration?: number,
    maxOpacity?: number
    minOpacity?: number
}
const CustomFade = ({children, inProp, duration = 1000, maxOpacity = 1, minOpacity = 0}: CustomFdeProps): JSX.Element => {

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: maxOpacity },
    entered:  { opacity: maxOpacity },
    exiting:  { opacity: minOpacity },
    exited:  { opacity: minOpacity },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  );
};

export default CustomFade;
