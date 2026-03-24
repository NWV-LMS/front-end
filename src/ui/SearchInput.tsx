import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <div className="search_input">
      <CiSearch className="icon" />
      <input type="text" placeholder="Search by name, phone, or email..." />
    </div>
  );
}
