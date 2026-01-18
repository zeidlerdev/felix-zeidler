import React, { useEffect, useRef, useState } from "react";

export default function Infomod() {
  const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          scrollObserver.unobserve(entry.target);
        }
      });

      scrollObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          scrollObserver.unobserve(ref.current);
        }
      };
    }, []);

    const classes = `animate-in duration-700 
        ${isVisible ? "opacity-100" : "opacity-0"}`;

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  };
  return (
    <RevealOnScroll>
      <section className="relative h-auto flex flex-col justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
        <div className="w-full text-center mb-10" id="frontend">
          <h1 className="text-4xl">
            Web Development Information you might need!
          </h1>
          <p className="text-2xl text-gray-400">
            Just a few standarts to get started!
          </p>
        </div>
        <div className="max-w-7xl text-center mx-auto relative w-full animate-in slide-in-from-bottom duration-700">
          <div className="h-auto">
            <div className="lg:flex sm:block gap-4 overflow-hidden lg:h-auto lg:sm:h-auto text-sm">
              <div className="lg:flex items-center px-3 sm:px-4 py-2 sm:py-3 h-auto lg:border-r border-blue-500">
                <div className="text-4xl lg:text-5xl h-auto">
                  <span className="lg:block text-blue-500">F</span>
                  <span className="lg:block text-blue-500 lg:pl-10 pl-1">
                    R
                  </span>
                  <span className="lg:block text-blue-500 lg:pl-20 pl-1">
                    O
                  </span>
                  <span className="lg:block text-blue-500 lg:pl-30 pl-1">
                    N
                  </span>
                  <span className="lg:block text-blue-500 lg:pl-30 pl-1">
                    T
                  </span>
                  <span className="lg:block lg:pl-20 pl-1">E</span>
                  <span className="lg:block lg:pl-10 pl-1">N</span>
                  <span className="pl-1">D</span>
                </div>
              </div>
              <div className="block items-center px-3 sm:px-4 py-2 sm:py-3">
                <div className="items-center px-3 sm:px-4 py-2 sm:py-3 text-2xl">
                  <span className="text-white">
                    <span className="text-blue-500">
                      Front-end Development is the development or creation of a
                      user interface using some markup languages and other
                      tools.
                    </span>
                    <br />
                    It is the development of the user side where only user
                    interaction will be counted. It consists of the interface
                    where buttons, texts, alignments, etc are involved and used
                    by the user.
                  </span>
                </div>
                <div className="text-lg mt-5">
                  <div className="text-gray-400">
                    <span className="text-blue-500">
                      Languages for Frontend Development.
                    </span>
                    <span className="text-white">
                      <br />
                      Front-end is the part that is accessible to the user only,
                      It should be self-explanatory and must be user-friendly
                      and designed. so to achieve this we have some basic
                      languages which can be used to create interactive web
                      pages. These are the basic needs for the creation of a web
                      page.
                    </span>
                    <br />
                    <br />
                    <div className="text-left">
                      <span>
                        <span className="text-blue-500 border-b border-blue-500 hover:text-blue-500/50 hover:border-blue-500/50">
                          <a href="https://html.com/" target="_blank">
                            HTML:{" "}
                          </a>{" "}
                        </span>
                        Introduced in 1993 and now at HTML5, it is a core
                        language for creating structured web content. It
                        supports forms, tables, and other elements needed to
                        organize information, and continues to evolve to help
                        developers build interactive, accessible interfaces
                        across platforms.
                      </span>
                      <br />
                      <br />

                      <span>
                        <span className="text-blue-500 border-b border-blue-500 hover:text-blue-500/50 hover:border-blue-500/50">
                          <a href="https://css3.com/" target="_blank">
                            CSS:{" "}
                          </a>{" "}
                        </span>
                        CSS, introduced on 17 December 1996 and now at CSS3,
                        stands for Cascading Style Sheets. It complements HTML
                        by adding styling, managing colors, and enabling
                        responsive designs. CSS helps developers create visually
                        appealing, consistent layouts across devices and screen
                        sizes.
                      </span>
                      <br />
                      <br />

                      <span>
                        <span className="text-blue-500 border-b border-blue-500 hover:text-blue-500/50 hover:border-blue-500/50">
                          <a href="https://www.javascript.com/" target="_blank">
                            JavaScript:{" "}
                          </a>
                        </span>{" "}
                        ECMAScript, introduced on 4 December 1995 and now at
                        ECMAScript 2022, is a lightweight, cross-platform,
                        single-threaded language. It enables dynamic updates and
                        event handling in web development, making it key for
                        building interactive and responsive user interfaces.
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-w-7xl text-center mx-auto mt-10 w-full animate-in slide-in-from-bottom duration-700"
          id="backend"
        >
          <div className="h-auto">
            <div className="lg:flex sm:block gap-4 overflow-hidden lg:h-auto lg:sm:h-auto text-sm h-auto">
              <div className="lg:hidden md:flex sm:flex items-center px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-4xl lg:text-5xl w-full justify-center">
                  <span className="lg:block text-green-500">B</span>
                  <span className="lg:block text-green-500 lg:pl-10 pl-1">
                    A
                  </span>
                  <span className="lg:block text-green-500 lg:pl-20 pl-1">
                    C
                  </span>
                  <span className="lg:block text-green-500 lg:pl-30 pl-1">
                    K
                  </span>
                  <span className="lg:block lg:pl-20 pl-1">E</span>
                  <span className="lg:block lg:pl-10 pl-1">N</span>
                  <span className="pl-1">D</span>
                </div>
              </div>
              <div className="block items-center px-3 sm:px-4 py-2 sm:py-3">
                <div className="items-center px-3 sm:px-4 py-2 sm:py-3 text-2xl">
                  <span className="text-white">
                    <span className="text-green-500">
                      Backend development handles the server-side logic,
                      database, and core functionality of web applications.{" "}
                    </span>
                    <br />
                    It ensures smooth communication between the server and
                    client using languages and frameworks like Node.js, Django,
                    and Spring.
                  </span>
                </div>
                <div className="text-lg mt-5 h-auto">
                  <div className="text-gray-400">
                    <span className="text-green-500">
                      {" "}
                      Knowledge of Web Server.
                    </span>
                    <span className="text-white">
                      <br />A web server stores, processes, and delivers web
                      pages in response to user requests via HTTP. When a user
                      makes a request, the HTTP server retrieves and sends the
                      requested content back to the browser via HTTP. Examples
                      include Apache and NGINX, popular open-source platforms
                      used to serve web content efficiently.
                    </span>
                    <br />
                    <br />
                    <div className="text-left">
                      <span>
                        <span className="text-green-500">
                          <a
                            className="border-b border-green-500  hover:text-green-500/50 hover:border-green-500/50"
                            href="https://www.javascript.com/"
                            target="_blank"
                          >
                            JavaScript{" "}
                          </a>
                          +{" "}
                          <a
                            className="border-b border-green-500  hover:text-green-500/50 hover:border-green-500/50"
                            href="https://nodejs.org/en"
                            target="_blank"
                          >
                            NodeJS:{" "}
                          </a>
                        </span>
                        JavaScript builds interactive, dynamic websites, while
                        Node.js enables running JS on the server with frameworks
                        like Express.js for efficient backend development.
                      </span>
                      <br />
                      <br />
                      <span>
                        <span className="text-green-500">
                          <a
                            className="border-b border-green-500  hover:text-green-500/50 hover:border-green-500/50"
                            href="https://www.python.org/"
                            target="_blank"
                          >
                            {" "}
                            <a className="border-b border-green-500 hover:text-green-500/50 hover:border-green-500/50"></a>
                            Python{" "}
                          </a>
                          +{" "}
                          <a
                            className="border-b border-green-500 hover:text-green-500/50 hover:border-green-500/50"
                            href="https://www.djangoproject.com/"
                            target="_blank"
                          >
                            Django:{" "}
                          </a>
                        </span>
                        Python’s simplicity and Django’s scalability make them
                        ideal for building secure, fast, and maintainable web
                        applications with minimal code.
                      </span>
                      <br />
                      <br />

                      <span>
                        <span className="text-green-500">
                          <a
                            className="border-b border-green-500 hover:text-green-500/50 hover:border-green-500/50"
                            href="https://www.php.net/"
                            target="_blank"
                          >
                            PHP{" "}
                          </a>{" "}
                          +{" "}
                          <a
                            className="border-b border-green-500 hover:text-green-500/50 hover:border-green-500/50"
                            href="https://laravel.com/"
                            target="_blank"
                          >
                            Laravel:{" "}
                          </a>
                        </span>
                        PHP powers dynamic websites, and Laravel, its MVC-based
                        framework, simplifies backend development with speed,
                        flexibility, and clean architecture.
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:hidden hidden items-center px-3 sm:px-4 py-2 sm:py-3 lg:border-l border-green-500">
                <div className="text-4xl lg:text-5xl">
                  <span className="lg:block text-green-500 lg:pr-10">B</span>
                  <span className="lg:block text-green-500 lg:pr-20 pr-1">
                    A
                  </span>
                  <span className="lg:block text-green-500 lg:pr-30 pr-1">
                    C
                  </span>
                  <span className="lg:block text-green-500 lg:pr-40 pr-1">
                    K
                  </span>
                  <span className="lg:block lg:pr-30 pr-1">E</span>
                  <span className="lg:block lg:pr-20 pr-1">N</span>
                  <span className="lg:pr-10 pr-1">D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-w-7xl text-center mx-auto mt-10 relative w-full animate-in slide-in-from-bottom duration-700"
          id="database"
        >
          <div className="h-auto">
            <div className="lg:flex sm:block gap-4 overflow-hidden lg:h-auto lg:sm:h-auto text-sm">
              <div className="lg:flex items-center px-3 sm:px-4 py-2 sm:py-3 h-auto lg:border-r border-yellow-500">
                <div className="text-4xl lg:text-5xl h-auto">
                  <span className="lg:block text-yellow-500">D</span>
                  <span className="lg:block text-yellow-500 lg:pl-10 pl-1">
                    A
                  </span>
                  <span className="lg:block text-yellow-500 lg:pl-20 pl-1">
                    T
                  </span>
                  <span className="lg:block text-yellow-500 lg:pl-30 pl-1">
                    A
                  </span>
                  <span className="lg:block lg:pl-30 pl-1">B</span>
                  <span className="lg:block lg:pl-20 pl-1">A</span>
                  <span className="lg:block lg:pl-10 pl-1">S</span>
                  <span className="pl-1">E</span>
                </div>
              </div>
              <div className="block items-center px-3 sm:px-4 py-2 sm:py-3">
                <div className="items-center px-3 sm:px-4 py-2 sm:py-3 text-2xl">
                  <span className="text-white">
                    <span className="text-yellow-500">
                      Databases are important for making websites dynamic and
                      interactive. Whether you are browsing your favourite
                      online store, logging into a social media account or
                      watching a video, databases work silently behind the
                      scenes to manage and serve the data.
                    </span>
                    <br />A Database is a software system which is used to
                    maintain, manage and access an organized collection of data.
                    Just like a traditional library stores books in an organized
                    catalog system, a database stores data in tables or
                    documents, makes it easy to go and find a book and read
                    through it. Rather than manually combing through papers, a
                    database can help find what you need in a matter of seconds.
                  </span>
                </div>
                <div className="text-lg mt-5">
                  <div className="text-gray-400">
                    <span className="text-yellow-500">
                      List of Popular Web App Databases.
                    </span>
                    <span className="text-white">
                      <br />
                      There are different types of databases, each with unique
                      strengths. Here is a list of popular databases that are
                      commonly used in web development.
                    </span>
                    <br />
                    <br />
                    <div className="text-left">
                      <span>
                        <span className="text-yellow-500">
                          <a
                            className="border-b border-yellow-500 hover:border-yellow-500/50 hover:text-yellow-500/50"
                            href="https://www.mysql.com/de/"
                            target="_blank"
                          >
                            MYSQL:{" "}
                          </a>
                        </span>
                        It is one of the most widely used relational databases.
                        Great for handling data structures.
                      </span>
                      <br />
                      <br />
                      <span>
                        <span className="text-yellow-500">
                          <a
                            className="border-b border-yellow-500 hover:border-yellow-500/50 hover:text-yellow-500/50"
                            href="https://www.postgresql.org/"
                            target="_blank"
                          >
                            PostgreSQL: {""}
                          </a>
                        </span>
                        An advanced, open-source relational database known for
                        its durability and support for complex queries.
                      </span>
                      <br />
                      <br />
                      <span>
                        <span className="text-yellow-500">
                          <a
                            className="border-b border-yellow-500 hover:border-yellow-500/50 hover:text-yellow-500/50"
                            href="https://www.mongodb.com/de-de"
                            target="_blank"
                          >
                            MongoDB:{" "}
                          </a>
                        </span>
                        It is a NoSQL database that is flexible and perfect for
                        large scale applications with unstructured data.
                      </span>
                      <br />
                      <br />
                      <span>
                        <span className="text-yellow-500">
                          <a
                            className="border-b border-yellow-500 hover:border-yellow-500/50 hover:text-yellow-500/50"
                            href="https://sqlite.org/"
                            target="_blank"
                          >
                            SQLite:{" "}
                          </a>
                        </span>
                        A lightweight, serverless relational database that is
                        perfect for small to medium web applications.
                      </span>
                      <br />
                      <br />
                      <span>
                        <span className="text-yellow-500">
                          <a
                            className="border-b border-yellow-500 hover:border-yellow-500/50 hover:text-yellow-500/50"
                            href="https://firebase.google.com/?_gl=1*33jgfg*_up*MQ..&gclid=Cj0KCQiAg63LBhDtARIsAJygHZ5oZBad_dM2V8fOKu_96u5vdkCSKH75WW3e6YmRvIKJnSh5RIODzrwaAoicEALw_wcB&gclsrc=aw.ds&gbraid=0AAAAADpUDOgpeKqCO_Ra1OVUwZTTG_9vS"
                            target="_blank"
                          >
                            Firebase:{" "}
                          </a>
                        </span>
                        A cloud-based NoSQL database that allows developers to
                        build real-time applications. It is often used for
                        mobile and web apps with heavy interactivity.
                      </span>
                      <br />
                      <br />
                      <span>
                        <span className="text-yellow-500">
                          <a
                            className="border-b border-yellow-500 hover:border-yellow-500/50 hover:text-yellow-500/50"
                            href="https://redis.io/"
                            target="_blank"
                          >
                            Redis:{" "}
                          </a>
                        </span>
                        A key-value store commonly used for caching and session
                        management, helping to speed up web application
                        performance.
                      </span>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
