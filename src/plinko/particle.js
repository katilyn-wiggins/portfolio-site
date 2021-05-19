// import * as p5 from 'p5';

// export function Particle(x, y, r, p5) {
//   this.r = p5.random(255);
//   this.g = p5.random(255);
//   this.body = p5.circle(x, y, r);
//   this.r = r;
//   //tell the world that you want the body/particle to be in it
//   World.add(world, this.body);
// }

// //all particles are going to have a show function
// Particle.prototype.show = function () {
//   fill(255);
//   stroke(255);
//   //tells position of body currently
//   var pos = this.body.position;
//   translate(pos.x, pos.y);
//   ellipse(0, 0, this.r * 2);
// };
