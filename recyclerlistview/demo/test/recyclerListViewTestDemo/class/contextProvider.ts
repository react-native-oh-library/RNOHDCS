import {ContextProvider} from 'recyclerlistview';

export class ContextProviderInstance extends ContextProvider {
  api: string;

  constructor(props) {
    super();
    this.api = props.api;
  }

  getUniqueKey = () => {
    return this.api;
  };

  save = (key, value) => {};

  get = key => {
    return this.api;
  };

  remove = key => {};
}
