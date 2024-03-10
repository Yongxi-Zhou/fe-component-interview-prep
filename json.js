const jsonStr = '{"name": "John", "age": 30, "city": "New York"}';

const jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);

function traverse(obj) {
  //   let fragment = document.createElement("div");
  let child = document.createElement("div");

  for (let key in obj) {
    if (obj.hasOwnProperty("children") && key === "children") {
      obj[key].forEach((element) => {
        child.appendChild(traverse(element));
      });
    } else {
      let value = obj[key];

      let p = document.createElement("p");
      p.innerHTML = `${key}: ${value}`;
      child.appendChild(p);
    }
  }
  //   fragment.appendChild(child);
  return child;
}

function maxDepth(obj) {
  if (typeof obj != "object") {
    return 1;
  }
  let depth = 0;
  if (obj.hasOwnProperty("children")) {
    obj["children"].forEach((element) => {
      depth = Math.max(depth, maxDepth(element));
    });
  }
  return depth + 1;
}

let json = {
  id: "1",
  name: "root",
  children: [
    {
      id: "2",
      name: "child1",
    },
    {
      id: "3",
      name: "child2",
      children: [
        {
          id: "4",
          name: "grandchild1",
        },
      ],
    },
  ],
};
// const test = JSON.parse(json);
// console.log(test);
let tree = traverse(json);
document.body.appendChild(tree);

console.log(maxDepth(json));
