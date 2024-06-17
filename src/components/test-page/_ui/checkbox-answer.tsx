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
import { Checkbox } from "@/shared/ui/checkbox";
import { TestState } from "@/store/slices/test";
import { saveAnswerToLocalStorage } from "@/shared/lib/utils";

interface ICheckboxAnswerProps {
  question: string;
  answers: string[];
  id: string;
  order: number;
  setCurrentQuestion: () => void;
}

const CheckboxAnswer: FC<ICheckboxAnswerProps> = ({
  question,
  answers,
  id,
  order,
  setCurrentQuestion,
}) => {
  const FormSchema = z.object({
    answer: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answer: [],
    },
  });

  function onSubmit({ answer }: z.infer<typeof FormSchema>) {
    saveAnswerToLocalStorage({ questionId: id, answer, order });
    setCurrentQuestion();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="answer"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">{question}</FormLabel>
              </div>
              {answers.map((item) => (
                <FormField
                  key={item}
                  control={form.control}
                  name="answer"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item)}
                            value={item}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{item}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-[200px] bg-red-800" type="submit">Ответить</Button>
      </form>
    </Form>
  );
};

export default CheckboxAnswer;
