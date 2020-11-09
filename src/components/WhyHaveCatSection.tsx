import React from 'react';

export const WhyHaveCatSection = () => {
  return (
    <article className="px-5 py-16 flex items-center">
      <div className="mr-5">
        <div className="w-16 bg-black rounded h-1" />
        <h3 className="text-5xl font-bold">Why should you have a cat?</h3>
        <p className="mt-10 mb-10">
          Having a cat around you can actually trigger the release of calming chemicals in your body
          which lower your stress and anxiety leves
        </p>
        <footer>
          <a
            href="#"
            className="pointer uppercase font-bold text-gray-600 hover:text-black transition-all duration-300"
          >
            Read More →
          </a>
        </footer>
      </div>
      <div className="grid grid-cols-10 gap-4">
        <img src="/homepage/image-2.png" alt="Cat" className="col-start-2 col-span-5 row-span-1" />
        <img src="/homepage/image-3.png" alt="Cat" className="col-span-4 row-span-2" />
        <img src="/homepage/image-1.png" alt="Cat" className="col-start-3 col-span-4 row-span-2" />
      </div>
    </article>
  );
};

export default WhyHaveCatSection;
