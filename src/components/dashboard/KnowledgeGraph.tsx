import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { files } from '@/data/knowledge';

interface Props {
  onNodeClick?: (id: string) => void;
}

export default function KnowledgeGraph({ onNodeClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 800;
    const height = 500;

    const nodes = files.map(file => ({
      id: file.id,
      title: file.title,
      domain: file.domainId,
      difficulty: file.difficulty,
      type: file.type,
      x: Math.random() * width,
      y: Math.random() * height
    }));

    const links: any[] = [];
    files.forEach(file => {
      if (file.feedsInto && file.feedsInto !== 'None') {
        const targets = file.feedsInto.split(',').map(s => s.trim());
        targets.forEach(targetId => {
          const exists = files.some(f => f.id === targetId);
          if (exists) {
            links.push({
              source: file.id,
              target: targetId,
              value: 1
            });
          }
        });
      }
    });

    d3.select(containerRef.current).selectAll('*').remove();

    const svg = d3.select(containerRef.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height)
      .append('g');

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        svg.attr('transform', event.transform);
      });

    d3.select(containerRef.current).select('svg').call(zoom as any);

    const simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(110))
      .force('charge', d3.forceManyBody().strength(-140))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(32));

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#000000')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '4, 4')
      .attr('stroke-opacity', 0.4);

    const node = svg.append('g')
      .selectAll('.graph-node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'cursor-pointer')
      .call(d3.drag<any, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    node.on('mouseover', function(_event, d) {
      d3.select(this).select('circle')
        .transition().duration(150)
        .attr('r', d.type === 'index' ? 16 : 14)
        .attr('stroke-width', 4);
      
      link.transition().duration(150)
        .attr('stroke', l => (l.source.id === d.id || l.target.id === d.id) ? '#ff4d4d' : '#000000')
        .attr('stroke-opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1.0 : 0.2)
        .attr('stroke-width', l => (l.source.id === d.id || l.target.id === d.id) ? 3 : 2)
        .attr('stroke-dasharray', l => (l.source.id === d.id || l.target.id === d.id) ? 'none' : '4, 4');
    })
    .on('mouseout', function(_event, d) {
      d3.select(this).select('circle')
        .transition().duration(150)
        .attr('r', d.type === 'index' ? 12 : 10)
        .attr('stroke-width', 3);
      
      link.transition().duration(150)
        .attr('stroke', '#000000')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '4, 4');
    })
    .on('click', (_event, d) => {
      if (onNodeClick) onNodeClick(d.id);
    });

    node.append('circle')
      .attr('r', d => d.type === 'index' ? 12 : 10)
      .attr('fill', d => {
        if (d.type === 'index') return '#ffffff';
        if (d.type === 'data') return '#d1d5db';
        if (d.difficulty === 'beginner') return '#86efac'; // green-300
        if (d.difficulty === 'advanced') return '#fca5a5'; // red-300
        return '#fde047'; // yellow-300
      })
      .attr('stroke', '#000000')
      .attr('stroke-width', 3);

    node.append('text')
      .attr('dx', 18)
      .attr('dy', '.35em')
      .attr('fill', '#000000')
      .style('font-family', 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace')
      .style('font-size', '12px')
      .style('font-weight', '700')
      .style('text-transform', 'uppercase')
      .text(d => d.title.length > 25 ? d.title.substring(0, 22) + '...' : d.title);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Initial zoom configuration
    d3.select(containerRef.current).select('svg').call(
      zoom.transform as any,
      d3.zoomIdentity.translate(40, 40).scale(0.85)
    );

    return () => {
      simulation.stop();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
