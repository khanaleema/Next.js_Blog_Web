import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/iii.webp"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4 leading-relaxed">
                Hello! I&apos;m Aleema Khan, a passionate frontend developer, web developer, UI/UX designer & graphic designer. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I&apos;m here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg leading-relaxed">
                Whether you&apos;re just starting out or looking to sharpen your skills, you&apos;ll find a variety of resources and insights here. Let&apos;s explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Aleema&apos;s Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50 leading-relaxed">
              From curious beginner to seasoned developer, here&apos;s how Aleema navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image 
                  src="/a.jpeg" 
                  alt="Harry as a beginner" 
                  width={500} 
                  height={300} 
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 leading-relaxed">
                  Aleema&apos;s coding journey began with YouTube, where she first learned HTML and CSS. What started as a simple curiosity quickly turned into a passion, as Aleema spent countless hours experimenting with code, building small projects, and learning the fundamentals of development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image 
                  src="/b.jpeg" 
                  alt="Harry learning new skills" 
                  width={500} 
                  height={300} 
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 leading-relaxed">
                  After mastering the basics, Aleema&apos;s thirst for knowledge grew. She was fortunate enough to come across an opportunity that she applied for and was selected for, marking the true beginning of her journey at GIAIC Governor House. Here, Aleema delved deeper into complex topics such as data structures, algorithms, and web development, expanding her skill set and applying her knowledge to real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image 
                  src="/c.png" 
                  alt="Harry working on a big project" 
                  width={500} 
                  height={300} 
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 leading-relaxed">
                  With over a year of experience under her belt, Aleema began tackling more significant challenges. She has successfully built websites and contributed to various projects, continuously pushing her limits and seeking opportunities to learn and grow. Her journey hasn&apos;t been without its setbacks, but each obstacle has served as a stepping stone, shaping her into a capable developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
