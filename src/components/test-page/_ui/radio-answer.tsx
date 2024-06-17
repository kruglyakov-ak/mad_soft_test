"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Button } from "@/shared/ui/button";
import { saveAnswerToLocalStorage } from "@/shared/lib/utils";

interface IRadioAnswersProps {
  qestion: string;
  answers: [string, ...string[]];
  id: string;
  order: number;
  setCurrentQuestion: () => void;
}

const RadioAnswers: FC<IRadioAnswersProps> = ({
  qestion,
  answers,
  order,
  id,
  setCurrentQuestion,
}) => {
  const FormSchema = z.object({
    answer: z.enum(answers, {
      required_error: "You need to select an answer.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit({ answer }: z.infer<typeof FormSchema>) {
    saveAnswerToLocalStorage({ questionId: id, answer, order });
    setCurrentQuestion();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>{qestion}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {answers.map((answer) => (
                    <FormItem
                      key={answer}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={answer} />
                      </FormControl>
                      <FormLabel className="font-normal">{answer}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-[200px] bg-red-800" type="submit">
          Ответ
        </Button>
      </form>
    </Form>
  );
};

export default RadioAnswers;
