// 环形图
export const huanxing = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }
    ]
}

// 地图
export const ditu = {
    geo: [
        {
            type: "map",
            map: "world",
            mapType: "world",
            selectedMode: "single",
            itemStyle: {
                normal: {
                    areaStyle: { color: "#B1D0EC" },
                    color: "#eeeeee",
                    borderColor: "#dadfde",
                },
                emphasis: {
                    label: {
                        show: true,
                        textStyle: {
                            color: "#000000",
                        },
                    },
                },
            },
            roam: true,
        },
    ],
    series: {
        type: "effectScatter",
        coordinateSystem: "geo",
        geoIndex: 0,
        itemStyle: {
            color: "red",
        },
        data: [[116.4551, 40.2539, 10]],
    },
}

// 堆叠折线图
export const duidiezhexian = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Direct', 'Search Engine']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

// 折线图
export const zhexian =  {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Direct', 'Search Engine']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            itemStyle: { color: '#ffdd59' },
            data: [400, 350, 300, 450, 400, 350, 300]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            itemStyle: { color: '#ff9f1a' },
            data: [500, 550, 500, 600, 650, 600, 550]
        }
    ]
};


// 柱状图
export const zhuzhuang = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }
    ]
};

// 极坐标系
export const jizuobiao = {
    polar: {
        radius: [30, '80%']
    },
    radiusAxis: {
        max: 4
    },
    angleAxis: {
        type: 'category',
        data: ['a', 'b', 'c', 'd'],
        startAngle: 75
    },
    tooltip: {},
    series: {
        type: 'bar',
        data: [2, 1.2, 2.4, 3.6],
        coordinateSystem: 'polar',
        label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}'
        }
    },
    animation: false
};

// 散点图
export const sandian = {
    xAxis: {},
    yAxis: {},
    series: [
        {
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.07, 6.95],
                [13.0, 7.58],
                [9.05, 8.81],
                [11.0, 8.33],
                [14.0, 7.66],
                [13.4, 6.81],
                [10.0, 6.33],
                [14.0, 8.96],
                [12.5, 6.82],
                [9.15, 7.2],
                [11.5, 7.2],
                [3.03, 4.23],
                [12.2, 7.83],
                [2.02, 4.47],
                [1.05, 3.33],
                [4.05, 4.96],
                [6.03, 7.24],
                [12.0, 6.26],
                [12.0, 8.84],
                [7.08, 5.82],
                [5.02, 5.68]
            ],
            type: 'scatter'
        }
    ]
};

// k线图
export const kxian = {
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [
        {
            type: 'candlestick',
            data: [
                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 5, 42]
            ]
        }
    ]
};

// 雷达图
export const leida = {
    legend: {
        data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
        indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: 'Allocated Budget'
                },
                {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: 'Actual Spending'
                }
            ]
        }
    ]
};

