import * as echarts from 'echarts';
const dataArr = [
    { value: 262, name: '视频监控', percentage: 41.85 },
    { value: 24, name: '拍照识别', percentage: 3.84 },
    { value: 20, name: '高空云平台', percentage: 0.32 },
    { value: 338, name: '车位识别', percentage: 53.99 },
];
const color = ['#52a0ec', '#01ff85', '#ff931f', '#f65252'];

// 饼图
export const optionsPie = {
    legend: {
        top: 'center',
        right: '5%',
        orient: 'vertical',
        textStyle: {
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 400,
            rich: {
                name: {
                    color: '#ffffff',
                    fontSize: 14,
                    width: 80,
                    align: 'right',
                },
                value: {
                    color: '#00FF84',
                    fontSize: 14,
                    width: 65,
                    align: 'right',
                },
            },
        },
        itemGap: 15,
        itemWidth: 12,
        itemHeight: 5,
        formatter: function (name) {
            let value = dataArr.find(item => item.name == name).value;
            let percentage = dataArr.find(item => item.name == name).percentage;
            return `{name|${name}}{value|${value}个}{value|${percentage}%}`;
        },
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['23%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                color: function (params) {
                    return color[params.dataIndex];
                },
            },
            label: {
                show: true,
                position: 'center',
                color: '#ffffff',
                fontSize: 16,
                rich: {
                    total: {
                        fontSize: 26,
                        color: '#00FF84',
                    },
                    unit: {
                        fontSize: 12,
                        color: '#00FF84',
                    },
                    text: {
                        fontSize: 12,
                        color: '#ffffff',
                        padding: [4, 0, 0, 0],
                    },
                },
                formatter: function (name) {
                    let total = 0;
                    dataArr.map(item => {
                        total += item.value;
                    });
                    return `{total|${total}}{unit|个}\n{text|总数}`;
                },
            },
            data: dataArr,
        },
    ]
}

// 柱状堆叠图 左
export const optionsStackingLeft = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        backgroundColor: '#001e28',
        borderColor: '#4d989b',
        extraCssText: 'box-shadow: 0 0 4px 4px rgba(77, 152, 155, 0.3);',
        textStyle: {
            color: '#fff',
        },
        formatter: function (params) {
            let text = '';
            let title = `<p style="text-align: left" >${params[0].name}</p>`;
            let total = 0;
            params.map(item => {
                if (!item.seriesName.includes('series')) {
                    total += item.value;
                    text += `<p style="text-align: left">${item.marker}${item.seriesName}：${item.value}</p>`;
                }
            });
            let totalHtm = `<p style="text-align: left" >总计：${total}</p>`;
            return title + text + totalHtm;
        },
    },
    legend: {
        top: '1%',
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
            color: '#ffffff',
        },
        selectedMode: false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#ffffff',
        },
        data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层'],
    },
    yAxis: {
        name: '(单位：个)',
        nameTextStyle: {
            color: '#CCCCCC',
        },
        type: 'value',
        axisLabel: {
            color: '#ffffff',
        },
        axisLine: {
            show: true,
        },
    },
    series: [
        {
            name: '离线',
            type: 'bar',
            stack: 'total',
            barWidth: "40%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(141, 143, 137, 1)',
                    },

                    {
                        offset: 1,
                        color: 'rgba(141, 143, 137, 0.43)',
                    },
                ]),
            },
            data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
            name: '空闲',
            type: 'bar',
            stack: 'total',
            barWidth: "40%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(30, 254, 149, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(30, 254, 149, 0.43)',
                    },
                ]),
            },
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: '未充电',
            type: 'bar',
            stack: 'total',
            barWidth: "40%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(240, 152, 41, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(240, 152, 41, 0.43)',
                    },
                ]),
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: '已充电',
            type: 'bar',
            stack: 'total',
            barWidth: "40%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(0, 221, 249, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 221, 249, 0.43)',
                    },
                ]),
            },
            data: [150, 212, 201, 154, 190, 330, 410],
        },
        {
            name: '故障',
            type: 'bar',
            stack: 'total',
            barWidth: "40%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(252, 80, 80, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(252, 80, 80, 0.43)',
                    },
                ]),
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
        },
        {
            type: 'bar',
            stack: '',
            barGap: '-100%',
            barWidth: "40%",
            label: {
                color: '#ffffff',
                show: true,
                position: 'top',
            },
            itemStyle: {
                color: " rgba(128, 128, 128, 0)"
            },
            data: [1630, 1660, 1695, 1790, 2250, 2550, 2570],
        },
    ],
}

