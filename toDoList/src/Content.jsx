import { useState } from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

const Content = () => {
  const [listItem, setListItem] = useState(["myPeanits", "myPeanits?"]);

  return (
    <main>
      <AddItem />
      <ul>
        {listItem.map((item, index) => (
          <li key={index}>
            <ItemList listItem={item} setListItem={setListItem} index={index} />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Content;
