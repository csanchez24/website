import { FileUserIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
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
            Full Stack Developer with 6+ years of experience in PHP (Laravel)
            and JavaScript/TypeScript (React.js, Next.js, Node.js). Automated
            integrations across NetSuite, Salesforce, HubSpot, Shopify, reducing
            manual workload by 40%. Implemented CI/CD pipelines and delivered
            internal tools and customer-facing platforms. Strong background in
            API integrations, SQL, and performance optimization.
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
              <a
                href="mailto:carlosjosesancheze@gmail.com"
                target="_blank"
                className="hover:opacity-80"
              >
                <MailIcon />
              </a>
              <a
                href="/carlos-sanchez-resume.pdf"
                target="_blank"
                className="hover:opacity-80"
              >
                <FileUserIcon />
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
                <b>Frontend Development:</b> React, Next.js, Vue, Angular,
                Astro, HTML, JavaScript, CSS, jQuery, WordPress
              </li>
              <li>
                <b>Backend Development:</b> Node.js (Express, Nest.js), PHP
                (Laravel, WordPress)
              </li>
              <li>
                <b>Databases:</b> MySQL, PostgreSQL, SQLite, Redis, MongoDB
              </li>
              <li>
                <b>DevOps & Deployment:</b> Docker, Dokku, DigitalOcean, Vercel,
                Laravel Forge, GitHub Actions, Git
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
