const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const connect = await mongoose.connect("mongodb+srv://suyashkamath:31015608@cluster0.c6up6mj.mongodb.net/?retryWrites=true&w=majority" , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };
  export { connectDB };

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const connectDB = async () => {
//   try {
//     const connect = await mongoose.connect("mongodb+srv://suyashkamath:31015608@cluster0.c6up6mj.mongodb.net/?retryWrites=true&w=majority" , {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB Connected: ${connect.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// // 


