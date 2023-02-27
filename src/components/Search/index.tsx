/** @format */

export const Search: React.FC = () => {
  return (
    <div className="header__search search-header">
      <div className="search-header__title">Filter by keywords</div>
      <div className="search-header__items">
        <svg
          className="search-header__icon search-header__icon-search"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z"
            fill="#B5B5B5"
          />
        </svg>
        <input type="text" placeholder="Search..." className="search-header__input" />
        <svg
          className="search-header__icon search-header__icon-remove"
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 1H8C4.13401 1 1 4.13401 1 8V24C1 27.866 4.13401 31 8 31H24C27.866 31 31 27.866 31 24V8C31 4.13401 27.866 1 24 1ZM8 0C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0H8Z"
            fill="#DBDBDB"
          />
          <path
            d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
            fill="#B5B5B5"
          />
        </svg>
      </div>
    </div>
  );
};
