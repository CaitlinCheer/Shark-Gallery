const ItemList = ({ listItem, setListItem, index }) => {
  const removeItem = (event) => {
    event.preventDefault;
    setListItem((currentList) => {
      const filteredList = currentList.filter(
        (listItem) => currentList.indexOf(listItem) !== index
      );
      return filteredList;
    });
  };

  return (
    <>
      <p>{listItem}</p>
      <button onClick={removeItem}>butt</button>
    </>
  );
};

export default ItemList;
