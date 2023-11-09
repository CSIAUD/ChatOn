import GroupHead from "@/components/GroupHead";
import Groupe from "@/model/Groupe";

export default function SideHeader() {
  const tabMessages = [];
  const tabGroupes: Array<Groupe> = [];

  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>+</button>
      {tabGroupes.map((groupe, index) => {
        return (
          <GroupHead
            key={index}
            lastMessage={"aahha"}
            unseenMessagesNumber={0}
          />
        );
      })}
    </div>
  );
}
