function lowercaseFirstCharacter(names) {
  return names.map((name) => name.charAt(0).toLowerCase() + name.slice(1));
}

const namesArray = ["Alice", "Bob", "Charlie", "David"];
const result = lowercaseFirstCharacter(namesArray);

console.log(result);

//mongodb part is :

db.employees.aggregate([
  {
    $addFields: {
      name: {
        $concat: [
          { $toLower: { $substrCP: ["$name", 0, 1] } },
          /* Lowercase first character*/ {
            $substrCP: ["$name", 1, { $strLenCP: "$name" }],
          } /* Remaining characters*/,
        ],
      },
    },
  },
]);


//Retieve vowels starting names :
db.employees.find({ name: { $regex: /^[aeiouAEIOU].*[^aeiouAEIOU]$/ } })