// import React, { useEffect } from 'react';
// import * as p5 from 'p5';

// // import p5 from 'p5';
// import Matter from 'matter-js';
// import Boundary from './boundary';

// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;

// var engine;
// var world;

// var pegs = [];
// var bounds = [];
// var particles = [];
// var boundaries = [];
// var plinkos = [];

// var cols = 11;
// var rows = 10;
// var canvas;

// const PlinkoSketch = () => {
//   const Sketch = (p5) => {
//   p5.setup = () => {
//     let radius;
//     p5.createCanvas(p5.windowWidth, p5.windowHeight);
//     p5.background('lightblue');
//     radius = 0;
//     engine = Engine.create();
//     world = engine.world;

//     //columns
//     //makes the pegs of the world
//     let spacing = 600 / cols;
//     //makes rows offcenter
//     for (let j = 0; j < rows; j++) {
//       for (let q = 0; q < cols + 1; q++) {
//         let x = q * spacing;
//         if (j % 2 === 0) {
//           x += spacing / 2;
//         }
//         let y = spacing + j * spacing;

//         let part = p5.circle(x, y, 6);
//         pegs.push(part);
//       }
//     }

//     let newParticle = () => {
//       let part = p5.circle(300, 50, 10);
//       part.fill('blue');
//       part.stroke('blue');
//       part.translate(400, 300);
//       part.ellipse(p5.width / 2, p5.height / 2, radius, radius);
//       particles.push(part);
//     };

//     p5.draw = () => {
//       newParticle();
//       Engine.update(engine);
//     };
//     };

//   };
//   render <>{Sketch}</>;
// };

// export default PlinkoSketch;
