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


//@TODO Define range for x and y coordinates
//      use width and height to define how wide our chart will be;
//      Note: in SVG coordinate space we start drawing from
//      the top left corner and as Y increases you go down.
//var x =
//    .range()
//    .padding(0.02);
// var y =
//    .range();

//@TODO define domain; use map() and max() functions
// x.domain();
// y.domain();

//draw rectangles based on data
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", function(d, i) {
      return "bar_" + i;
    })
    .attr("rx", 5)
    .attr("ry", 5);
//@TODO add the attributes based on scaled data: x, y, width, height
// svg.attr("x",)
//     .attr("width", )//Returns the width of each band.
//     .attr("y", )
//     .attr("height", ); //Returns scaled height of each bar
