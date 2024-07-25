"use client";
import front from '../image/react-next.png';
import movil from '../image/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg';
import back from '../image/1_s9kgU8F1eB7Tzs7sG0YhBg.jpg';

import { Typography } from "@material-tailwind/react";

import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: front,
    title: "Desarrollo Frontend",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: movil,
    title: "Desarrollo Movil",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: back,
    title: "Desarrollo Backend",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },

];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Mis Habilidades
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          A lo que me dedico
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
