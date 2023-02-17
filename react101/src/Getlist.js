import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
const Devs = ({ data, title, subtitle }) => {
  // so this is destructuring
  let movies = data.results;

  const addwatchlist = async (title, name, rating, poster_path) => {
    const data = {
      title,
      name,
      rating,
      imgPath: poster_path,
    };

    const response = await fetch("/api/watchList", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="container-lg">
      <h3 className="mb-4 mt-3">
        <span className="text-warning me-2 fw-bold">|</span>
        {title}
      </h3>{" "}
      <p className="lead">{subtitle}</p>
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={1}
          freeMode={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {movies.map((element) => (
            <SwiperSlide>
              {" "}
              <div className="card mb-5">
                <Link to={`/see/${element.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${element.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <p className="text-start mt-3 ms-2 ">
                  {" "}
                  <i className="fa-solid fa-star"></i>
                  <span className="ms-2">
                    {element.vote_average.toFixed(1)}
                  </span>
                </p>
                <p className="text-start ms-2  ">
                  {" "}
                  <Link
                    to={`/see/${element.id}/tv`}
                    className="text-white text-decoration-none"
                  >
                    {" "}
                    {element.name}
                  </Link>
                  <Link
                    to={`/see/${element.id}/movie`}
                    className="text-white text-decoration-none"
                  >
                    {" "}
                    {element.title}
                  </Link>
                </p>
                <p className="">
                  {element.release_date} {element.first_air_date}
                </p>
                <button
                  className="btn btn-sm btn-outline-warning border-0"
                  onClick={() => {
                    addwatchlist(
                      element.title,
                      element.name,
                      element.vote_average.toFixed(1),
                      element.poster_path
                    );
                  }}
                >
                  {" "}
                  <i className="fa-solid fa-plus"></i>
                  <span className="ms-2">watchList</span>
                </button>
                <button className="btn btn-sm btn-outline-primary mt-2 border-0 mb-2">
                  {" "}
                  <i className="fa-solid fa-play"></i>
                  <span className="ms-2">Trailer</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};
export default Devs;
