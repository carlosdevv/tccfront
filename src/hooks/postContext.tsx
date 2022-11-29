import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { PostProps } from './type';

type PostProviderProps = {
  children: ReactNode;
};

type PostContextData = {
  postList: Array<PostProps>;
  handleIncrementPostList: (item: PostProps) => void;
  handleIncrementLikes: (index: number) => void;
  handleDecrementLikes: (index: number) => void;
};

const PostContext = createContext({} as PostContextData);

export const PostProvider = ({ children }: PostProviderProps) => {
  const [postList, setPostList] = useState([
    {
      index: 0,
      user: 'Tiko',
      nick: '@tiko.lo',
      date: '28 de nov',
      description: 'Neymar é gênio!',
      comments: 0,
      likes: 0,
    },
    {
      index: 1,
      user: 'Tiko',
      nick: '@tiko.lo',
      date: '27 de nov',
      description: 'Bora Brasil!',
      comments: 0,
      likes: 0,
    },
    {
      index: 2,
      user: 'Verman Benja',
      nick: '@benjaschult',
      date: '28 de out',
      description: 'Tcc entregue.',
      comments: 0,
      likes: 0,
    },
  ]);

  const handleIncrementPostList = useCallback((newPost: PostProps) => {
    setPostList((prevState) => [...prevState, newPost]);
  }, []);

  const handleIncrementLikes = useCallback(
    (index: number) => {
      const postFinded = postList.find((element) => element.index === index);
      const postIndex = postList.indexOf(postFinded!);

      if (postFinded) {
        const postIncrementLike = {
          ...postFinded,
          likes: postFinded.likes + 1,
        };

        postList[postIndex] = postIncrementLike;
      }
    },
    [postList]
  );

  const handleDecrementLikes = useCallback(
    (index: number) => {
      const postFinded = postList.find((element) => element.index === index);
      const postIndex = postList.indexOf(postFinded!);

      if (postFinded) {
        const postDecrementLike = {
          ...postFinded,
          likes: postFinded.likes - 1,
        };

        postList[postIndex] = postDecrementLike;
      }
    },
    [postList]
  );

  return (
    <PostContext.Provider
      value={{
        handleIncrementPostList,
        postList,
        handleIncrementLikes,
        handleDecrementLikes,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);

  return context;
};
