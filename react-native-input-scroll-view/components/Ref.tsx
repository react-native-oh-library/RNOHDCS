import {RefObject, useRef} from 'react';

export function Ref<T>({render}: {render: (ref: RefObject<T>) => any}) {
  const ref = useRef<T>(null);
  return render(ref);
}
