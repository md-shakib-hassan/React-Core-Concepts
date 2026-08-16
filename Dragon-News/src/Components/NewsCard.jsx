import React from "react";
import { Link, useLocation } from "react-router-dom";

const NewsCard = ({ news }) => {
  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const location = useLocation();

  // console.log(location.state)

  return (
    <article className="card  w-full my-5 bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Author */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src={news.author.img}
                alt={news.author.name}
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm">
              {news.author.name}
            </h3>

            <p className="text-xs text-base-content/50">
              {formattedDate}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            className="btn btn-ghost btn-sm btn-circle"
            aria-label="Bookmark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5.5A2.5 2.5 0 017.5 3h9A2.5 2.5 0 0119 5.5V21l-7-4-7 4V5.5z"
              />
            </svg>
          </button>

          <button
            className="btn btn-ghost btn-sm btn-circle"
            aria-label="Share"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 12v6a2 2 0 002 2h8a2 2 0 002-2v-6M12 16V4m0 0l-4 4m4-4l4 4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="card-body p-4">

        {/* Title */}
        <h2 className="card-title text-base sm:text-lg leading-6">
          {news.title}
        </h2>

        {/* Image */}
        <figure className="mt-2">
          <img
            src={news.thumbnail_url}
            alt={news.title}
            className="w-full h-48 sm:h-52 object-cover rounded-lg"
          />
        </figure>

        {/* Description */}
        <div className="mt-2">
          <p className="text-xs sm:text-sm text-base-content/60 leading-5 line-clamp-3">
            {formattedDate} |{" "}
            {news.tags.map((tag, index) => (
              <React.Fragment key={tag}>
                {tag}
                {index !== news.tags.length - 1 && ", "}
              </React.Fragment>
            ))}
            . {news.details}
          </p>
            <Link  to={`/news_detail/${news.id}`}><button className="text-xs font-semibold text-orange-500 hover:text-orange-600 mt-1">
            Read More
            
          </button></Link>
          
        </div>

        <div className="divider my-1"></div>

        {/* Bottom information */}
        <div className="flex items-center justify-between">

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400 text-lg tracking-tight">
              {"★".repeat(news.rating.number)}
            </div>

            <span className="text-xs text-base-content/60">
              {news.rating.number}.0
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-base-content/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12s3.75-6 9.75-6 9.75 6 9.75 6-3.75 6-9.75 6-9.75-6-9.75-6z"
              />
              <circle cx="12" cy="12" r="2.5" />
            </svg>

            <span className="text-xs">
              {news.total_view.toLocaleString()}
            </span>
          </div>

        </div>
      </div>
    </article>
  );
};

export default NewsCard;