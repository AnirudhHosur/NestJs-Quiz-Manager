import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OptionRepository } from "../repositories/option.repository";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Question } from "../entities/question.entity";
import { Option } from "../entities/option.entity";

@Injectable()
export class OptionService {

    constructor(
        @InjectRepository(Option)
        private optionRepo: OptionRepository,
    ) {}

    async createOption(option: CreateOptionDto, question: Question): Promise<Option> {
        const newOption = this.optionRepo.create({
            ...option,
            question
        })
        return await this.optionRepo.save(newOption);
    }
}