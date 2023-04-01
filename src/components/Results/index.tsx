import { FC, useEffect, useState } from "react";

import { LoginResults } from "../../interfaces";
import { getDataFn } from "../../utils";

interface Props {
  login: string;
  results: LoginResults[];
  getResults: (data: LoginResults[]) => void;
  changeLoading: (state: boolean) => void;
  changeMessage: (message: string) => void;
}

interface SelectOption {
  value: string;
  text: string;
}

const Results: FC<Props> = ({
  login,
  results,
  getResults,
  changeLoading,
  changeMessage,
}) => {
  const [page, setPage] = useState<number>(1);

  console.log(results);

  const options: SelectOption[] = [
    { value: "best match", text: "Best Match" },
    { value: "followers", text: "Followers" },
    { value: "repositories", text: "Repositories" },
    { value: "joined", text: "Joined" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  useEffect(() => {
    if (page > 1 && selected.trim() !== "") {
      getDataFn({
        login,
        page,
        setLoading: changeLoading,
        getResults,
        setMessage: changeMessage,
        sort: selected,
      });
    } else if (page === 1 && login.trim() !== "" && selected.trim() !== "") {
      getDataFn({
        login,
        setLoading: changeLoading,
        getResults,
        setMessage: changeMessage,
        sort: selected,
      });
    }

    // eslint-disable-next-line
  }, [page, selected]);

  const pages: number[] =
    results.length === 9 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1];

  return (
    <div className="flex justify-center">
      <div className="w-[200px] max-h-[190px] md:w-[400px] md:max-h-[300px] lg:max-h-[220px] lg:max-w-[300px] 2xl:max-w-[1000px] 2xl:max-h-[2000px] flex justify-center py-[34px]">
        <img src="https://png.pngtree.com/png-clipart/20221007/original/pngtree-argentina-flag-png-image_8663295.png" alt="argentina"/>
      </div>
    </div>
  );
};

export default Results;
