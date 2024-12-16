import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Option } from "../../modules/quiz/entities/option.entity";
import { Question } from "../../modules/quiz/entities/question.entity";
import { Quiz } from "../../modules/quiz/entities/quiz.entity";
import { quizSampleData } from "../data/quiz.data";

export class QuizCreateSeed implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const quizRepository = dataSource.getRepository(Quiz);
        const questionRepository = dataSource.getRepository(Question);
        const optionRepository = dataSource.getRepository(Option);

        // Prepare all data structures
        const quizzes = quizSampleData.map(quizData => {
            const quiz = new Quiz();
            quiz.title = quizData.quizTitle;
            quiz.description = quizData.quizDescription;
            return quiz;
        });

        // Save all quizzes in bulk
        const savedQuizzes = await quizRepository.save(quizzes);

        // Prepare questions with their quiz relationships
        const questions = savedQuizzes.flatMap((quiz, quizIndex) => {
            return quizSampleData[quizIndex].questions.map(questionData => {
                const question = new Question();
                question.question = questionData.question;
                question.quiz = quiz;
                return question;
            });
        });

        // Save all questions in bulk
        const savedQuestions = await questionRepository.save(questions);

        // Prepare options with their question relationships
        const options = savedQuestions.flatMap((question, questionIndex) => {
            const questionData = quizSampleData[Math.floor(questionIndex / 2)].questions[questionIndex % 2];
            return questionData.options.map(optionData => {
                const option = new Option();
                option.text = optionData.text;
                option.isCorrect = optionData.isCorrect;
                option.question = question;
                return option;
            });
        });

        // Save all options in bulk
        await optionRepository.save(options);

        console.log(`Seeded ${quizSampleData.length} quizzes successfully`);
    }
}