// 盒须图
export const hexu = {
    dataset: [
        {
            // prettier-ignore
            source: [
                [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
                [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
                [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
                [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
            ]
        },
        {
            transform: {
                type: 'boxplot',
                config: { itemNameFormatter: 'expr {value}' }
            }
        },
        {
            fromDatasetIndex: 1,
            fromTransformResult: 1
        }
    ],
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: 'km/s minus 299,000',
        splitArea: {
            show: true
        }
    },
    series: [
        {
            name: 'boxplot',
            type: 'boxplot',
            datasetIndex: 1
        },
        {
            name: 'outlier',
            type: 'scatter',
            datasetIndex: 2
        }
    ]
};

// 关系图
export const guanxi = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [
                {
                    name: 'Node 1',
                    x: 300,
                    y: 300
                },
                {
                    name: 'Node 2',
                    x: 800,
                    y: 300
                },
                {
                    name: 'Node 3',
                    x: 550,
                    y: 100
                },
                {
                    name: 'Node 4',
                    x: 550,
                    y: 500
                }
            ],
            // links: [],
            links: [
                {
                    source: 0,
                    target: 1,
                    symbolSize: [5, 20],
                    label: {
                        show: true
                    },
                    lineStyle: {
                        width: 5,
                        curveness: 0.2
                    }
                },
                {
                    source: 'Node 2',
                    target: 'Node 1',
                    label: {
                        show: true
                    },
                    lineStyle: {
                        curveness: 0.2
                    }
                },
                {
                    source: 'Node 1',
                    target: 'Node 3'
                },
                {
                    source: 'Node 2',
                    target: 'Node 3'
                },
                {
                    source: 'Node 2',
                    target: 'Node 4'
                },
                {
                    source: 'Node 1',
                    target: 'Node 4'
                }
            ],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    ]
};

// 矩形图
export const juxing = {
    series: [
        {
            type: 'treemap',
            data: [
                {
                    name: 'nodeA',
                    value: 10,
                    children: [
                        {
                            name: 'nodeAa',
                            value: 4
                        },
                        {
                            name: 'nodeAb',
                            value: 6
                        }
                    ]
                },
                {
                    name: 'nodeB',
                    value: 20,
                    children: [
                        {
                            name: 'nodeBa',
                            value: 20,
                            children: [
                                {
                                    name: 'nodeBa1',
                                    value: 20
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// 旭日图
export const xuri = {
    series: {
        type: 'sunburst',
        data: [
            {
                name: 'Grandpa',
                children: [
                    {
                        name: 'Uncle Leo',
                        value: 15,
                        children: [
                            {
                                name: 'Cousin Jack',
                                value: 2
                            },
                            {
                                name: 'Cousin Mary',
                                value: 5,
                                children: [
                                    {
                                        name: 'Jackson',
                                        value: 2
                                    }
                                ]
                            },
                            {
                                name: 'Cousin Ben',
                                value: 4
                            }
                        ]
                    },
                    {
                        name: 'Father',
                        value: 10,
                        children: [
                            {
                                name: 'Me',
                                value: 5
                            },
                            {
                                name: 'Brother Peter',
                                value: 1
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Nancy',
                children: [
                    {
                        name: 'Uncle Nike',
                        children: [
                            {
                                name: 'Cousin Betty',
                                value: 1
                            },
                            {
                                name: 'Cousin Jenny',
                                value: 2
                            }
                        ]
                    }
                ]
            }
        ],
        radius: [0, '90%'],
        label: {
            rotate: 'radial'
        }
    }
};

// 坐标系
export const zuobiao = {
    parallelAxis: [
        { dim: 0, name: 'Price' },
        { dim: 1, name: 'Net Weight' },
        { dim: 2, name: 'Amount' },
        {
            dim: 3,
            name: 'Score',
            type: 'category',
            data: ['Excellent', 'Good', 'OK', 'Bad']
        }
    ],
    series: {
        type: 'parallel',
        lineStyle: {
            width: 4
        },
        data: [
            [12.99, 100, 82, 'Good'],
            [9.99, 80, 77, 'OK'],
            [20, 120, 60, 'Excellent']
        ]
    }
};

// 桑基图
export const sangji = {
    series: {
        type: 'sankey',
        layout: 'none',
        emphasis: {
            focus: 'adjacency'
        },
        data: [
            {
                name: 'a'
            },
            {
                name: 'b'
            },
            {
                name: 'a1'
            },
            {
                name: 'a2'
            },
            {
                name: 'b1'
            },
            {
                name: 'c'
            }
        ],
        links: [
            {
                source: 'a',
                target: 'a1',
                value: 5
            },
            {
                source: 'a',
                target: 'a2',
                value: 3
            },
            {
                source: 'b',
                target: 'b1',
                value: 8
            },
            {
                source: 'a',
                target: 'b1',
                value: 3
            },
            {
                source: 'b1',
                target: 'a1',
                value: 1
            },
            {
                source: 'b1',
                target: 'c',
                value: 2
            }
        ]
    }
};

// 漏斗图
export const loudou = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    },
    series: [
        {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' },
                { value: 80, name: 'Click' },
                { value: 100, name: 'Show' }
            ]
        }
    ]
};


// 仪表盘
export const yibiaopan = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
            name: 'Pressure',
            type: 'gauge',
            detail: {
                formatter: '{value}'
            },
            data: [
                {
                    value: 50,
                    name: 'SCORE'
                }
            ]
        }
    ]
};