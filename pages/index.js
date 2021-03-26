import Layout from "../components/Layout";
import Link from "next/link";

import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img
                src="/BRIAN.jpg"
                alt=""
                className="img-fluid"
                width="250px"
              />
            </div>
            <div className="col-md-8">
              <h1>DevBrian</h1>
              <h3>Full Stack Developer</h3>
              <p className="">
                ✌ Hello, here is a small summary about me. As a child I was
                always interested in new technologies and advances so much so
                that my dream was to work for NASA but I discovered the love for
                something more attractive and that I could put my ingenuity to
                create any product it was amazing, it was not necessary to
                invest money I just needed a lot I wanted to learn to create
                products that could be worth 1 million dollars, then I
                discovered that my dreams were to be a programmer. I discovered
                it since I was a child, and here I am learning and improving
                every day.
              </p>
              <Link href="/hireme">
                <a className="btn btn-outline-light">Hire Me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, description, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
            <Link href="/hireme">
              <a className="btn btn-light">Download my Cv</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(
                ({ name, description, image, url, live }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href={`${url ? url : ""} `} target="_black">
                          View code
                        </a>

                        {live ? (
                          <a
                            href={`${live} `}
                            target="_black"
                            className="ml-3 btn2"
                          >
                            Live Demo
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )
              )}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
