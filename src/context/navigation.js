import { createContext, useState, useEffect } from "react";

const NavigationContent = createContext();

function NavigationPRovider({ Children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContent.Provider value={{ currentPath, navigate }}>
      {Children}
    </NavigationContent.Provider>
  );
}

export { NavigationPRovider };
export default NavigationContent;
