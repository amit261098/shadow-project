

// const SearchBar = () => (
//     <form action="/" method="get">
//         <label htmlFor="card__title">
//             <span className="visually-hidden">SearchBar</span>
            
//         </label>
//         <input
//             type="text"
//             id="card__title"
//             placeholder="SearchBar"
//             name="s" 
//         />
//         <button type="submit">Search</button>
//     </form>
// );

// export default SearchBar;

// import { useState } from 'react';
// import Data from './Data';

// function Search() {
//     const { search } = window.location;
//     const query = new URLSearchParams(search).get('s');
//     const [searchQuery, setSearchQuery] = useState(query || '');
//     const filteredData = filterData(Data, searchQuery);

//     <form action="/" method="get">
//          <label htmlFor="card__title">
//              <span className="visually-hidden">SearchBar</span>
            
//          </label>
//          <input
//              type="text"
//              id="card__title"
//              placeholder="SearchBar"
//              name="s" 
//          />
//          <button type="submit">Search</button>
//      </form>

//     return (
//         <div>
//             <Search
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//             />
//             <ul>
//                 {filteredData.map(data => (
//                     <li key={Data.id}>{Data.first_name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// };

// const filteredData = (Data, query) => {
//     if (!query) {
//         return Data;
//     }

//     return Data.filter((Data) => {
//         const DataName = Data.name.toLowerCase();
//         return DataName.includes(query);
//     });

// export default Search;


import  useHistory  from 'use-history';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search blog posts
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;