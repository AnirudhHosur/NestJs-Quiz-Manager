import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { ApiTokenPaymentException } from "../exceptions/api-token-exception.exception";

export class ApiTokenCheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const apiToken = req.headers['api-token'];

        if (!apiToken || apiToken !== 'my-token') {
            throw new ApiTokenPaymentException
        }

        next();
    }
}
