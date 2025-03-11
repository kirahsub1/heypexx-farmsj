'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
// import { useState } from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Example Co.',
    message:
      'This product has exceeded my expectations! Highly recommend to anyone looking for quality.',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, XYZ Inc.',
    message:
      'Fantastic experience! The team was professional, and the results were outstanding.',
  },
  {
    name: 'Alice Johnson',
    role: 'Freelancer',
    message:
      'A game-changer for my workflow. I can\'t imagine going back to how things were before.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#c3e4aa] to-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 shadow-lg rounded-xl bg-white">
                <CardContent className="flex flex-col items-center text-center">
                  <p className="text-gray-600 mb-4">&#34;{testimonial.message}&#34;</p>
                  <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

