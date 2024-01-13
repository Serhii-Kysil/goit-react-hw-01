export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  console.log(avatar);
  <div className="item">
    <img className="avatar" src={avatar} alt="Avatar" width="48" />
    <p className="name">{name}</p>
    <p className="status">{isOnline}</p>
  </div>;
};
