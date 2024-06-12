import mongoose from "mongoose";

export const connectDB= async () => {
    await mongoose.connect('mongodb+srv://nguyenhoangphihung633:63632003@cluster0.6ulqizl.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}