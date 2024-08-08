db = db.getSiblingDB('dbA');

db.createCollection('collectionA');

db.yourCollectionName.insertMany([
  {
    name: "Item 1",
    description: "Description for Item 1"
  },
  {
    name: "Item 2",
    description: "Description for Item 2"
  }
]);
