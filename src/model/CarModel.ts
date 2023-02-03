import mongoose from "mongoose"
const Schema = mongoose.Schema

const CarModel= new Schema({
    marca: {type: String, required: true},
    modelo: {type: String, required: true},
    versao: {type: String, required: true},
    ano: {type: Number, required: true},
    quilometragem: {type: Number, required: true},
    tipoCambio: {type: String, required: true},
    precoVenda: {type: Number, required: true}
})

export default mongoose.model('car', CarModel)