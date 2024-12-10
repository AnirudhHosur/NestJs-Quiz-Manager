import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Option } from "../entities/option.entity";
import { Question } from "../entities/question.entity";
import { OptionRepository } from "../repositories/option.repository";
import { UpdateOptionDto } from "../dto/update-option.dto";

@Injectable()
export class OptionService {

    constructor(
        @InjectRepository(Option)
        private optionRepo: OptionRepository,
    ) { }

    // Get all options
    async getAllOptions(): Promise<Option[]> {
        return await this.optionRepo.find({
            relations: ['question'],
        });
    }

    // Get an option by ID
    async getOptionById(id: number): Promise<Option> {
        const option = await this.optionRepo.findOne({
            where: { id },
            relations: ['question'],
        });
        if (!option) {
            throw new NotFoundException(`Option with ID ${id} not found`);
        }
        return option;
    }


    async createOption(option: CreateOptionDto, question: Question): Promise<Option> {
        const newOption = this.optionRepo.create({
            ...option,
            question
        })
        return await this.optionRepo.save(newOption);
    }

    // Update an option
    async updateOption(id: number, updateOptionDto: UpdateOptionDto): Promise<Option> {
        const option = await this.getOptionById(id);
        Object.assign(option, updateOptionDto);
        return await this.optionRepo.save(option);
    }

    // Delete an option
    async deleteOption(id: number): Promise<{ message: string }> {
        const option = await this.getOptionById(id);
        await this.optionRepo.remove(option);
        return { message: `Option with ID ${id} successfully deleted` };
    }
}