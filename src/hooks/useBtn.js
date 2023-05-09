import { useState } from 'react';

export const useBtn = (initialState = false) => {
  const [isFollowed, setIsFollowed] = useState(initialState);
  const follow = () => setIsFollowed(true);
  const unFollow = () => setIsFollowed(false);
  return { isFollowed, follow, unFollow };
};
