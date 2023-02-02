import mongoose from "mongoose"
const Schema = mongoose.Schema

const CarModel= new Schema({
    marca: String,
    modelo: String
})

export default mongoose.model('car', CarModel)