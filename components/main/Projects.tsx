import React from "react";
import ProjectCard from "../sub/ProjectCard";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <h1 className="text-[45px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 py-10">
        My Projects
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-10">
        Explore some of my amazing projects that showcase my passion for web
        development and problem-solving.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-12 px-10 max-w-6xl">
        <a
          href="https://ajiesepshoppp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transform transition-transform duration-300"
        >
          <ProjectCard
            src="/ajiesepshop.png"
            title="Ajiesep Shop"
            description="AjiesepShop is a platform we created to revolutionize the way people shop online. From simple brainstorming sessions to developing a feature-rich solution, we've worked hard to design a platform that makes online shopping seamless and hassle-free.
            With AjiesepShop, customers can easily find and purchase their favorite products, enjoy a secure and smooth checkout process with Midtrans, and experience an intuitive shopping journey powered by the MERN stack.
            https://ajiesepshoppp.vercel.app/
            "
            iconList={[
              "React",
              "TailwindCSS",
              "DaisyUI",
              "ExpressJs",
              "NodeJs",
              "MongoDB",
              "Midtrans",
            ]}
          />
        </a>
        <a
          href="https://airbnb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transform transition-transform duration-300"
        >
          <ProjectCard
            src="/airbnb.png"
            title="Air bnb"
            description="Airbnb is a platform we created to revolutionize the way people find and book accommodation. From simple brainstorming sessions to creating feature-rich solutions, we've worked hard to design a platform that makes travel planning seamless and stress-free.
            https://github.com/ajiesep/airbnb_clone"
            iconList={[
              "NextJs",
              "TailwindCSS",
              "Shadcn/ui",
              "ExpressJs",
              "NodeJs",
              "Clerk",
              "Prisma ORM",
              "Zod Library",
            ]}
          />
        </a>
        <a
          href="https://medisat.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transform transition-transform duration-300"
        >
          <ProjectCard
            src="/medisat2.png"
            title="Medisat, Medical sehat"
            description="Web based Medical Record Application, to make it easier for patients to schedule appointments with doctors and can chat with AI, and can make payments with midtrans.
            https://medisat.vercel.app/"
            iconList={[
              "React",
              "TailwindCSS",
              "Typescript",
              "NextJs",
              "NodeJs",
              "MongoDB",
              "Gemini.AI",
              "Midtrans",
              "GoogleOAuth",
            ]}
          />
        </a>
        <a
          href="https://belakangan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transform transition-transform duration-300"
        >
          <ProjectCard
            src="/belakangan2.png"
            title="Belakangan"
            description="A web-based real-time chat application using Socket.IO.
            https://chat-belakangan.web.app/login"
            iconList={["React", "Node.js", "Socket.IO", "Express.js"]}
          />
        </a>
        <a
          href="https://kakiavenue.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transform transition-transform duration-300"
        >
          <ProjectCard
            src="/kaki-avenue2.png"
            title="Kaki-Avenue"
            description="A web-based e-commerce shoe sales website MERN.

            https://kaki-avenue.vercel.app/"
            iconList={[
              "React",
              "TailwindCSS",
              "TypeScript",
              "NodeJs",
              "MongoDB",
              "NodeJs",
            ]}
          />
        </a>
        <a
          href="https://movieasikasik.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transform transition-transform duration-300"
        >
          <ProjectCard
            src="/movie.png"
            title="Movie Asik-asik"
            description="A web-based app using TMDB API to display movie lists on the dashboard.
            https://ip-list-musik-asik-asik.web.app/"
            iconList={[
              "React",
              "TailwindCSS",
              "ExpressJs",
              "NodeJs",
              "PostgreSQL",
              "Gemini.AI",
              "Axios",
            ]}
          />
        </a>
      </div>
    </div>
  );
}

export default Projects;
