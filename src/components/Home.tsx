import React from 'react';
import { Card, CardContent } from '~/components/ui/card';
import {Testimonial} from "~/components/Testimonial"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import { Practice } from './Practice';
import { Courses } from './Courses';
import {Statistics} from './Statistics';
import { Component_1 } from './Component_1';

export function Home() {
  return (
    <div className="min-h-screen pt-2">
      {/* Carousel Section */}
      <section id="Camponent_1">
        <Component_1/>
      </section>

      {/* Statistics Section */}
      <section id="Statistics">
        <Statistics/>
      </section>

      {/* Courses Carousel Section */}
      <section id="Courses">
        <Courses/>
      </section>

      {/* Practice Questions and Give Test */}
      <section id="practice">
        <Practice/>
      </section>

      {/* What our Students Say Section */}
      <section id="testimonials" className="mt-16 flex justify-center w-full py-5">        
        <Testimonial/>
      </section>
     
    </div>
  );
}
