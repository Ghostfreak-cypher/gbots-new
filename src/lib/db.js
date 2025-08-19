import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://grobotsclub:uDzgEKVv3Be8Qt5k@main-website.7elkaai.mongodb.net/?retryWrites=true&w=majority&appName=Main-Website";

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4 // Use IPv4, skip trying IPv6
    };

    console.log('Attempting to connect to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected successfully');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('MongoDB connection failed:', e.message);
    
    // Provide specific error messages
    if (e.message.includes('IP') || e.message.includes('whitelist')) {
      throw new Error(`MongoDB connection failed: Your IP address (${process.env.CURRENT_IP || 'unknown'}) is not whitelisted. Please add it to your MongoDB Atlas Network Access list.`);
    } else if (e.message.includes('authentication')) {
      throw new Error('MongoDB connection failed: Invalid credentials. Please check your username and password.');
    } else if (e.message.includes('network')) {
      throw new Error('MongoDB connection failed: Network error. Please check your internet connection.');
    } else {
      throw new Error(`MongoDB connection failed: ${e.message}`);
    }
  }

  return cached.conn;
}

export default dbConnect;
