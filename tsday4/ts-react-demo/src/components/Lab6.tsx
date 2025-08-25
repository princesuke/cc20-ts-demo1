import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const addressSchema = z.object({
  line1: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  zip: z.string().regex(/^\d{5}$/, "Zip must be 5 digits"),
});

const schema = z
  .object({
    email: z.email("Invalid email"),
    password: z.string().min(6, "Password must be least 6 characters"),
    confirmPassword: z.string(),
    age: z.number().min(18, "18+ only"),
    name: z.string().min(1, "Required"),
    addresses: z.array(addressSchema).min(1, "Al least one address"),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Lab6() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", addresses: [{ line1: "", city: "", zip: "" }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const onSubmit = (data: FormData) => {
    console.log("Login submit:", data);
    alert(`Login OK for ${data.email}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      <h3>Login Form</h3>
      <label>Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        {...register("email")}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        type="number"
        placeholder="e.g. 20"
        {...register("age", { valueAsNumber: true })}
      />
      {errors.age && <p className="error">{errors.age.message}</p>}

      <label>Password</label>
      <input type="password" placeholder="******" {...register("password")} />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="******"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}

      <h3>Address</h3>
      <div>
        {fields.map((f, i) => (
          <fieldset key={f.id} style={box}>
            <legend>Address #{i + 1}</legend>

            <p>
              <label>Line 1 </label>
              <input {...register(`addresses.${i}.line1`)} />
              {errors.addresses?.[i]?.line1 && (
                <p className="error">{errors.addresses[i]?.line1?.message}</p>
              )}
            </p>

            <p>
              <label>City </label>
              <input {...register(`addresses.${i}.city`)} />
              {errors.addresses?.[i]?.city && (
                <p className="error">{errors.addresses[i]?.city?.message}</p>
              )}
            </p>

            <p>
              <label>Zip </label>
              <input {...register(`addresses.${i}.zip`)} />
              {errors.addresses?.[i]?.zip && (
                <p className="error">{errors.addresses[i]?.zip?.message}</p>
              )}
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                type="button"
                onClick={() => append({ line1: "", city: "", zip: "" })}
              >
                + Add
              </button>
              {fields.length > 1 && (
                <button type="button" onClick={() => remove(i)}>
                  Remove
                </button>
              )}
            </div>
          </fieldset>
        ))}
      </div>

      <button type="submit" disabled={isSubmitting}>
        Login
      </button>
    </form>
  );
}

const formStyle: React.CSSProperties = {
  display: "grid",
  gap: 8,
  maxWidth: 360,
};

const box: React.CSSProperties = {
  border: "1px solid #eee",
  borderRadius: 8,
  padding: 12,
};
