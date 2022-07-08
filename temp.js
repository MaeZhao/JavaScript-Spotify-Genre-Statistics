
// function makePie(svg, data, column, radius) {
    //     // let svg = d3.select("svg"),
    //     // width = svg.attr("width"),
    //     // height = svg.attr("height"),
    //     // radius = Math.min(width, height) / 2;
    
    //     let g = svg.append("g")
    //             .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    //     let colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    //     let pie = d3.pie().value(function(d) { 
    //             return d[column]; 
    //         });

    //     let path = d3.arc()
    //                 .outerRadius(radius - 10)
    //                 .innerRadius(0);

    //     let label = d3.arc()
    //                 .outerRadius(radius)
    //                 .innerRadius(radius - 80);

        
    //     let arc = g.selectAll(".arc")
    //             .data(pie(data))
    //             .enter().append("g")
    //             .attr("class", "arc");

    //     arc.append("path")
    //         .attr("d", path)
    //         .attr("fill", function(d) { return colorScale(d[column]); });
    
    //     console.log(arc)
    
    //     arc.append("text")
    //     .attr("transform", function(d) { 
    //                 return "translate(" + label.centroid(d) + ")"; 
    //         })
    //     .text(function(d) { return d[column]; });
        

    //     // svg.append("g")
    //     // .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
    //     // .append("text")
    //     // .text("Browser use statistics - Jan 2017")
    //     // .attr("class", "title")
    // }
    // console.log(makePie(svg1, temp, "Chord", 100));