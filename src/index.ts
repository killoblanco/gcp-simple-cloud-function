import { Request, Response } from "express";

/**
 * helloWorld
 * @param {Request} req
 * @param {Response} res
 * @return {void}
 */
export function helloWorld(req: Request, res: Response): void {
    const message = req.query.message || req.body.message || "Hello world";
    res.status(200).send(message);
}