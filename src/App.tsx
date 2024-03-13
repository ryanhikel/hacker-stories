import { ChangeEvent, ReactElement } from "react";

type IStory = {
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
  ];
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={stories} />
    </div>
  )
}

const Search = (): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log((event.target as HTMLInputElement).value);
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  };

  const handleBlur = (): void => {
    // onBlur event is triggered when the input field loses focus
    console.log('onBlur');
  }


  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} onBlur={handleBlur} />
    </div>
  )
}

type IListProps = {
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

type ItemProps = {
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
