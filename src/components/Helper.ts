export const _ = (array: any[number | string]) =>
  [...array].sort(() => Math.random() - 0.7);

export enum QuestionsDifficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuizProps = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizPropsState = QuizProps & { answers: string[] };

export const grabQuizQuestions = async (
  total_questions: number,
  difficulty: QuestionsDifficulty
): Promise<QuizPropsState> => {
  const url = `https://opentdb.com/api.php?amount=${total_questions}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(url)).json();
  return data.results.map((quizprops: QuizProps) => ({
    ...quizprops,
    answers: _([...quizprops.incorrect_answers, quizprops.correct_answer]),
  }));
};
