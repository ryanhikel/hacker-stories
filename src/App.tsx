import { ChangeEvent, ReactElement, useState } from "react";

interface IStory {
  title: string,
  url: string,
  author: string,
  num_comments: number,
  points: number,
  objectID: number,
}

const App = (): ReactElement => {
  const stories: IStory[] = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },

    {
      title: 'Scrum',
      url: 'https://www.scrum.org/resources/what-scrum-module',
      author: 'Ken Schwaber, Jeff Sutherland',
      num_comments: 0,
      points: 8,
      objectID: 2,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('React');
  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };
  const searchedStories: IStory[] = stories.filter((story: IStory) =>
    story.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  )
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} search={searchTerm} />

      <hr />

      <List list={searchedStories} />
    </div>
  )
}

interface ISearchProps {
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const Search = ({ onSearch, search }: ISearchProps): ReactElement => {
  const handleBlur = (): void => {
    // onBlur event is triggered when the input field loses focus
    console.log('onBlur');
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearch}
        onBlur={handleBlur} />
    </div>
  )
}

interface IListProps {
  list: IStory[],
}
const List = ({ list }: IListProps): ReactElement => (
  <ul>
    {list.map((item: IStory) => (
      <Item key={item.objectID} item={item} />
    )
    )}
  </ul>
);

interface ItemProps {
  item: IStory,
  key: number,
}

const Item = ({ key, item }: ItemProps): ReactElement => (
  <li key={key}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

export default App;
