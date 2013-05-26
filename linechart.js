LineChart = function(options) {
    this.schema = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            style: {
                fontFamily: 'Arial',
                fontSize: '12px'
            },
            renderTo: options.elementId,
            type: 'line',
            height: 600
        },
        colors: [ '#4572A7', '#AA4643', '#89A54E', '#80699B'],
        column: {
            stacking: 'normal',
            shadow: false,
            borderWidth: 0,
            groupPadding: 0.2,
            pointPadding: 0.05,
            grouping: true
        },
        legend: { enabled: false},
        plotOptions: {
            floating: false,
            backgroundColor: null,
            borderWidth: 0,
            line: {
                shadow: false
            }
        },
        title: {
            text: "beer"
        },
        tooltip: {
            crosshairs: true,
            shared: true,
        },
        xAxis: {
            type: 'datetime',
            title: {},
            dateTimeLabelFormats: {
                minute: '%H:%M:%S',
            },
            tickmarkPlacement: 'on',
            labels: {
                y: 20
            },
            endOnTick: false
        },
        yAxis: {
            title: {
                text: "In Degrees Farenheit"
            }
        },
        series: []
    };
};

LineChart.prototype.transformPoints = function (tweets) {
    var data = _.map(tweets, function(tweet) {
        return [tweet.time, parseFloat(tweet.temp)];
    });
    data = _.sortBy(data, function(tweet) { return tweet[0]; });
    return [{"name": "beer",
            "data": data}];
};

LineChart.prototype.setData = function (tweets) {
    this.schema.series = this.transformPoints(tweets);
};

LineChart.prototype.render = function() {
    this.highChart = new Highcharts.Chart(this.schema);
};

