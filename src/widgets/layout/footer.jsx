import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center text-center justify-between lg:text-left">
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
          <div className="flex justify-center gap-2 md:mb-0 lg:justify-start">
            {socials.map(({ name, path }, ind) => (
              <a
                key={ind}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className="rounded-full shadow-none bg-gray-200">
                  {name}
                </IconButton>
              </a>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Follow me on Social Media",
  socials: [
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          id="instagram"
        >
          <linearGradient
            id="a"
            x1="-37.094"
            x2="-26.555"
            y1="-72.719"
            y2="-84.047"
            gradientTransform="matrix(0 -1.982 -1.8439 0 -132.522 -51.077)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fd5"></stop>
            <stop offset=".5" stopColor="#ff543e"></stop>
            <stop offset="1" stopColor="#c837ab"></stop>
          </linearGradient>
          <path
            fill="url(#a)"
            d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 6.336-.158 7.499.602 9.075.635 1.318 1.848 2.308 3.276 2.677 1.144.294 1.904.253 8.1.253 5.194 0 6.81.093 8.157-.255 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.56-.081-.672-.105-3.54-.11-10.173.005-12.403-.448-14.41 1.633z"
          ></path>
          <path
            fill="#fff"
            d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c4.346-.007 7.811-.607 8.006 3.683.072 1.589.072 5.571 0 7.16-.189 4.137-3.339 3.683-7.211 3.683-3.412 0-5.104.121-6.244-1.02-1.157-1.157-1.019-2.811-1.019-6.245 0-4.071-.385-7.026 3.683-7.213.817-.037 1.134-.048 2.785-.05zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c1.631 0 2.953 1.323 2.953 2.954s-1.322 2.954-2.953 2.954-2.953-1.323-2.953-2.954c0-1.632 1.322-2.954 2.953-2.954z"
          ></path>
        </svg>
      ),
      path: "https://www.instagram.com",
    },
    {
      name: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
        </svg>
      ),
      path: "https://www.twitter.com",
    },
    {
      name: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      path: "https://www.youtube.com",
    },
  ],
  copyright: (
    <>
      Copyright © {year} Developed by{" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Sandeep Singh
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
