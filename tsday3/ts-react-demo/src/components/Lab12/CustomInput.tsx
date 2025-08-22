import { forwardRef } from "react";

// TODO: สร้าง CustomInput ที่รับ ref<HTMLTextAreaElement>
export const CustomInput = forwardRef<
  HTMLTextAreaElement,
  { placeholder?: string }
>((props, ref) => {
  return <textarea {...props} ref={ref} />;
});
