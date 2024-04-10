import React from "react";

import portfolio from "./data/portfolio";
import { PortfolioProps } from "./interfaces/portfolioInterface";
import PortfolioItem from "./PortfolioItem";
/**
 * Portfolio
 */
const Portfolio = () => (
  <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {portfolio.map((project: PortfolioProps) => (
        <React.Fragment key={project.title}>
          <PortfolioItem
            imgUrl={project.imgUrl}
            link={project.link}
            stack={project.stack}
            title={project.title}
          />
        </React.Fragment>
      ))}
    </div>
  </div>
);
export default Portfolio;
