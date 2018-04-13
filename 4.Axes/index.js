// Javascricpt
let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// let dataset = [1, 2, 3, 4, 5];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);


let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgWidth]);

let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([svgHeight, 0]);

let x_axis = d3.axisBottom()
        .scale(xScale);

let y_axis = d3.axisLeft()
        .scale(yScale);

svg.append("g")
    .attr("transform", "translate(30, 10)")
    .call(y_axis);

let xAxisTranslate = svgHeight - 20;

svg.append("g")
    .attr("transform", " translate(20, " + xAxisTranslate +")")
    .call(x_axis);

// let barChart = svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("y", function(d) {
//          return svgHeight - yScale(d);
//     })
//     .attr("height", function(d) { 
//         return yScale(d); 
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("class", "bar")
//     .attr("transform", function (d, i) {
//         let translate = [barWidth * i, 0]; 
//         return "translate("+ translate +")";
//     });

// let text = svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text(function (d) {
//         return d;
//     })
//     .attr("y", function(d, i){
//         return svgHeight - d - 2;
//     })

//     .attr("x", function (d, i) {
//         return barWidth * i;
//     })

//     .attr("class", "text");

