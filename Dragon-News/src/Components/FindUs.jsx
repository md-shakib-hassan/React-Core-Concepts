import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-[#4267B2]" />,
      link: "#",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-[#1DA1F2]" />,
      link: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-[#E4405F]" />,
      link: "#",
    },
  ];

  return (
    <div className="w-full max-w-sm ">
      <h2 className="mb-4 text-xl font-bold text-base-content">
        Find Us On
      </h2>

      <div className="overflow-hidden rounded-md border border-base-300 bg-base-100 ">
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.link}
            className={`flex items-center gap-4 px-4 py-3 transition hover:bg-base-200 ${
              index !== socialLinks.length - 1
                ? "border-b border-base-300"
                : ""
            }`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-base-200">
              {social.icon}
            </span>

            <span className="text-sm font-medium text-base-content/70">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FindUs;