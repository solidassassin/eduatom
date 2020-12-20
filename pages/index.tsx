import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
type Props = {
  feed: PostProps[];
};

export default function Blog(props: React.FC<Props>) {
  return (
    <Layout>
      <div className="page">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="logo">
              <a href="#" className="nav-link">
                <span className="link-text logo-text">Eduatom</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="angle-double-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041    c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629    c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939    z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816    c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245    c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136    c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998    L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125    c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>

            <li className="nav-item">
              <a href="/signup" className="nav-link">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="cat"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-cat fa-w-16 fa-9x"
                >
                  <g className="fa-group">
                    <g className="fa-group">
                      <path
                        fill="currentColor"
                        d="m412.113 91.657c-19.856-19.955-46.262-31.004-74.405-31.121-8.364-.031-15.165 6.713-15.208 15.069-.031 8.364 6.713 15.165 15.077 15.197 20.109.091 38.987 8.006 53.161 22.294.012.008.026.026.038.034 14.177 14.308 21.934 33.266 21.837 53.398-.043 8.356 6.703 15.167 15.06 15.211 1.051.004 2.089-.102 3.078-.302 6.893-1.391 12.093-7.452 12.132-14.758.133-28.218-10.737-54.803-30.603-74.859-.052-.052-.106-.113-.167-.163z"
                        className="fa-secondary"
                      ></path>
                      <path
                        fill="currentColor"
                        d="m455.28 49.21c-.141-.136-.284-.282-.424-.419-31.193-31.254-72.669-48.588-116.865-48.791-8.366-.041-15.167 6.703-15.211 15.06-.044 8.356 6.703 15.167 15.059 15.211 36.18.163 70.127 14.353 95.641 39.96.101.093.194.198.295.29 25.55 25.785 39.529 59.977 39.372 96.29-.031 8.364 6.713 15.165 15.067 15.199 1.051.004 2.081-.091 3.08-.292 6.893-1.391 12.091-7.462 12.119-14.775.196-44.391-16.897-86.21-48.133-117.733z"
                        className="fa-secondary"
                      ></path>
                    </g>
                    <path
                      fill="currentColor"
                      d="m138.247 457.31-35.72 35.79c-5.262 5.173-11.685 4.36-15.47.56-47.985-48.061-27.468-27.509-75.4-75.53-4.09-4.1-4.1-10.74-.01-14.84l36.21-36.37z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m329.097 480.89-27.51 27.55c-4.74 4.74-12.43 4.75-17.17.01l-59.46-59.36 44.71-44.71 59.42 59.33c4.75 4.74 4.75 12.43.01 17.18z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m260.517 371.04c-86.183 86.334-80.663 81.15-83.39 82.73l-126.53-126.53c1.569-2.637-3.757 3.018 82.62-83.5z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m438.567 319.03-149.81 37.83-141.45-141.45 37.56-149.69c2.96-13.96 20.22-19.07 30.33-9 148.413 148.208 83.542 83.433 232.31 231.97 10.1 10.09 5.02 27.35-8.94 30.34z"
                      className="fa-secondary"
                    ></path>
                  </g>
                </svg>
                <span className="link-text">Naujienos</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="alien-monster"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="m229.521 57.421-225.13 225.129c-5.855 5.855-5.855 15.358 0 21.213l203.846 203.845c5.867 5.867 15.37 5.843 21.213 0l225.137-225.122zm34.677 282.971c-140.728 21.622-132.079 20.379-133.785 20.379-7.269 0-13.661-5.303-14.8-12.721-1.259-8.188 4.356-15.853 12.544-17.112l102.227-15.705-54.554-54.553c-8.552-8.552-4.163-23.226 8.323-25.435l131.494-20.195c8.181-1.252 15.846 4.349 17.105 12.537s-4.363 15.846-12.551 17.105l-102.22 15.712 54.554 54.553c9.001 9.001 3.001 24.189-8.337 25.435z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m507.612 229.448-31.82 31.82-225.061-225.061 31.82-31.82c5.86-5.85 15.36-5.85 21.22 0l203.841 203.84c5.851 5.861 5.851 15.361 0 21.221z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m507.612 128.588-22.87 22.88-124.201-124.2 22.87-22.88c5.86-5.85 15.36-5.85 21.22 0l102.98 102.98c5.852 5.86 5.852 15.36.001 21.22z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <span className="link-text">Projektas</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="space-station-moon-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="m183.272 209.548h73.017 73.017c7.931 0 14.354-6.449 14.354-14.413v-15.707c0-41.193-32.713-76.769-77.285-76.769 23.539-4.706 41.286-25.557 41.286-50.584 0-28.485-23.004-51.574-51.372-51.574s-51.372 23.089-51.372 51.574c0 25.027 17.747 45.878 41.286 50.584-44.514 0-77.285 35.521-77.285 76.769v15.707c.001 7.963 6.423 14.413 14.354 14.413z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m64.518 249.767c.908.166 1.809.246 2.7.246 7.1 0 13.407-5.09 14.724-12.354 3.689-20.354 10.673-40.131 20.757-58.78 9.732-17.997 21.936-34.159 36.273-48.036 5.958-5.766 6.132-15.291.389-21.274-5.743-5.982-15.228-6.157-21.186-.391-16.547 16.017-30.615 34.637-41.811 55.343-11.603 21.458-19.646 44.252-23.905 67.75-1.481 8.175 3.918 16.008 12.059 17.496z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m409.88 178.878c10.084 18.65 17.068 38.426 20.757 58.78 1.317 7.265 7.623 12.354 14.724 12.354.89 0 1.793-.08 2.7-.246 8.141-1.488 13.54-9.321 12.058-17.496-4.259-23.498-12.302-46.293-23.905-67.75-11.196-20.706-25.264-39.327-41.811-55.343-5.958-5.767-15.443-5.591-21.186.391-5.743 5.983-5.568 15.507.389 21.274 14.338 13.877 26.542 30.039 36.274 48.036z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m316.821 364.681c-19.328 6.379-39.685 9.649-60.531 9.719-.27.01-.549.01-.819.01-20.387 0-40.364-3.059-59.353-9.087-7.891-2.508-16.302 1.885-18.799 9.809s1.878 16.369 9.769 18.876c21.915 6.961 44.919 10.491 68.383 10.491h.819c24.033-.09 47.536-3.862 69.881-11.234 7.861-2.588 12.146-11.093 9.559-18.987-2.577-7.892-11.048-12.195-18.909-9.597z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m97.455 404.61c23.54-4.707 41.288-25.565 41.288-50.584 0-28.485-23.004-51.584-51.372-51.584s-51.372 23.099-51.372 51.584c0 25.019 17.748 45.877 41.288 50.584-44.476 0-77.287 35.485-77.287 76.77v15.707c0 7.954 6.423 14.413 14.354 14.413h73.017 73.017c7.931 0 14.354-6.459 14.354-14.413v-15.707c0-41.111-32.624-76.77-77.287-76.77z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m434.713 404.61c23.54-4.707 41.288-25.565 41.288-50.584 0-28.485-23.004-51.584-51.372-51.584-28.378 0-51.372 23.099-51.372 51.584 0 25.019 17.741 45.877 41.285 50.584-44.578 0-77.285 35.568-77.285 76.769v15.707c0 7.954 6.423 14.413 14.354 14.413h73.017 73.017c7.921 0 14.354-6.459 14.354-14.413v-15.706c.001-41.197-32.714-76.77-77.286-76.77z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <span className="link-text">Komanda</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="space-shuttle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="m225.59 60.819c-124.679 0-225.59 100.889-225.59 225.587 0 55.239 19.71 107.439 55.81 148.568 1.224-1.224 182.982-182.98 184.78-184.777 0-21.501 0-152.644 0-174.377 0-8.281-6.72-15.001-15-15.001z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m231.73 511.902v-210.426l-154.7 154.707c43.833 38.472 99.217 57.353 154.7 55.719z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m436.18 271.406h-174.38l-.07 237.716c46.354-7.405 89.331-29.143 123.37-63.199 42.61-42.609 66.08-99.259 66.08-159.518 0-8.279-6.72-14.999-15-14.999z"
                      className="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m445.919 66.079c-42.61-42.609-99.26-66.079-159.511-66.079-8.29 0-15 6.72-15 15v210.587c0 8.263 6.684 15 15 15h210.592c8.28 0 15-6.71 15-15 0-60.25-23.47-116.899-66.081-159.508z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <span className="link-text">Rezultatai</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="space-shuttle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="m354.03 31.622h-296.13c-31.93 0-57.9 25.97-57.9 57.9v259.5c0 12.29 13.899 19.218 23.71 12.21l82.47-58.84c6.92-4.93 15.06-7.54 23.56-7.54h181.39c31.93 0 57.9-25.97 57.9-57.9v-190.33c0-8.28-6.72-15-15-15zm-72.86 181.71h-173.31c-8.28 0-15-6.71-15-15 0-8.28 6.72-15 15-15h173.31c8.28 0 15 6.72 15 15 0 8.29-6.72 15-15 15zm0-70h-173.31c-8.28 0-15-6.71-15-15 0-8.28 6.72-15 15-15h173.31c8.28 0 15 6.72 15 15 0 8.29-6.72 15-15 15z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m512 205.872v259.49c0 12.207-13.829 19.268-23.71 12.21l-82.47-58.83c-6.92-4.93-15.06-7.54-23.56-7.54h-181.39c-31.93 0-57.9-25.98-57.9-57.91v-28.44h168.16c48.47 0 87.9-39.43 87.9-87.9v-88.99h55.07c31.93 0 57.9 25.98 57.9 57.91z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <span className="link-text">Kontaktai</span>
              </a>
            </li>

            <li className="nav-item" id="themeButton">
              <a href="index" className="nav-link">
                <svg
                  className="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                  id="lightIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="moon-stars"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <svg
                  className="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"
                  id="solarIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="sun"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <svg
                  className="theme-icon svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
                  id="darkIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="sunglasses"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
                <span className="link-text-lang">‎‎‎‎‎EN</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="container-main">
          <div className="container-post">
            <h1 className="title-post"></h1>

            <p className="text-post"></p>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed");
  const feed = await res.json();
  return {
    props: { feed },
  };
};

//export default Blog;
