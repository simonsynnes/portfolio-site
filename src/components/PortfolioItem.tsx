/* eslint-disable max-len */
import { PortfolioProps } from "./data/portfolioInterface";
/**
 * Portfolio Item
 */
const PortfolioItem = ({ title, imgUrl, stack, link }: PortfolioProps) => (
  <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
    <img
      alt="portfolio"
      className="w-full h-36 md:h-48 object cover cursor-pointer"
      src={imgUrl}
    />
    <div className="w-full p-4">
      <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
        {title}
      </h3>
      <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
        {stack.map((item: string) => (
          <span
            className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
            key={item}
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  </div>
);
export default PortfolioItem;
