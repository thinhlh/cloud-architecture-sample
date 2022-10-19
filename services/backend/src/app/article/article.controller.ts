import { HttpService } from "@nestjs/axios";
import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { firstValueFrom } from "rxjs";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";
import { CreateArticleDto } from "./dto/create-article.dto";

@Controller()
export class ArticleController {

    constructor(
        private readonly articleService: ArticleService,
        private readonly httpService: HttpService
    ) {

    }

    @Get("/articles")
    async getArticles(@Req() request: Request): Promise<Article[]> {
        // console.log('Called at endpoint: /articles');

        let articles: Article[] = []

        await firstValueFrom(this.httpService.get("http://logging:80/log"))

        if (process.env.OPTIMIZED === 'false') {
            articles = await this.articleService.getArticleNoReplica();
        } else {
            articles = await this.articleService.getArticles();
        }

        return articles;


    }

    @Post("/article")
    async createArticle(@Body() createArticleDTO: CreateArticleDto): Promise<Article> {
        return this.articleService.createArticle(createArticleDTO)
    }

    @Post("/articles")
    async createArticles(@Body() createArticleDTOs: CreateArticleDto[]): Promise<Article[]> {
        return Promise.all(
            createArticleDTOs
                .map(async (createArticleDTO) => await this.createArticle(createArticleDTO))
        )
    }
}