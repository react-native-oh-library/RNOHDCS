import {useState} from 'react';

export function StateKeeper<T>(props: {
  initialValue: T;
  renderContent: (
    value: T | undefined,
    setValue: React.Dispatch<React.SetStateAction<T>>,
  ) => void;
}) {
  const [value, setValue] = useState<T>(props.initialValue);

  return <>{props.renderContent(value, setValue)}</>;
}
