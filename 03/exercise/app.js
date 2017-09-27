//https://suburbanstats.org

var data = [
    {name: 'Vermont', value: 625741},
    {name: 'Rhode Island', value: 1052567},
    {name: 'New Hampshire', value: 1316470},
    {name: 'Massachusetts', value: 6547629},
    {name: 'Maine', value: 1328361},
    {name: 'Connecticut', value: 3574097}
];

//@TODO define margins, width, height. For dimentions use svg width and height
//var margin = {top: 20, right: 20, bottom: 30, left: 60},
//    width = 300
//    height = 300

//@TODO define svg container, add <g> element, apply transform/translate.
var svg = d3.select("body").append("svg");
    //svg.attr("width", )
    //.attr("height", )
    // .append("g")
    //.attr("transform", "translate(" "," ")");

//@TODO draw rectangles based on data (use our var data defined above):
//      1. add a class name to each rect, use i for count.
//         Example: 1st element will have a class name .bar_1, 2nd .bar_2, etc
//      2. line up rectangles horizontally
svg.selectAll(".bar")
   .data(data)
   .enter().append("rect");
//svg.attr("class", )
//   .attr("rx", 5)
//   .attr("ry", 5)
//   .attr("x", ) //to set the space between each rectangle
//   .attr("width", 20)
//   .attr("height", 50);
