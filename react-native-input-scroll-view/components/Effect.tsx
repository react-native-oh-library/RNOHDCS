import {useEffect} from 'react';

export function Effect({
  onMount,
  children = null,
}: {
  onMount: () => Promise<() => void> | (() => void) | void | Promise<void>;
  children?: any;
}) {
  useEffect(() => {
    let cleanUp: () => void = () => {};
    (async () => {
      const cleanUp_ = await onMount();
      if (cleanUp_) {
        cleanUp = cleanUp_;
      }
    })();
    return () => {
      cleanUp();
    };
  }, []);
  return children;
}
