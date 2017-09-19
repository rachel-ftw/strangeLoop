var chart = (function(window,d3) {
  //initializing all variables
    var svg, data, x, y, xMap, yExtent, xAxis, yAxis, chartWrapper, color, bar, margin = {}, width, height;
    var data = [
        {name: 'Vermont', value: 625741},
        {name: 'Rhode Island', value: 1052567},
        {name: 'New Hampshire', value: 1316470},
        {name: 'Massachusetts', value: 6547629},
        {name: 'Maine', value: 1328361},
        {name: 'Connecticut', value: 3574097}
    ];
    var breakPoint = 768; //medium breakpoint
    //just moved map and extent into the variables for cleaner code
    xMap = data.map(function(d) { return d.name; });
    yExtent = d3.extent(data, function(d,i) { return d.value });
    //define domains
    x = d3.scaleBand().domain(xMap);
    y = d3.scaleLinear().domain(yExtent);
    //define ordinal scale for color scheme
    color = d3.scaleOrdinal(d3.schemeCategory10);
    //define axis
    xAxis = d3.axisBottom(x);
    yAxis = d3.axisLeft(y);

    //initialize svg
    svg = d3.select('#chart').append('svg');
    chartWrapper = svg.append('g');
    bar = chartWrapper.selectAll(".bar").data(data).enter().append('rect');
    chartWrapper.append('g').classed('x axis', true);
    chartWrapper.append('g').classed('y axis', true);

    //@TODO call render function
    //render();

    function render() {
      //@TODO call updateDimensions function
      //get dimensions based on window size

      ////@TODO update x and y range to new dimensions
      x.range([0, width]).padding(0.02);
      y.range([height, 0]);

      //update svg elements to new dimensions
      svg
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom);
      chartWrapper.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      //update the axis
      xAxis.scale(x);
      yAxis.scale(y);

      chartWrapper.select('.x.axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

      chartWrapper.select('.y.axis')
      .call(yAxis);


      bar.attr("rx", 5)
        .attr("ry", 5)
        .attr("x", function(d, i) { return x(d.name); })
        .attr("width", x.bandwidth())
        .attr("y", function(d, i) { return y(d.value); })
        .attr("height", function(d, i) { return height - y(d.value); })
        .attr("fill", function(d,i) { return color(i % data.length); });
    }
    //update width and height based on the window size
    function updateDimensions(winWidth) {
      //set margin values
      margin.top = 20;
      margin.right = 40;
      margin.left = 60;
      margin.bottom = 60;
      //scale your svg for bigger screens
      if(winWidth > breakPoint) {
        winWidth = winWidth *.7;
      }

      width = winWidth - margin.left - margin.right;
      height = width * .5; //aspect ratio is 0.5
    }

    return {
      render : render
    }

	})(window,d3);
  //@TODO add event listener here
