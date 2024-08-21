// Function to generate a random string-based _id
function generateStringId() {
  return Math.random().toString(36).substring(2, 18); // Generates a 16-character string
}

// Switch to the 'dbWise' database
const db = db.getSiblingDB('dbSoft');

// Create collections
db.createCollection('items');
db.createCollection('accounts');
db.createCollection('users'); // Create a new 'users' collection

// Insert users with auto-generated string _id
const user1Id = generateStringId();
const user2Id = generateStringId();

db.users.insertMany([
  {
    _id: user1Id,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
  },
  {
    _id: user2Id,
    firstName: 'Maria',
    lastName: 'Smith',
    email: 'maria.smith@example.com',
    phoneNumber: '+0987654321',
  }
]);

// Insert accounts with userId mapped to the _id of the corresponding user
db.accounts.insertMany([
  {
    _id: generateStringId(),
    userId: user1Id,
    username: 'john',
    password: 'changeme',
  },
  {
    _id: generateStringId(),
    userId: user2Id,
    username: 'maria',
    password: 'guess',
  }
]);

// Insert items
db.items.insertMany([
  {
    _id: generateStringId(),
    name: "Item 1",
    description: "Description for Item 1",
    createdAt: new Date()
  },
  {
    _id: generateStringId(),
    name: "Item 2",
    description: "Description for Item 2",
    createdAt: new Date()
  }
]);

// Create indexes
db.accounts.createIndex({ username: 1 }, { unique: true });
db.items.createIndex({ name: 1 });
db.users.createIndex({ email: 1 }, { unique: true }); // Index for 'users' collection
db.users.createIndex({ phoneNumber: 1 }, { unique: true }); // Optional: Index for 'phoneNumber' in 'users' collection

// Print confirmation
print("Database setup completed successfully.");