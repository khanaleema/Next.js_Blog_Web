"use client";

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-8 max-w-4xl w-full mx-4">
        <div className="md:w-1/3 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/e.webp" 
            alt="Contact Image"
            width={500} 
            height={300} 
            className="w-full h-full object-cover transform scale-110 hover:scale-125 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl font-extrabold mb-6 text-center md:text-left text-gray-900 dark:text-gray-100">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Email</h4>
                  <a href="mailto:khanaleema770@gmail.com" className="text-blue-700 dark:text-blue-400 hover:underline">
                    khanaleema770@gmail.com
                  </a>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/aleemakhan17/" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Phone</h4>
                  <a href="tel:03110205136" className="text-blue-700 dark:text-blue-400 hover:underline">
                    03110205136
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Based in</h4>
                <p className="text-gray-700 dark:text-gray-300">Karachi,<br />Pakistan</p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/aleemakhan17/" target="_blank" className="text-blue-700 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
                <a href="https://www.instagram.com/i._.aleemakhan/" target="_blank" className="text-blue-700 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://github.com/khanaleema" target="_blank" className="text-blue-700 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
