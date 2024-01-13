import css from "./FriendListItem.module.css";
import defaultAvatar from "./defa.jpg";
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  console.log(isOnline);
  const profileImage = avatar || defaultAvatar;
  const statusClass = isOnline ? css.online : css.offline;
  return (
    <div className={css.item}>
      <img className={css.avatar} src={profileImage} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