// 柱状堆叠图 右
export const optionsStackingRight = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        backgroundColor: '#001e28',
        borderColor: '#4d989b',
        extraCssText: 'box-shadow: 0 0 4px 4px rgba(77, 152, 155, 0.3);',
        textStyle: {
            color: '#fff',
        },
        formatter: function (params) {
            let text = '';
            let title = `<p style="text-align: left" >${params[0].name}</p>`;
            let total = 0;
            params.map(item => {
                if (!item.seriesName.includes('series')) {
                    total += item.value;
                    text += `<p style="text-align: left">${item.marker}${item.seriesName}：${item.value}</p>`;
                }
            });
            let totalHtm = `<p style="text-align: left" >总计：${total}</p>`;
            return title + text + totalHtm;
        },
    },
    legend: {
        top: '1%',
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
            color: '#ffffff',
        },
        selectedMode: false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#ffffff',
        },
        data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层'],
    },
    yAxis: {
        name: '(单位：个)',
        nameTextStyle: {
            color: '#CCCCCC',
        },
        type: 'value',
        axisLabel: {
            color: '#ffffff',
        },
        axisLine: {
            show: true,
        },
    },
    series: [
        {
            name: '已占用泊位数量',
            type: 'bar',
            stack: 'total',
            barWidth: "40%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(33, 105, 229, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(33, 105, 229, 0.43)',
                    },
                ]),
            },
            data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
            name: '未占用泊位数量',
            type: 'bar',
            stack: 'total',
            barWidth: "40%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(5, 47, 72, 1)',
                    },

                    {
                        offset: 1,
                        color: 'rgba(5, 47, 72, 0.43)',
                    },
                ]),
            },
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            type: 'bar',
            stack: '',
            barGap: '-100%',
            barWidth: "40%",
            label: {
                color: '#ffffff',
                show: true,
                position: 'top',
            },
            itemStyle: {
                color: " rgba(128, 128, 128, 0)"
            },
            data: [440, 434, 402, 468, 480, 560, 530],
        },
    ],
}

// 折线图
export const optionsFold = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: "rgba(92, 207, 215, 1)",
                type: 'solid',
                width: 2,
            }
        },
        backgroundColor: '#001e28',
        borderColor: '#4d989b',
        extraCssText: 'box-shadow: 0 0 4px 4px rgba(77, 152, 155, 0.3);',
        textStyle: {
            color: '#fff',
        },
        formatter: function (params) {
            let text = '';
            let title = `<p style="text-align: left" >${params[0].name}</p>`;
            let total = 0;
            params.map(item => {
                total += item.value;
                text += `<p style="text-align: left">${item.marker}${item.seriesName}：${item.value}</p>`;
            });
            let totalHtm = `<p style="text-align: left" >总计：${total}</p>`;
            return title + text + totalHtm;
        },
    },
    legend: {
        top: '1%',
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
            color: '#ffffff',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#ffffff',
        },
        data: [
            '1h',
            '2h',
            '3h',
            '4h',
            '5h',
            '6h',
            '7h',
            '8h',
            '9h',
            '10h',
            '11h',
            '12h',
            '13h',
            '14h',
            '15h',
            '16h',
            '17h',
            '18h',
            '19h',
            '20h',
            '21h',
            '22h',
            '23h',
            '24h',
        ],
    },
    yAxis: {
        name: '(单位：车次)',
        nameTextStyle: {
            color: '#CCCCCC',
        },
        type: 'value',
        axisLabel: {
            color: '#ffffff',
        },
        axisLine: {
            show: true,
        },
    },
    series: [
        {
            name: '出场车流量',
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(66, 205, 138, 0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(66, 205, 138, 0.3)',
                    },
                ]),
            },
            itemStyle: {
                color: 'rgba(66, 205, 138, 1)',
            },
            data: [100, 200, 300, 257, 211, 125, 156, 100, 200, 300, 257, 211, 125, 156, 100, 200, 300, 257, 211, 125, 156, 211, 125, 156],
        },
        {
            name: '入场车流量',
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(211, 204, 87, 0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(211, 204, 87, 0.3)',
                    },
                ]),
            },
            itemStyle: {
                color: 'rgba(211, 204, 87, 1)',
            },
            data: [320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330, 320, 320, 302, 301],
        },
    ],
}

