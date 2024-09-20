import {ContextProvider} from 'recyclerlistview';

export class ContextProviderInstance extends ContextProvider {
  api: string;
  key: number;

  constructor(props: any) {
    super();
    this.api = props.api;
    this.key = props.key;
  }

  getUniqueKey = () => {
    return this.key.toString();
  };

  setKey = (key: any) => {
    this.key = key;
  };

  save = (key: any, value: any) => {};

  get = (key: any) => {
    return Number(key.slice(0, 3));
  };

  remove = (key: any) => {};
}
