import FilterBtn from "../../../../../ui/FilterBtn";
import SearchInput from "../../../../../ui/SearchInput";

export default function AdminSearch() {
  return (
    <section>
      <div className="container">
        <div className="page_search_bg">
          <SearchInput />
          <FilterBtn />
        </div>
      </div>
    </section>
  );
}
