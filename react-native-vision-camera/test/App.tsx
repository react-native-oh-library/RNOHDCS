import React, {ReactElement} from 'react';
import {PhotoTestApp} from './Photo/App';
import {CodeScanTestApp} from './CodeScan/App';
import {VideoTestAPP} from './Video/APP';
import {TabNavigator} from '../components/TabNavigator';

const tabs = [
  {title: 'PhotoTestApp', content: <PhotoTestApp />},
  {title: 'CodeScanTestApp', content: <CodeScanTestApp />},
  {title: 'VideoTestAPP', content: <VideoTestAPP />},
];

export const VisionCameraExampleApp = (): ReactElement => {
  return <TabNavigator tabs={tabs} />;
};

export default VisionCameraExampleApp;

