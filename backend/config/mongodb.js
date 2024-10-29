import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Establish the database connection without deprecated options
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);

        // Log success
        console.log("Database Connected");
    } catch (error) {
        // Handle connection errors
        console.error("Database Connection Error:", error.message);
        process.exit(1); // Exit the process with failure
    }

    // Handling disconnection events
    mongoose.connection.on('disconnected', () => {
        console.log("Database Disconnected");
    });
};

export default connectDB;






// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => console.log("Database Connected"))

//     await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
// }

// export default connectDB