// 柱状图
export const optionsStacking = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        backgroundColor: '#001e28',
        borderColor: '#4d989b',
        extraCssText: 'box-shadow: 0 0 4px 4px rgba(77, 152, 155, 0.3);',
        textStyle: {
            color: '#fff',
        },
        formatter: function (params) {
            let text = '';
            let title = `<p style="text-align: left" >${params[0].name}</p>`;
            let total = 0;
            params.map(item => {
                total += item.value;
                text += `<p style="text-align: left">${item.marker}${item.seriesName}：${item.value}</p>`;
            });
            return title + text;
        },
    },
    legend: {
        top: '1%',
        itemWidth: 15,
        itemHeight: 15,
        show: false,
        textStyle: {
            color: '#ffffff',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#ffffff',
        },
        data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层'],
    },
    yAxis: {
        name: '(单位：m²)',
        nameTextStyle: {
            color: '#CCCCCC',
        },
        type: 'value',
        axisLabel: {
            color: '#ffffff',
        },
        axisLine: {
            show: true,
        },
    },
    series: [
        {
            name: '场务用房面积',
            type: 'bar',
            stack: 'total',
            barWidth: "40%",
            label: {
                color: '#ffffff',
                show: true,
                position: 'top',
            },
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(0, 205, 106, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 205, 106, 0.43)',
                    },
                ]),
            },
            data: [320, 302, 301, 334, 390, 330, 320],
        }
    ],
}

//圆柱堆叠柱状图
export const optionsCylinder = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#ffffff',
        },
        data: ['公交车位', '小车车位', '维修车位'],
    },
    yAxis: {
        name: '(车位)',
        nameTextStyle: {
            color: '#CCCCCC',
        },
        type: 'value',
        axisLabel: {
            color: '#ffffff',
        },
        axisLine: {
            show: true,
        },
    },
    series: [
        // 数据的柱状图
        {
            name: '',
            type: 'bar',
            stack: 'total',
            barGap: '-100%',
            barWidth: 30,
            itemStyle: {
                color: 'rgba(37, 255, 252, 0.6)'
            },
            label: {
                color: '#ffffff',
                show: true,
                fontSize: 16,
                offset: [0, 4],
            },
            data: [154, "", ""]
        },
        {
            name: '',
            type: 'bar',
            stack: 'total',
            barGap: '-100%',
            barWidth: 30,
            itemStyle: {
                color: 'rgba(249, 255, 35, 0.6)'
            },
            label: {
                color: '#ffffff',
                show: true,
                fontSize: 16,
                offset: [0, 4],
            },
            data: [348, "", ""]
        },
        {
            name: '',
            type: 'bar',
            stack: 'total',
            barGap: '-100%',
            barWidth: 30,
            itemStyle: {
                color: 'rgba(35, 93, 252, 0.6)'
            },
            label: {
                color: '#ffffff',
                show: true,
                fontSize: 16,
                offset: [0, 4],
            },
            data: [76, "", ""]
        },
        {
            name: '',
            type: 'bar',
            stack: 'total',
            barGap: '-100%',
            barWidth: 30,
            itemStyle: {
                color: (page) => {
                    if (page.name == "小车车位") {
                        return 'rgba(45, 225, 141, 0.6)'
                    } else if (page.name == "维修车位") {
                        return 'rgba(217, 84, 90, 0.6)'
                    }
                }
            },
            label: {
                color: '#ffffff',
                show: true,
                fontSize: 16,
                offset: [0, 1],
                position: 'top',
            },
            data: ["", 50, 11]
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'circle',
            symbolPosition: 'end',
            symbolSize: [30, 15],
            symbolOffset: [0, -4],
            z: 3,
            itemStyle: {
                color: 'rgba(35, 93, 252, 1)',
            },
            data: [578, '', '']
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'circle',
            symbolPosition: 'end',
            symbolSize: [30, 15],
            symbolOffset: [0, -4],
            z: 3,
            itemStyle: {
                color: 'rgba(35, 93, 252, 1)',
            },
            data: [499, '', '']
        },
        // 最上边
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'circle',
            symbolPosition: 'end',
            symbolSize: [30, 15],
            symbolOffset: [0, -4],
            z: 3,
            itemStyle: {
                color: (page) => {
                    if (page.name == "公交车位") {
                        return 'rgba(37, 255, 252, 1)'
                    } else if (page.name == "小车车位") {
                        return 'rgba(45, 225, 141, 1)'
                    } else if (page.name == "维修车位") {
                        return 'rgba(217, 84, 90, 1)'
                    }
                }
            },
            data: [154, 50, 11]
        },

        // 最底下
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 15], // 宽，高
            symbolOffset: [0, 4], // 左 上
            z: 3,
            symbol: 'circle',
            itemStyle: {
                color: (page) => {
                    if (page.name == "公交车位") {
                        return 'rgba(37, 255, 252, 1)'
                    } else if (page.name == "小车车位") {
                        return 'rgba(45, 225, 141, 1)'
                    } else if (page.name == "维修车位") {
                        return 'rgba(217, 84, 90, 1)'
                    }
                }
            },
            data: [0, 0, 0]
        },
    ]
}

