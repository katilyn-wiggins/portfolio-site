import React from 'react';
import Matter from 'matter-js';
import {
  fill,
  noStroke,
  push,
  translate,
  rectMode,
  rect,
  pop,
  CENTER
} from 'p5';

const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

const engine = Engine.create();
const world = engine.world;

export default function Boundary(x, y, w, h) {
  const options = {
    density: 1,
    friction: 1,
    isStatic: true
  };

  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
}

Boundary.prototype.show = function () {
  fill(128);
  noStroke();
  const { x, y } = this.body.position;
  push();
  translate(x, y);
  rectMode(CENTER);
  rect(0, 0, this.w, this.h);
  pop();
};
