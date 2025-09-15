import { useLocation, Link } from "@tanstack/react-router";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center text-center h-full">
      <div className="p-8">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;