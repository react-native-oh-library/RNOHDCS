import React from 'react';
import {RecyclerListView} from 'recyclerlistview';
import defaultProps from '../props/defaultProps';

export const API_initialOffset = () => {
  return (
    <RecyclerListView
      {...defaultProps}
      initialOffset={100}
        windowCorrectionConfig={{
          applyToItemScroll: true,
          applyToInitialOffset: true,
          value: {startCorrection: 0, endCorrection: 0, windowShift: 0},
        }}
    />
  );
};

export default API_initialOffset;
