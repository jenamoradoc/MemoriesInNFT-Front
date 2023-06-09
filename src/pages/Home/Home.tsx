import { FC, useCallback, useState } from "react";

import { motion } from "framer-motion";

import { Results, Search } from "../../components";
import { LoginResults } from "../../interfaces";

function Home() {
  const [queryLogin, setQueryLogin] = useState<string>("");
  const [results, setResults] = useState<LoginResults[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const getLoginQuery = useCallback(
    (login: string) => setQueryLogin(login),
    []
  );

  const getResults = useCallback(
    (data: LoginResults[]) => setResults(data),
    []
  );

  const changeLoading = useCallback((state: boolean) => setLoading(state), []);

  const changeMessage = useCallback(
    (message: string) => setMessage(message),
    []
  );
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen sm:pt-20 sm:flex-col w-full">
      <div className="w-full h-full">
        <Search
          changeLoading={changeLoading}
          changeMessage={changeMessage}
          getResults={getResults}
          loading={loading}
          message={message}
          results={results}
          usernameEntered={getLoginQuery}
        />
        <Results
          changeLoading={changeLoading}
          changeMessage={changeMessage}
          getResults={getResults}
          login={queryLogin}
          results={results}
        />
      </div>
    </motion.div>
  )
}

export default Home
