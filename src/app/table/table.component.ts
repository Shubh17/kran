import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts'; // this is needed!
import d3 from 'd3'

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})


// "name": "Shroud",
//     "type": "Twitch",
//         "positive": 0.006934772,
//             "negative": 0.8824574,
//                 "neutral": 0.88304573,
//                     "mixed": 0.8830457,
//                         "volume": 1224,
//                             "updateTime": 1541850512


export class TableComponent implements OnInit {

    // }
    ngOnInit() {
        var dataSales = {
            labels: ['0', '1.5', '3.0'],
            series: [
                [.006934772, .8824574, .8830457],
                [.00772, 1.84574, .8340457],
                [.570657, .0210657, .3070657],
                [.06380893, 0.003554132, .004333],

                
                // [67, 152, 193, 240, 387, 435, 535, 642, 744],
                // [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };


        var optionsSales = {
            low: 0,
            high: 2,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };

        var responsiveSales: any[] = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        let donutChartData = [{
            id: 0, // number
            label: 'label name',  // string
            value: 2,  // number
            color: 'color of slice',  // string,
            iconImage: 'path of image' // string
        }, {
            id: 1, // number
            label: 'label name',  // string
            value: 2,  // number
            color: 'color of slice',  // string,
            iconImage: 'path of image' // string
        }
        ]

        new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
                
            ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        new Chartist.Line('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        new Chartist.Pie('#chartPreferences', {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        });
    }
}
