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
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";

interface ITextAnswerProps {
  qestion: string;
  id: string;
  setCurrentQuestion: () => void;
}

const FormSchema = z.object({
  answer: z
    .string()
    .min(10, {
      message: "Answer must be at least 10 characters.",
    })
    .max(160, {
      message: "Answer must be less than 160 characters.",
    }),
});

const TextAnswer: FC<ITextAnswerProps> = ({
  id,
  setCurrentQuestion,
  qestion,
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
              <FormLabel>{qestion}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Введите ответ"
                  className="resize-none"
                  {...field}
                />
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

export default TextAnswer;
