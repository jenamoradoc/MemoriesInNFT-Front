import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches != matches) {
      setMatches(media.matches);
    }
    let listener = () => {
      return setMatches(media.matches);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
