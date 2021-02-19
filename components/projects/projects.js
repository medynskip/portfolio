import { useState } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./projects.module.scss";

import Section from "./../section";
import Modal from "../modal";

const projects = [
  {
    title: "Centrum Druku",
    short:
      "Veniam laboris fugiat do elit anim culpa incididunt commodo exercitation ullamco.",
    description:
      "Id eu et qui deserunt proident enim sint aliquip laboris labore irure dolor quis. Esse sunt nulla eu exercitation ex. Labore commodo laborum duis nulla cupidatat non sint. Lorem ipsum nostrud laborum sint adipisicing velit tempor. Id tempor eu cupidatat ex aliquip ullamco et. Irure officia deserunt eiusmod veniam aute et voluptate. Magna cupidatat ullamco exercitation do ex aute qui cupidatat est labore laborum mollit.",
    stack:
      "Dolore quis magna duis eiusmod exercitation. Qui culpa ad id anim. Eiusmod amet enim veniam sit. Aute est commodo adipisicing veniam labore occaecat magna dolor qui reprehenderit qui fugiat cupidatat. Ex et aute irure aliquip occaecat aliquip magna velit aliquip aliquip proident in.",
    git: "https://github.com/medynskip",
    live: "https://piotrmedynski.pl",
    image: `/centrum-druku.jpg`,
  },
  {
    title: "Unsplash client",
    short:
      "Reprehenderit ullamco ut id laboris ipsum labore elit aliqua ut nulla consequat.",
    description:
      "Id eu et qui deserunt proident enim sint aliquip laboris labore irure dolor quis. Esse sunt nulla eu exercitation ex. Labore commodo laborum duis nulla cupidatat non sint. Lorem ipsum nostrud laborum sint adipisicing velit tempor. Id tempor eu cupidatat ex aliquip ullamco et. Irure officia deserunt eiusmod veniam aute et voluptate. Magna cupidatat ullamco exercitation do ex aute qui cupidatat est labore laborum mollit.",
    stack:
      "Dolore quis magna duis eiusmod exercitation. Qui culpa ad id anim. Eiusmod amet enim veniam sit. Aute est commodo adipisicing veniam labore occaecat magna dolor qui reprehenderit qui fugiat cupidatat. Ex et aute irure aliquip occaecat aliquip magna velit aliquip aliquip proident in.",
    git: "https://github.com/medynskip",
    live: "https://unsplash.piotrmedynski.pl",
    image: "/unsplash-client.jpg",
  },
  {
    title: "Centrum Druku",
    short:
      "Veniam laboris fugiat do elit anim culpa incididunt commodo exercitation ullamco.",
    description:
      "Id eu et qui deserunt proident enim sint aliquip laboris labore irure dolor quis. Esse sunt nulla eu exercitation ex. Labore commodo laborum duis nulla cupidatat non sint. Lorem ipsum nostrud laborum sint adipisicing velit tempor. Id tempor eu cupidatat ex aliquip ullamco et. Irure officia deserunt eiusmod veniam aute et voluptate. Magna cupidatat ullamco exercitation do ex aute qui cupidatat est labore laborum mollit.",
    stack:
      "Dolore quis magna duis eiusmod exercitation. Qui culpa ad id anim. Eiusmod amet enim veniam sit. Aute est commodo adipisicing veniam labore occaecat magna dolor qui reprehenderit qui fugiat cupidatat. Ex et aute irure aliquip occaecat aliquip magna velit aliquip aliquip proident in.",
    git: "https://github.com/medynskip",
    live: "https://piotrmedynski.pl",
    image: `/centrum-druku.jpg`,
  },
  {
    title: "Unsplash client",
    short:
      "Reprehenderit ullamco ut id laboris ipsum labore elit aliqua ut nulla consequat.",
    description:
      "Id eu et qui deserunt proident enim sint aliquip laboris labore irure dolor quis. Esse sunt nulla eu exercitation ex. Labore commodo laborum duis nulla cupidatat non sint. Lorem ipsum nostrud laborum sint adipisicing velit tempor. Id tempor eu cupidatat ex aliquip ullamco et. Irure officia deserunt eiusmod veniam aute et voluptate. Magna cupidatat ullamco exercitation do ex aute qui cupidatat est labore laborum mollit.",
    stack:
      "Dolore quis magna duis eiusmod exercitation. Qui culpa ad id anim. Eiusmod amet enim veniam sit. Aute est commodo adipisicing veniam labore occaecat magna dolor qui reprehenderit qui fugiat cupidatat. Ex et aute irure aliquip occaecat aliquip magna velit aliquip aliquip proident in.",
    git: "https://github.com/medynskip",
    live: "https://unsplash.piotrmedynski.pl",
    image: "/unsplash-client.jpg",
  },
  {
    title: "Centrum Druku",
    short:
      "Veniam laboris fugiat do elit anim culpa incididunt commodo exercitation ullamco.",
    description:
      "Id eu et qui deserunt proident enim sint aliquip laboris labore irure dolor quis. Esse sunt nulla eu exercitation ex. Labore commodo laborum duis nulla cupidatat non sint. Lorem ipsum nostrud laborum sint adipisicing velit tempor. Id tempor eu cupidatat ex aliquip ullamco et. Irure officia deserunt eiusmod veniam aute et voluptate. Magna cupidatat ullamco exercitation do ex aute qui cupidatat est labore laborum mollit.",
    stack:
      "Dolore quis magna duis eiusmod exercitation. Qui culpa ad id anim. Eiusmod amet enim veniam sit. Aute est commodo adipisicing veniam labore occaecat magna dolor qui reprehenderit qui fugiat cupidatat. Ex et aute irure aliquip occaecat aliquip magna velit aliquip aliquip proident in.",
    git: "https://github.com/medynskip",
    live: "https://piotrmedynski.pl",
    image: `/centrum-druku.jpg`,
  },
  {
    title: "Unsplash client",
    short:
      "Reprehenderit ullamco ut id laboris ipsum labore elit aliqua ut nulla consequat.",
    description:
      "Id eu et qui deserunt proident enim sint aliquip laboris labore irure dolor quis. Esse sunt nulla eu exercitation ex. Labore commodo laborum duis nulla cupidatat non sint. Lorem ipsum nostrud laborum sint adipisicing velit tempor. Id tempor eu cupidatat ex aliquip ullamco et. Irure officia deserunt eiusmod veniam aute et voluptate. Magna cupidatat ullamco exercitation do ex aute qui cupidatat est labore laborum mollit.",
    stack:
      "Dolore quis magna duis eiusmod exercitation. Qui culpa ad id anim. Eiusmod amet enim veniam sit. Aute est commodo adipisicing veniam labore occaecat magna dolor qui reprehenderit qui fugiat cupidatat. Ex et aute irure aliquip occaecat aliquip magna velit aliquip aliquip proident in.",
    git: "https://github.com/medynskip",
    live: "https://unsplash.piotrmedynski.pl",
    image: "/unsplash-client.jpg",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [open, setOpen] = useState(false);

  const showModal = (clickedEl) => {
    setProject(clickedEl);
    setOpen(true);
  };
  const closeModal = () => {
    // setProject(null);
    setOpen(false);
  };

  return (
    <Section id="projects">
      <div className={styles.projects}>
        <h5>Moje realizacje</h5>
        <div className={styles.bricks}>
          {projects.map((el, i) => {
            return (
              <div key={i} className={styles.brick}>
                <img src={el.image} alt={el.title} />
                <h6>{el.title}</h6>
                <p>{el.short}</p>
                <a
                  onClick={() => {
                    showModal(projects[i]);
                  }}
                >
                  szczegóły
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <CSSTransition
        in={open}
        unmountOnExit
        timeout={300}
        classNames="animation"
      >
        <Modal project={project} closeModal={closeModal} />
      </CSSTransition>
    </Section>
  );
};

export default Projects;
