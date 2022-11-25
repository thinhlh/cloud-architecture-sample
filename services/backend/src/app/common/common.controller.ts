import { Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";

@Controller()
export class CommonController {
    @Get("hello")
    async uploadFile(@Res() res: Response) {
        res.redirect("https://www.google.com")
    }
}