import { useFormContext } from "react-hook-form";
import FormRequiredLabel from "./FormRequiredLabel";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { PropsWithChildren } from "react";

type Props<T> = PropsWithChildren<{
  name: keyof T & string;
  label: string;
  className?: string;
}>;

export default function SelectField<T>({
  label,
  name,
  className = "",
  children,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <FormItem className={className}>
          <FormRequiredLabel label={label} />
          <Select value={value} onValueChange={onChange}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{children}</SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
