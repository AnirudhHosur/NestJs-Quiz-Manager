import { Test, TestingModule } from "@nestjs/testing"
import { OptionController } from "src/modules/quiz/controllers/option.controller"
import { Option } from "src/modules/quiz/entities/option.entity"
import { Question } from "src/modules/quiz/entities/question.entity"
import { OptionService } from "src/modules/quiz/services/option.service"
import { QuestionService } from "src/modules/quiz/services/question.service"

describe('OptionController', () => {
    let optionController: OptionController
    let optionService: OptionService
    let questionService: QuestionService

    beforeEach(async () => {
        // mock the OptionService
        const mockOptionService = {
            getAllOptions: jest.fn() // Mocking the 1st method
        };

        const mockQuestionService = {};

        // Create a testing module with the controller and mock service
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OptionController],
            providers: [
                {
                    provide: OptionService,
                    useValue: mockOptionService
                },
                {
                    provide: QuestionService,
                    useValue: mockOptionService
                }
            ]
        }).compile();

        optionController = module.get<OptionController>(OptionController);
        optionService = module.get<OptionService>(OptionService);
    });

    describe('getAllOptions', () => {
        it('should return an array of options', async () => {
            // Mock Question
            const mockQuestion: Question = { id: 1, question: 'This is my 1st question' } as Partial<Question> as Question;
            // Mock data
            const mockOptions: Option[] = [
                { id: 1, text: 'Option 1', isCorrect: false, question: mockQuestion } as Partial<Option> as Option,
                { id: 2, text: 'Option 1', isCorrect: true, question: mockQuestion } as Partial<Option> as Option,
            ];

            // Mock the service's getAllOptions method
            jest.spyOn(optionService, 'getAllOptions').mockResolvedValue(mockOptions);

            // Call the controller method
            const result = await optionController.getAllOptions();

            // Assertions
            expect(optionService.getAllOptions).toHaveBeenCalled();
            expect(result).toEqual(mockOptions);
        })
    })
})