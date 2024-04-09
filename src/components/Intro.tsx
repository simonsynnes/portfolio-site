/* eslint-disable max-len */
/**
 * Introduction
 */
const Intro = () => (
  <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
    <h1 className="text-4x1 md:text-7x1 mb-1 md:mb-3 font-bold dark:text-white">
      Simon
    </h1>
    <p className="text-base md:text-x1 mb-3 font-medium">
      Software Engineer & Web Developer{" "}
    </p>
    <p className="text-sm max-w-xl mb-6 font-bold">
      {" "}
      I am a full-stack developer building my version of the digital world and
      one step at a time. All coding projects are built from the ground up, from
      planning and designing all the way to solving real-life problems with
      code. Code can be found on my Github:
      <a
        className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        href="https://github.com/simonsynnes"
        rel="noreferrer noopener"
        target="_blank"
      >
        {" "}
        Simonsynnes{" "}
      </a>
    </p>
  </div>
);

export default Intro;
