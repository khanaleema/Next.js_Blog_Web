import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer className="py-6 bg-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white dark:text-gray-200 mb-4">
            © 2024 Aleema Khan. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/aleemakhan17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/khanaleema"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.instagram.com/i._.aleemakhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
