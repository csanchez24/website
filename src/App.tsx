import { GithubIcon, LinkedinIcon } from "lucide-react";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <main className="container mx-auto h-full py-8 lg:py-16 px-4">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <div className="w-28 h-28 mb-4">
            <img
              src="carlos-photo.jpg"
              className="h-full w-full object-cover object-center rounded-full p-1 border border-primary"
            />
          </div>
          <h1 className="text-2xl lg:text-4xl mb-1">
            Carlos Jose Sanchez Espinosa
          </h1>
          <h2 className="text-xl mb-1 text-secondary ">Software Engineer</h2>
          <div className="mb-6 ">
            <a href="mailto:carlosjosesancheze@gmail.com">
              carlosjosesancheze@gmail.com
            </a>
          </div>
          <p className="mb-6">
            Full Stack Web Developer with 6+ years of experience designing and
            building scalable web applications using modern technologies such as
            PHP (Laravel), JavaScript/TypeScript (React.js, Next.js), and
            Node.js. Proven expertise in optimizing performance, enhancing
            workflows, and delivering seamless user experiences. Strong
            problem-solving skills and a collaborative team player with a
            passion for integrating cutting-edge technologies.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-3 mb-6">
              <a
                href="https://github.com/csanchez24"
                target="_blank"
                className="hover:opacity-80"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/carlosjsancheze/"
                target="_blank"
                className="hover:opacity-80"
              >
                <LinkedinIcon />
              </a>
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
          <hr className="w-full mb-6" />
          <div>
            <h2 className="text-2xl lg:text-3xl mb-4">Skills</h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-pretty">
              <li>
                <b>Programming Languages:</b> JavaScript (TypeScript, Node.js),
                PHP, SQL
              </li>
              <li>
                <b>Frontend Development:</b> HTML, CSS, JavaScript (Vanilla,
                TypeScript), React, Next.js, Vue, Angular, Astro, Zustand,
                Redux, jQuery, WordPress
              </li>
              <li>
                <b>Backend Development:</b> Node.js (Express, Nest.js), PHP
                (Laravel, WordPress)
              </li>
              <li>
                <b>Databases:</b> MySQL, PostgreSQL, SQLite, Redis, MongoDB
              </li>
              <li>
                <b>Web APIs & Communication:</b> REST, GraphQL, RPC
              </li>
              <li>
                <b>Version Control & Deployment:</b> Git, GitHub, Laravel Forge,
                Vercel, Dokku
              </li>
              <li>
                <b>CI/CD:</b> GitHub Actions
              </li>
              <li>
                <b>Cloud & DevOps:</b> Docker, Dokku, Dokploy, DigitalOcean,
                Vercel, Laravel Forge, GitHub Actions, Git, BullMQ
              </li>
              <li>
                <b>Spoken Languages:</b> English, Spanish
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
