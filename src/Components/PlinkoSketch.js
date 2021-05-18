import React, { useEffect } from 'react';
import Matter from 'matter-js';
import * as p5 from 'p5';
import Boundary from '../plinko/boundary';

let cols = 11;
let rows = 10;
let pegs = [];
let particles = [];
let bounds = [];
let boundaries = [];

let World = Matter.World;
let Engine = Matter.Engine;
let engine = Engine.create();
let world = engine.world;

const PlinkoSketch = () => {
  const Sketch = (p5) => {
    let radius;
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.background('lightblue');
      radius = 0;

      //makes background pegs
      let spacing = 500 / cols;
      for (let j = 0; j < rows; j++) {
        for (let q = 0; q < cols + 1; q++) {
          let x = q * spacing;
          if (j % 2 === 0) {
            x += spacing / 2;
          }
          let y = spacing + j * spacing;

          let part = p5.circle(x, y, 6);
          pegs.push(part);
        }
      }

      let b = new Boundary(500 / 2, 500 + 50, 500, 100);
      bounds.push(b);

      for (var j = 0; j < cols; +1, j++) {
        const x = j * spacing;
        const h = 100;
        const w = 10;
        const y = 500 - h / 2;
        let b = new Boundary(x, y, w, h);
        bounds.push(b);
      }
    };

    p5.draw = () => {
      var options = {
        isStatic: false,
        resistution: 1,
        friction: 0
      };
      let body = p5.circle(245, 20, 20, options);
      body.stroke('blue');
      p5.ellipse(p5.width / 2, p5.height / 2, radius, radius);
      body.translate(400, 300);
      particles.push(body);
      World.add(world, body);
    };
    Engine.update(engine);

    //   let part = p5.circle(300, 50, 10);
    // p5.ellipse(p5.width / 2, p5.height / 2, radius, radius);
    //   radius++;
    //   part.fill('blue');

    //   part.translate(400, 300);

    //   p5.ellipse(p5.width / 2, p5.height / 2, radius, radius);
    //   radius++;
  };
  useEffect(() => {
    new p5(Sketch);
  }, []);
  return <></>;
};

export default PlinkoSketch;
