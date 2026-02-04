/**
 * @fileoverview Main page component for Ngoga Portfolio
 *
 * This is the home page of the portfolio website. It renders all
 * main sections in order: Header, Hero, About, Skills, Projects, and Contact.
 *
 * @module app/page
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

/**
 * Home Page Component
 *
 * The main entry point for the portfolio website.
 * Composes all section components into a single-page layout.
 *
 * @returns The complete home page
 */
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
