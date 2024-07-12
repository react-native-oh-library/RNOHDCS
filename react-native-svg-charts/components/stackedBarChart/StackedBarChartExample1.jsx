import React from 'react';
import { Grid, StackedBarChart, YAxis } from 'react-native-svg-charts';

import { stackedDatas, stackesKeys } from '../../genUtil';

class StackedBarChartExample extends React.PureComponent {
    render() {
        const data = [...stackedDatas];
        const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6'];
        const keys = [...stackesKeys];

        return (
            <StackedBarChart
                style={{ height: 200 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                contentInset={{ top: 10, bottom: 10 }}
                order={this.props.order ? this.props.order : null}
                offset={this.props.offset ? this.props.offset : null}
            >
                <Grid></Grid>
            </StackedBarChart>

        )
    }
};

export default StackedBarChartExample;