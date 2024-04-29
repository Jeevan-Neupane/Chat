import { useEffect, useState } from "react";
import Input from "../../reusablecomponents/inputField/Input";
import { SearchBarDiv, SearchIcon } from "./style";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { fetchUserData } from "../../store/api/userApi";
type Props = {
  setSearchedFriends: React.Dispatch<any>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar = ({ setSearchedFriends, setLoading }: Props) => {
  const [search, setSearch] = useState<string>("");
  const token = useSelector((state: any) => state.user.token);

  const getSearchResults = async () => {
    const data = await fetchUserData(token, search);
    return data;
  };

  useEffect(() => {
    if (search.length > 0) {
      setLoading(true);
      getSearchResults().then((data) => {
        setSearchedFriends(data);

        setLoading(false);
      });
    } else {
      setSearchedFriends([]);
    }
  }, [search]);

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
