const getSelectedItems = (items) => {
  return items.filter((item) => {
    return (item.selected === true);
  });
}

export default getSelectedItems;

