// Javascricpt
let dataset = [1, 2, 3, 4, 5, 7];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p') // appends paragragh for each data element
    .text('D3 is awesome!!'); //to print the text in paragraghs equal to the array numbers 
    // .text(function(d){ return d;}); // to print each element of the array in a paragragh
