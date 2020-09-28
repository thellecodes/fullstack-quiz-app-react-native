export const _ = null 

export enum QuestionsDifficulty {

}

export type QuizProps = {
 
};

export type QuizPropsState = QuizProps & { answers: string[] };

export const grabQuizQuestions = async (
  total_questions: number,
  difficulty: QuestionsDifficulty
): Promise<QuizPropsState> => {
  
};
