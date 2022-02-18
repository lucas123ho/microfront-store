import { useState, useEffect } from "react";

export function useGlobalState(eventName, defaultValue = null) {
  const [state, setState] = useState(defaultValue);

  const handleChangeState = (value) => {
    setState(value);
    window.dispatchEvent(new CustomEvent(eventName, { detail: value }));
  };

  useEffect(() => {
    window.addEventListener(eventName, (e) => {
      setState(e.detail);
    });

    return () => {
      window.removeEventListener(eventName);
    };
  }, [eventName, setState]);

  return [state, handleChangeState];
}
