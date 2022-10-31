import React from "react";

const services = [
  {
    key: 1,
    image: "/images/header-img-2.jpg",
    title: "Aldo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisl non justo molestie lobortis. Mauris mattis libero sit amet convallis porttitor. Proin aliquet, nisl.        ",
  },
  {
    key: 2,
    image: "/images/header-img-2.jpg",
    title: "Estupendo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisl non justo molestie lobortis. Mauris mattis libero sit amet convallis porttitor. Proin aliquet, nisl.        ",
  },
  {
    key: 3,
    image: "/images/header-img-2.jpg",
    title: "Medio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisl non justo molestie lobortis. Mauris mattis libero sit amet convallis porttitor. Proin aliquet, nisl.        ",
  },
  {
    key: 4,
    image: "/images/header-img-2.jpg",
    title: "Carga",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisl non justo molestie lobortis. Mauris mattis libero sit amet convallis porttitor. Proin aliquet, nisl.        ",
  },
];

export default function Service() {
  return (
    <div className="mt-24 mb-28">
      {services.map((service) =>
        service.key % 2 === 1 ? (
          <div className="flex justify-between items-center text-left px-28 mt-20">
            <div className="block">
              <h1 className="text-5xl text-dark-grey font-bold">
                {service.title}
              </h1>
              <p className="mt-4 w-9/12 text-xl">{service.text}</p>
            </div>
            <img
              src={service.image}
              width={623}
              height={400}
              className="rounded-img"
            />
          </div>
        ) : (
          <div className="flex justify-between items-center text-right px-28 mt-20">
            <img
              src={service.image}
              width={623}
              height={400}
              className="rounded-img"
            />
            <div className="block">
              <h1 className="text-5xl text-dark-grey font-bold">
                {service.title}
              </h1>
              <p className="mt-4 w-9/12 ml-auto text-xl">{service.text}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}