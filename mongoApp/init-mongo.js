db = db.getSiblingDB('dbApp');

db.createCollection('collectionApp');

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
