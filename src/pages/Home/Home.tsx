import { FC, useCallback, useState } from "react";

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
    <div className="md:flex w-full">
      <Search
        changeLoading={changeLoading}
        changeMessage={changeMessage}
        getResults={getResults}
        loading={loading}
        message={message}
        results={results}
        usernameEntered={getLoginQuery}
      />
      <div className="flex justify-center">
      <Results
        changeLoading={changeLoading}
        changeMessage={changeMessage}
        getResults={getResults}
        login={queryLogin}
        results={results}
      /> 
      </div>
    </div>
  )
}

export default Home
