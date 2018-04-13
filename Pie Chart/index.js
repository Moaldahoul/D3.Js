// JavaScript
let data = [
    {"platform": "Android", "percentage": 35.11},
    {"platform": "Windows", "percentage": 37.69},
    {"platform": "iOS", "percentage": 17.06},
    {"platform": "NOKIA", "percentage": 10.14}
];

let svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;
let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Create group element to hold pie chart
let g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

let color = d3.scaleOrdinal(d3.schemeCategory20);

let pie = d3.pie().value(function(d){
    return d.percentage;
});

let path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

let arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .attr("fill", function (d) {
         return color(d.data.percentage);
        });

let label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

arc.append("text")
    .attr("transform", function (d) {
        return "translate( " +label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d){
        return d.data.platform + ":" + d.data.percentage + "%";
    });