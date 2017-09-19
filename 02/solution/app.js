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
var myData = [1,2,3];
var selection = d3.selectAll('div').data(myData);

//Challenge 2:
//for selection to work properly you need to select non-existing elements as well
var selection = d3.select("body").selectAll("div");
//then append the data and print out the names
chart.data(data)
   .enter()
   .append("div")
   .text(function(d){
      return d.name;
});
