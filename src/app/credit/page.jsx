import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto md:my-20 my-10">
        <h1 className="text-7xl text-center pb-10 font-bold mb-4">Credits</h1>

        {/* Image Credits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Image Credits</h2>
          <p className="text-base mb-2">
            All images used on this website are sourced from{" "}
            <a
              href="https://unsplash.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            ,{" "}
            <a
              href="https://pixabay.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
            , and{" "}
            <a
              href="https://www.pexels.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>
            .
          </p>
          <p className="text-base mb-2">
            These platforms provide beautiful, free-to-use images that you can
            download and use for any purpose. Please review their respective
            terms of service for more information on how you can use these
            images legally:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://unsplash.com/terms"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash Terms of Service
              </a>
            </li>
            <li>
              <a
                href="https://pixabay.com/service/terms/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay Terms of Service
              </a>
            </li>
            <li>
              <a
                href="https://www.pexels.com/terms/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pexels Terms of Service
              </a>
            </li>
          </ul>
          <p className="text-base">
            By using these images, you agree to comply with the terms and
            conditions of each platform.
          </p>
        </section>

        {/* Video Credits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Video Credits</h2>
          <p className="mb-2">
            Some videos used on this website are sourced from{" "}
            <a
              href="https://unsplash.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            ,{" "}
            <a
              href="https://pixabay.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
            , and{" "}
            <a
              href="https://www.pexels.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>
            .
          </p>
          <p>
            Videos on these platforms are provided by generous creators for free
            use. Please refer to their respective licenses for details on using
            these videos:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://unsplash.com/license"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash License
              </a>
            </li>
            <li>
              <a
                href="https://pixabay.com/service/license/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay License
              </a>
            </li>
            <li>
              <a
                href="https://www.pexels.com/license/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pexels License
              </a>
            </li>
          </ul>
          <p>Ensure compliance with the terms when using these videos.</p>
        </section>

        {/* GIF Credits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">GIF Credits</h2>
          <p className="mb-2">
            Certain GIFs used on this website are sourced from{" "}
            <a
              href="https://unsplash.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            ,{" "}
            <a
              href="https://pixabay.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
            , and{" "}
            <a
              href="https://www.pexels.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>
            .
          </p>
          <p>
            GIFs on these platforms are provided under their respective licenses
            and can be used for various purposes. Review the licenses for
            specific usage guidelines:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://unsplash.com/license"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash License
              </a>
            </li>
            <li>
              <a
                href="https://pixabay.com/service/license/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay License
              </a>
            </li>
            <li>
              <a
                href="https://www.pexels.com/license/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pexels License
              </a>
            </li>
          </ul>
          <p>Always adhere to the terms when using these GIFs.</p>
        </section>

        {/* Other Credits */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Other Credits</h2>
          <p className="mb-2">
            Some design elements and content used on this website are sourced
            from other websites or creators.
          </p>
          <p className="mb-4">
            Please ensure to provide appropriate attribution and comply with the
            terms of use for any external content used. The creators of external
            content deserve recognition for their work, and it is important to
            respect their rights and terms of use.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default page;
