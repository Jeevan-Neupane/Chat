import { useEffect, useState } from "react";
import Input from "../../reusablecomponents/inputField/Input";
import { SearchBarDiv, SearchIcon } from "./style";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { fetchUserData } from "../../store/api/userApi";
import { useDebounce } from "../../customhooks/useDebounce";
import { useLocation } from "react-router-dom";
type Props = {
  setSearchedFriends: React.Dispatch<any>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar = ({ setSearchedFriends, setLoading }: Props) => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);
  const token = useSelector((state: any) => state.user.token);
  const location = useLocation();

  const getSearchResults = async (debouncedSearch: string) => {
    const data = await fetchUserData(token, debouncedSearch);
    return data;
  };

  useEffect(() => {
    if (search.length > 0) {
      setLoading(true);
      getSearchResults(debouncedSearch).then((data) => {
        setSearchedFriends(data);

        setLoading(false);
      });
    } else {
      setSearchedFriends(null);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    setSearchedFriends(null);
    setSearch("");
  }, [location.pathname]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <SearchBarDiv>
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
      <Input
        type='text'
        placeholder='Enter username'
        onChange={onInputChange}
      />
    </SearchBarDiv>
  );
};

export default SearchBar;
