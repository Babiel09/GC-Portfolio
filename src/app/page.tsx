"use client";

import React from 'react';
import Image from 'next/image';
import PLanilhaImage from '@/assets/planilha.webp';
import APIImage from '@/assets/AAAPI.jpg';
import MovieHereImage from '@/assets/movie_here.png';
import { Menu, Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import {useState} from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const projects = [
    {
      title: "Movie Here",
      image: MovieHereImage,
      description: "Movie Here is a open source web application thats have a giant movie list and your credentials are safe with us, we use technologies like JWT, OAuth2, Bcrypt and others.",
      tags: ["Typescript","Next.js", "React", "Tailwind","Nest.js", "Prisma", "PostgreSQL", "OAuth2", "JWT", "Bcrypt","Docker","BullMQ","Redis"],
      link: "https://github.com/Babiel09/Movie-Here-Front-End",
      link2: "https://github.com/Babiel09/Movie-Here-Back-End",
    },
    {
      title: "Spreadsheets",
      image: PLanilhaImage,
      description: "Spreadsheets is a project to improve organization with style",
      tags: ["TypeScript", "React", "Tailwind", "Node.js", "Fastify", "MongoDB"],
      link: "https://github.com/Babiel09/Planilhas_Front-End",
      link2: "https://github.com/Babiel09/Planilhas_Back-End",
    },
    {
      title: "Bank API",
      image: APIImage, 
      description: "This is an API to simulate some bank actions, like transfer money, Deposit and withdeaw.",
      tags: ["Typescript", "Nest.js", ,"Prisma", "BullMQ", "Redis", "PostgreSQL", "Bcrypt"],
      link: "https://github.com/Babiel09/Bank-API",
      link2: "",
    },
  ];


  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-white">Gabriel Castro<span className="text-purple-500">.</span></h1>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/95 border-b border-gray-800 px-4 py-4 space-y-4">
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-purple-500 font-medium">Full Stack Developer</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Creating unique digital experiences
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Transforming ideas into reality through clean code and modern design
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#projects" 
                 className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-purple-500 hover:text-white transition-all">
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#contact" 
                 className="flex items-center gap-2 border border-gray-700 text-white px-6 py-3 rounded-full font-medium hover:border-purple-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm a full stack developer passionate about creating innovative solutions and memorable digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With experience in React, Next.js, Node.js, Nest.js, OAuth2.0, Caching, OpenID, JWT, Bcrypt, Tailwind CSS, Cookie Based Auth, Token Authentication, BullMQ, Redis, SQL, Postreges SQL, MongoDB, Docker and software architecture, I always strive to deliver high-quality products.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
                <h4 className="text-white font-medium mb-2">Frontend</h4>
                <p className="text-gray-400">React, Next.js, Tailwind CSS</p>
              </div>
              <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
                <h4 className="text-white font-medium mb-2">Backend</h4>
                <p className="text-gray-400">Node.js, Nest.js, OAuth2.0, Caching, OpenID, JWT, Bcrypt, Cookie Based Auth, Token Authentication, BullMQ, Redis, SQL, Postreges SQL, MongoDB, Docker.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
       {/* Projects Section with updated card design */}
       <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12">Selected Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,index) => (
            <div 
              key={index} 
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay (camada de fundo) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Front End */}
                {project.link2 === "" ?(
                  <div className="mt-10 absolute top-0 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-full transition-transform duration-300">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
                ):(
                  <div className="mt-10 absolute top-0 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-full transition-transform duration-300">
                    View Project Front End <ExternalLink size={16} />
                  </a>
                </div>

                )}
                
                {/* Back End */}
                {!!project.link2 && (
                  <div className="mb-10 absolute bottom-0 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                    <a 
                      href={project.link2} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-full transition-transform duration-300">
                      View Project Back End <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Let's Work Together?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to new projects and collaboration opportunities.
            Let's create something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Babiel09" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-400 hover:text-purple-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=553196984558&text&type=phone_number&app_absent=" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-500 transition-colors">
              <FaWhatsapp size={24} />
            </a>
            <a href="mailto:estudosbabiel@email.com" 
               className="text-gray-400 hover:text-purple-500 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://discord.com/users/1105249174536081638" 
              target='_blank'
               className="text-gray-400 hover:text-purple-500 transition-colors">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gabriel Castro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}