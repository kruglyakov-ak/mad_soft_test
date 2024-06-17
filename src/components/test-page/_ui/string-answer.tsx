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
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

interface IStringAnswerProps {
  question: string;
  id: string;
  setCurrentQuestion: () => void;
}

const FormSchema = z.object({
  answer: z
    .string()
    .min(2, {
      message: "Answer must be at least 2 characters.",
    })
    .max(50, {
      message: "Answer must be less than 50 characters.",
    }),
});

const StringAnswer: FC<IStringAnswerProps> = ({
  id,
  setCurrentQuestion,
  question,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answer: "",
    },
  });

  function onSubmit({ answer }: z.infer<typeof FormSchema>) {
    console.log("question-" + id, answer);
    setCurrentQuestion();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{question}</FormLabel>
              <FormControl>
                <Input placeholder="Введите ответ" {...field} />
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

export default StringAnswer;
