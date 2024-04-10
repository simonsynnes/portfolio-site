/* eslint-disable max-len */

import { TitleProps } from "./interfaces/titleInterface";

/**
 * Title
 *
 *
 */
const Title = ({ children, id }: TitleProps) => (
  <h1
    className="text-2x1 font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
    id={id ? id : undefined}
  >
    {children}
  </h1>
);

export default Title;
