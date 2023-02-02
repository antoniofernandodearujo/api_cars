import { Request, Response, NextFunction} from 'express';
import CarModel from "../model/CarModel";

const Validation = async (req: Request, res: Response, next: NextFunction) => {

    const { marca, modelo } = req.body

    if(!marca) {
        return res.status(400).json({error: 'Você deve escever o nome da marca'})
    } else if(!modelo) {
        return res.status(400).json({error: 'O modelo não pode estar vazio'})
    } else {
        next()
    }
}

export default Validation