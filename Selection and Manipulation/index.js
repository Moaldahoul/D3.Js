// Javascricpt
d3.select();
d3.selectAll();

d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Update h1 tag');

d3.select('body').append('p').text('First Paragragh');
d3.select('body').append('p').text('Second Paragragh');
d3.select('body').append('p').text('Third Paragragh');

d3.selectAll('p').style('color', 'green');