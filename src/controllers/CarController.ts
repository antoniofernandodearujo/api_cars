import { Request, Response } from "express"
import CarModel from "../model/CarModel"

const CarController = {
    async index(req: Request, res: Response): Promise<Response> {        
        let cars = await CarModel.find()
        return res.json(cars)
    },

    async findById(req: Request, res: Response): Promise<Response> {        
        const { id } = req.params
        let cars = await CarModel.findById(id)
        return res.json(cars)
    },

    async create(req: Request, res: Response): Promise<Response> {                
        let cars = await CarModel.create(req.body)
        return res.json(cars)
    },

    async update(req: Request, res: Response): Promise<Response> {        
        const { id } = req.params
        let cars = await CarModel.findByIdAndUpdate(id, req.body)
        return res.json(cars)
    },

    async delete(req: Request, res: Response): Promise<Response> {        
        const { id } = req.params

        const {
            marca,
            modelo,
            versao,
            ano,
            quilometragem,
            tipoCambio,
            precoVenda
        } = req.body

        let cars = await CarModel.findByIdAndDelete(id, {
            marca: marca,
            modelo: modelo,
            versao: versao,
            ano: ano,
            quilometragem: quilometragem,
            tipoCambio: tipoCambio,
            precoVenda: precoVenda
        })
        return res.json(cars)
    },

}

export default CarController