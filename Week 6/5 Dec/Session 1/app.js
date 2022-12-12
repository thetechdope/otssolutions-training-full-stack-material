const ListItems = (props) => {
  return React.createElement("li", { className: "items" }, props.title);
};

const List = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return React.createElement("div", null, [
    React.createElement(
      "ul",
      null,
      arr.map((i) => React.createElement(ListItems, { title: i }))
    ),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("add-here"));
root.render(React.createElement(List));
