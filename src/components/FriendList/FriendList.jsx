import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ items }) => {
  return (
    //   console.log(friends);
    <ul className="friend-list">
      {items.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
