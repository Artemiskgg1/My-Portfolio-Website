import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[
          { title: "Title1", description: "Description1", id: 1 },
          { title: "Title1", description: "Description1", id: 1 },
          { title: "Title1", description: "Description1", id: 1 },
          { title: "Title1", description: "Description1", id: 1 },
        ].map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
