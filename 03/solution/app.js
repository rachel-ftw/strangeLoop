//https://suburbanstats.org

var data = [
    {name: 'Vermont', value: 625741},
    {name: 'Rhode Island', value: 1052567},
    {name: 'New Hampshire', value: 1316470},
    {name: 'Massachusetts', value: 6547629},
    {name: 'Maine', value: 1328361},
    {name: 'Connecticut', value: 3574097}
];
//Challenge 1:
//define data
var myData = [{"x": 5, "y": 5},{"x": 50, "y": 5},{"x": 100, "y": 5}];

//define margins
var margin = {top: 20, right: 20, bottom: 30, left: 60},
    width = 300 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// define svg container
var selection = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//draw rectangles based on data
selection.selectAll(".bar")
   .data(myData)
   .enter().append("rect")
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("x", function(d) { return d.x; })
                .attr("width", 20)
                .attr("y", function(d) { return d.y; })
                .attr("height", 50);

//Challenge 2:

//define svg container
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.selectAll(".bar")
       .data(data)
       .enter().append("rect")
       .attr("class", function(d, i) {
         return "bar_" + (i+1); //starts with 1 not 0
       })
       .attr("rx", 5)
       .attr("ry", 5)
       .attr("x", function(d, i) { return i*25; }) //to set the space between each rectangle
       .attr("width", 20)
       .attr("height", 50);
