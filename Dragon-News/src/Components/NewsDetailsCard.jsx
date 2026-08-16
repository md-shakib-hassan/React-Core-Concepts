import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const NewsDetailsCard = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const [news, setNews] = useState({})



    useEffect(() => {
        const singleNews = data.find(element =>   element.id == id   );

        setNews(singleNews);
    },[data,id])

    console.log(news);

    const { category_id, title, details, thumbnail_url } = news;

 

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Category */}
            <h2 className="text-sm font-medium text-gray-700 mb-3">
                Dragon News
            </h2>

            {/* Card */}
            <article className="border border-gray-200 bg-white p-3 sm:p-4">
                {/* Image */}
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-sm"
                />

                {/* Content */}
                <div className="mt-3">
                    {/* Title */}
                    <h1 className="text-lg sm:text-xl font-bold text-gray-800 leading-6">
                        {title}
                    </h1>

                    {/* Author + Date */}
                    <div className="flex items-center gap-2 mt-2">
                       
                        
                    </div>

                    {/* Details */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-5 mt-3">
                        {details}
                    </p>

                    {/* Extra information */}
                    
                    {/* Button */}
                   <Link to={`/categories/${category_id}`}>
                    <button
                        type="button"
                        className="mt-4 bg-pink-600 hover:bg-pink-700 
                       text-white text-xs sm:text-sm
                       px-4 py-2 transition duration-200"
                    >
                        ← All news in this category
                    </button></Link>
                </div>
            </article>
        </div>
    );
};

export default NewsDetailsCard;