//圆柱柱状图
export const optionsDepotOperations = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#ffffff',
        },
        data: ['东部公交', '西部公汽', '巴士集团'],
    },
    yAxis: {
        name: '(单位：个)',
        nameTextStyle: {
            color: '#CCCCCC',
        },
        type: 'value',
        axisLabel: {
            color: '#ffffff',
        },
        axisLine: {
            show: true,
        },
    },
    series: [
        // 数据的柱状图
        {
            name: '',
            type: 'bar',
            stack: 'total',
            barGap: '-100%',
            barWidth: 30,
            itemStyle: {
                color: (page) => {
                    if (page.name == "东部公交") {
                        return 'rgba(37, 255, 252, 0.6)'
                    } else if (page.name == "西部公汽") {
                        return 'rgba(45, 225, 141, 0.6)'
                    } else if (page.name == "巴士集团") {
                        return 'rgba(217, 84, 90, 0.6)'
                    }
                }
            },
            label: {
                color: '#ffffff',
                show: true,
                fontSize: 16,
                offset: [0, 1],
                position: 'top',
            },
            data: [38, 61, 241]
        },
        //  最上边
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'circle',
            symbolPosition: 'end',
            symbolSize: [30, 15],
            symbolOffset: [0, -4],
            z: 3,
            itemStyle: {
                color: (page) => {
                    if (page.name == "东部公交") {
                        return 'rgba(37, 255, 252, 1)'
                    } else if (page.name == "西部公汽") {
                        return 'rgba(45, 225, 141, 1)'
                    } else if (page.name == "巴士集团") {
                        return 'rgba(217, 84, 90, 1)'
                    }
                }
            },
            data: [38, 61, 241]
        },

        // 最底下
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 15], // 宽，高
            symbolOffset: [0, 4], // 左 上
            z: 3,
            symbol: 'circle',
            itemStyle: {
                color: (page) => {
                    if (page.name == "东部公交") {
                        return 'rgba(37, 255, 252, 1)'
                    } else if (page.name == "西部公汽") {
                        return 'rgba(45, 225, 141, 1)'
                    } else if (page.name == "巴士集团") {
                        return 'rgba(217, 84, 90, 1)'
                    }
                }
            },
            data: [0, 0, 0]
        },
    ]
}

// 折线图
export const optionsStatistics = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: "rgba(92, 207, 215, 1)",
                type: 'solid',
                width: 2,
            }
        },
        backgroundColor: '#001e28',
        borderColor: '#4d989b',
        extraCssText: 'box-shadow: 0 0 4px 4px rgba(77, 152, 155, 0.3);',
        textStyle: {
            color: '#fff',
        },
        formatter: function (params) {
            let text = '';
            let title = `<p style="text-align: left" >${params[0].name}</p>`;
            let total = 0;
            params.map(item => {
                total += item.value;
                text += `<p style="text-align: left">${item.marker}${item.seriesName}：${item.value}</p>`;
            });
            let totalHtm = `<p style="text-align: left" >总计：${total}</p>`;
            return title + text + totalHtm;
        },
    },
    legend: {
        top: '1%',
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
            color: '#ffffff',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#ffffff',
        },
        data: [
            '1h',
            '2h',
            '3h',
            '4h',
            '5h',
            '6h',
            '7h',
            '8h',
            '9h',
            '10h',
            '11h',
            '12h',
            '13h',
            '14h',
            '15h',
            '16h',
            '17h',
            '18h',
            '19h',
            '20h',
            '21h',
            '22h',
            '23h',
            '24h',
        ],
    },
    yAxis: {
        name: '(单位：辆)',
        nameTextStyle: {
            color: '#CCCCCC',
        },
        type: 'value',
        axisLabel: {
            color: '#ffffff',
        },
        axisLine: {
            show: true,
        },
    },
    series: [
        {
            name: '进场车辆数',
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(66, 205, 138, 0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(66, 205, 138, 0.3)',
                    },
                ]),
            },
            itemStyle: {
                color: 'rgba(66, 205, 138, 1)',
            },
            data: [100, 200, 300, 257, 211, 125, 156, 100, 200, 300, 257, 211, 125, 156, 100, 200, 300, 257, 211, 125, 156, 211, 125, 156],
        },
        {
            name: '离场车辆数',
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(211, 204, 87, 0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(211, 204, 87, 0.3)',
                    },
                ]),
            },
            itemStyle: {
                color: 'rgba(211, 204, 87, 1)',
            },
            data: [320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330, 320, 320, 302, 301],
        },
    ],
}

