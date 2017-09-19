//https://suburbanstats.org

var data = [
    {name: 'Vermont', value: 625741},
    {name: 'Rhode Island', value: 1052567},
    {name: 'New Hampshire', value: 1316470},
    {name: 'Massachusetts', value: 6547629},
    {name: 'Maine', value: 1328361},
    {name: 'Connecticut', value: 3574097}
];
//define margine
var margin = {top: 20, right: 20, bottom: 30, left: 60},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
//define svg
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define range for x and y coordinates
// use width of SVG to define how wide our chart will be
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.02);

//Define how tall chart will be; in SVG coordinate space we start drawing from
//the top left corner and as Y increases you go down.
var y = d3.scaleLinear()
          .range([height, 0]);

//define domain
x.domain(data.map(function(d) { return d.name; }));
y.domain([0, d3.max(data, function(d) { return d.value; })]);

//@TODO define X(xAxis) and Y(yAxis) axis

//@TODO draw x and y axes. Note: don't forget to move xAxis down!!

//add the attributes based on scaled data
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", function(d, i) {
      return "bar_" + i;
    })
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("x", function(d) { return x(d.name); })
    .attr("width", x.bandwidth())//Returns the width of each band.
    .attr("y", function(d) { return y(d.value); })
    .attr("height", function(d) { return height - y(d.value); }); //Returns scaled height of each bar
