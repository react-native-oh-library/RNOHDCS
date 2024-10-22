import React, {ReactElement} from 'react';

import {TabNavigator} from '../components/TabNavigator';
import { DropdownTestApp } from './Dropdown/App';
import { MultiSelectTestApp } from './MultiSelect/App';
import { SelectCountryTestApp } from './SelectCountry/App';

const tabs = [
  {title: 'DropdownTest', content: <DropdownTestApp />},
  {title: 'MultiSelectTest', content: <MultiSelectTestApp />},
  {title: 'SelectCountryTest', content: <SelectCountryTestApp />},

];

export const DropdownTestExample = (): ReactElement => {
  return <TabNavigator tabs={tabs} />;
};

