import { PartialType } from '@nestjs/mapped-types';
import { CraeteQuestionDto } from './create-question.dto';

export class UpdateQuestionDto extends PartialType(CraeteQuestionDto) { }
