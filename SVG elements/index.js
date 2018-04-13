// Javascricpt

let svgWidth = 600, svgHeight = 500;
let svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container")

// Create a line 
let line = svg.append("line")
    .attr("x1" , 100)
    .attr("x2" , 400)
    .attr("y1" , 50)
    .attr("y2" , 50)
    .attr("class", "line");
    

// Create a rectangle
let rect = svg.append("rect")
    .attr("x" , 100)
    .attr("y" , 100)
    .attr("width" , 200)
    .attr("height" , 100)
    .attr("class", "rect");
    

// Create a Circle
let circl = svg.append("circle")
    .attr("cx" , 300)
    .attr("cy" , 400)
    .attr("r" , 75)
    .attr("class", "circle");