import React from 'react';

const Publications = ({ data }) => (
  <section>
    <h1 className="section-header">Publications/Presentations</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start}
          </h3>
          <p className="py-6">{item.description}</p>
        </article>
      ))}
  </section>
);

export default Publications;
