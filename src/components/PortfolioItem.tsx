import portfolio from "./data/portfolio";

/**
 * Portfolio Item
 */
type PortfolioItemProps = {
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
};
/**
 * Portfolio Item
 */
const PortfolioItem = ({ title, imgUrl, stack, link }: PortfolioItemProps) => (
  <div>
    <img
      alt="portfolio"
      className="w-full h-36 md:h-48 object cover"
      src={imgUrl}
    />
  </div>
);
export default PortfolioItem;
