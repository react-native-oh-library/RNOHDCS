import React, {ReactElement} from 'react';
import {PhotoTest} from './Photo/PhotoTest';
import {CodeScanTest} from './CodeScan/CodeScanTest';
import {VideoTest} from './Video/VideoTest';
import {TabNavigator} from '../components/TabNavigator';

const tabs = [
  {title: 'PhotoTest', content: <PhotoTest />},
  {title: 'CodeScanTest', content: <CodeScanTest />},
  {title: 'VideoTest', content: <VideoTest />},
];

export const VisionCameraExampleApp = (): ReactElement => {
  return <TabNavigator tabs={tabs} />;
};

export default VisionCameraExampleApp;
