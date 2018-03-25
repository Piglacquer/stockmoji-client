import React, { Component } from 'react';
import * as d3 from 'd3';
import techan from 'techan';
import './styles/css/candlestick.css';

class Candlestick extends Component {
    state = {
        csvData: null
    }

    componentWillReceiveProps() {
      this.getStockPriceData(this.props.ticker)
    }


    getStockPriceData(ticker) {
      fetch('https://api.intrinio.com/prices?ticker=' + ticker, {
          headers: new Headers({
              Authorization: `Basic ${new Buffer('dcfac65d3703237d8ccf5698f693e5e9:1c58f8fcdd7c0f63f6e98f649e5365de').toString('base64')}`
          })
        })
        .then(response => response.json())
        .then((response) => {
            const csvData = this.convertToCSV(response.data);

            this.setState({ csvData });
        });
    }

    convertToCSV(objArray) {
        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let csvString = '';
        const fields = Object.keys(objArray[0]);
        fields.push('\r\n');

        csvString = fields.join(',');

        for (var i = 0; i < array.length; i++) {
            let line = '';

            for (var index in array[i]) {
                if (line !== '') line += ',';

                line += array[i][index];
            }
            csvString += line + '\r\n';
        }

        return csvString;
    }

    renderCandlestick(csvData) {
        const container = this.refs.svgContainer;

        const margin = {top: 20, right: 20, bottom: 30, left: 50};
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const x = techan.scale.financetime()
            .range([0, width]);

        const y = d3.scaleLinear()
            .range([height, 0]);

        const candlestick = techan.plot.candlestick()
            .xScale(x)
            .yScale(y);

        const xAxis = d3.axisBottom()
            .scale(x);

        const yAxis = d3.axisLeft()
            .scale(y);

        const svg = d3.select(container).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        let data = d3.csvParse(csvData);
        var accessor = candlestick.accessor();

        data = data.slice(0, 100).map((d) => {
            return {
                date: new Date(d.date),
                open: +d.open,
                high: +d.high,
                low: +d.low,
                close: +d.close,
                volume: +d.volume
            };
        }).sort((a, b) => {
            return d3.ascending(accessor.d(a), accessor.d(b));
        });

        svg.append("g")
            .attr("class", "candlestick");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${height})`);

        svg.append("g")
            .attr("class", "y axis")
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .attr("font-size", "11px")
            .attr("fill", "white")
            .style("text-anchor", "end")
            .text("Price ($)");

        const params = {
            x,
            y,
            svg,
            candlestick,
            yAxis,
            xAxis
        };

        this.draw(data, params);
    }

    draw(data, params) {

        const {
            x,
            y,
            svg,
            candlestick,
            yAxis,
            xAxis
        } = params;

        x.domain(data.map(candlestick.accessor().d));
        y.domain(techan.scale.plot.ohlc(data, candlestick.accessor()).domain());

        svg.selectAll("g.candlestick").datum(data).call(candlestick);
        svg.selectAll("g.x.axis").call(xAxis);
        svg.selectAll("g.y.axis").call(yAxis);
    }

    render() {

        return (
            <div className="candlestick-container">
              <div ref="svgContainer">{this.state.csvData ? this.renderCandlestick(this.state.csvData) : ''}
              </div>
            </div>
        )
    }
}

export default Candlestick;
