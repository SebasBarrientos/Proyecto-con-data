import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './Chartes.scss'
import { getAll } from '../../features/auth/AuthSlice';
import { useDispatch, useSelector } from "react-redux";

const Chart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  
  const { user } = useSelector((state) => state.auth);

  const data = user.map((x,i) =>{
    return {
        name:i,value:x.age
    }
  })
  const ref = useRef();
  useEffect(() => {
    if (!data || !Array.isArray(data)) {
      console.error('Data must be an array');
      return;
    }
    
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal()
      .domain(user.map(d => d.name))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.value)
      .sort(null);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.name));

    return () => {
      svg.selectAll('*').remove();
    };
  }, [data]);

  return (
    <svg ref={ref}></svg>
  );
};

export default Chart;
