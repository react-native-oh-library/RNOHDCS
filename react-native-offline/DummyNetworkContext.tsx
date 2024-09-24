import React from 'react';

interface Context {
  toggleConnection: () => void;
  pingUrl: string;
}

const DummyNetworkContext = React.createContext<Context>({
  pingUrl: 'https://www.baidu.com',
  toggleConnection: () => {},
});
export default DummyNetworkContext;
