import { FC, FormEvent, useState, useEffect } from "react";

import Spinner from "../Spinner";

import { LoginResults } from "../../interfaces";
import { getDataFn } from "../../utils";

interface Props {
  usernameEntered: (login: string) => void;
  getResults: (data: LoginResults[]) => void;
  changeLoading: (state: boolean) => void;
  loading: boolean;
  results: LoginResults[];
  changeMessage: (message: string) => void;
  message: string;
}

const Search: FC<Props> = ({
  usernameEntered,
  getResults,
  loading,
  changeLoading,
  results,
  changeMessage,
  message,
}) => {
  const [login, setLogin] = useState<string>("");

  useEffect(() => {
    if (results.length > 0) {
      getResults(results);
    }

    // eslint-disable-next-line
  }, [results]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (login.trim().length === 0) return;

    usernameEntered(login);
    getDataFn({
      login,
      setLoading: changeLoading,
      getResults,
      setMessage: changeMessage,
    });
  };

  const handleClearFilter = () => {
    if (login.trim().length > 0) {
      setLogin("");
      usernameEntered("");
      getResults([]);
    }
  };

  return (
    <>
      <div className="px-24 pt-10 w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex justify-center">
            <h1 className="font-light text-lg md:text-3xl lg:text-6xl pb-10 text-white">Escribe tu historia</h1>
          </div>
          <div className="flex justify-center pb-5 h-full w-full">
            <textarea
              value={login}
              autoFocus
              onChange={({ target }) => setLogin(target.value)}
              className="w-full lg:w-10/12 h-[300px] lg:h-[100px] lg:text-2xl p-2"
              style={{ resize: "none" }}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-700 text-white px-5 py-2 rounded-md font-light">
              Generar
            </button>
          </div>

          {message.trim().length > 0 && (
            <p className="">{message}</p>
          )}
        </form>
      </div>
      {loading && <Spinner />}
    </>
  );
};

export default Search;
