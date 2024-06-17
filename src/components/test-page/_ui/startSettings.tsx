"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { FC } from "react";
import { TestState, setDeadline, setIsStarted } from "@/store/slices/test";

const StartSettings: FC = () => {
  const dispatch = useAppDispatch();
  const FormSchema = z.object({
    isTimer: z.boolean().default(false).optional(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit({ isTimer }: z.infer<typeof FormSchema>) {
    isTimer && dispatch(setDeadline(Date.now() + 30 * 60 * 1000));
    dispatch(setIsStarted(true));

    localStorage.setItem(
      "test",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("test") as string),
        isStarted: true,
        deadline: isTimer ? Date.now() + 30 * 60 * 1000 : null,
      } as TestState),
    );
  }

  return (
    <Card className="w-5/6">
      <CardHeader className="flex flex-col gap-3 justify-center items-center">
        <div className="flex gap-3 align-items-center">
          <CardTitle>Тестирование</CardTitle>
        </div>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 flex flex-col items-center"
            >
              <FormField
                control={form.control}
                name="isTimer"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Включить таймер?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button className="w-[200px] bg-red-800" type="submit">Начать тест</Button>
            </form>
          </Form>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default StartSettings;
