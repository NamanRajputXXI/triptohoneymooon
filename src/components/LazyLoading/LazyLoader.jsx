"use client";

//! Getting error with the use of this component in the product page will use it later
import React, { Suspense, useEffect, useRef, useState } from "react";
import Loading from "@/components/LazyLoading/Loading";

const LazyLoader = ({ children, rootMargin = "200px", threshold = 0.2 }) => {
  const [loadComponent, setLoadComponent] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadComponent(true);
            observer.disconnect(); // Disconnect the observer after triggering
          }
        });
      },
      { rootMargin, threshold }
    );

    const observeElement = (element) => {
      if (element) {
        observer.observe(element);
      }
    };

    if (componentRef.current) {
      observeElement(componentRef.current);
    }

    return () => {
      observer.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, [rootMargin, threshold]);

  return (
    <div ref={componentRef}>
      {loadComponent ? (
        <Suspense fallback={<Loading />}>{children}</Suspense>
      ) : (
        <div style={{ minHeight: "1px" }} /> // Empty div with minimum height
      )}
    </div>
  );
};

export default LazyLoader;
