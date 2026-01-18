export default function FrontendInfo() {
  return (
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
                <span className="lg:block text-blue-500 lg:pl-10 pl-1">R</span>
                <span className="lg:block text-blue-500 lg:pl-20 pl-1">O</span>
                <span className="lg:block text-blue-500 lg:pl-30 pl-1">N</span>
                <span className="lg:block text-blue-500 lg:pl-30 pl-1">T</span>
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
                    user interface using some markup languages and other tools.
                  </span>
                  <br />
                  It is the development of the user side where only user
                  interaction will be counted. It consists of the interface
                  where buttons, texts, alignments, etc are involved and used by
                  the user.
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
                    It should be self-explanatory and must be user-friendly and
                    designed. so to achieve this we have some basic languages
                    which can be used to create interactive web pages. These are
                    the basic needs for the creation of a web page.
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
                      Introduced in 1993 and now at HTML5, it is a core language
                      for creating structured web content. It supports forms,
                      tables, and other elements needed to organize information,
                      and continues to evolve to help developers build
                      interactive, accessible interfaces across platforms.
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
                      stands for Cascading Style Sheets. It complements HTML by
                      adding styling, managing colors, and enabling responsive
                      designs. CSS helps developers create visually appealing,
                      consistent layouts across devices and screen sizes.
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
    </section>
  );
}
