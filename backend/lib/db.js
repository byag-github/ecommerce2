import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			serverSelectionTimeoutMS: 5000, // default 1000 → naikkan
			socketTimeoutMS: 45000, // untuk query lambat
		});
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
		process.exit(1);
	}
};
