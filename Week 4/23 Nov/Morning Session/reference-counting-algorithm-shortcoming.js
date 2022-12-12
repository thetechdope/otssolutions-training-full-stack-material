// Reference Counting Algorithm Short Coming

let son = {
  name: "ABC",
};

let father = {
  name: "DEF",
};

console.log(son);
console.log(father);

son.father = father;
father.son = son;

console.log(son);
console.log(father);

son = null;
father = null;

console.log(son);
console.log(father);