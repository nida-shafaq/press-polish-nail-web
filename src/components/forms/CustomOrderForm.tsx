"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const customOrderSchema = z.object({
  customerName: z.string().min(2, "Name is required"),
  customerEmail: z.string().email("Valid email is required"),
  shape: z.string().min(1, "Please select a shape"),
  thumb: z.number().min(1).max(25),
  index: z.number().min(1).max(25),
  middle: z.number().min(1).max(25),
  ring: z.number().min(1).max(25),
  pinky: z.number().min(1).max(25),
  occasion: z.string().optional(),
  budget: z.string().min(1, "Budget is required"),
  notes: z.string().optional(),
});

type CustomOrderFormValues = z.infer<typeof customOrderSchema>;

export function CustomOrderForm() {
  const [step, setStep] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  
  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<CustomOrderFormValues>({
    resolver: zodResolver(customOrderSchema),
    defaultValues: {
      shape: "Almond",
    },
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ["customerName", "customerEmail"];
    if (step === 2) fieldsToValidate = ["shape", "thumb", "index", "middle", "ring", "pinky"];
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: CustomOrderFormValues) => {
    // Mock submit
    console.log("Submitting custom order", data);
    await new Promise((r) => setTimeout(r, 1500));
    setStep(4); // Success step
  };

  return (
    <section className="w-full max-w-3xl mx-auto py-24 px-6">


      <div className="bg-white p-8 md:p-12 shadow-xl border border-lacquer-ink/5">
        {step < 4 && (
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={cn(
                  "h-1 flex-1 transition-colors duration-500",
                  s <= step ? "bg-bordeaux-gloss" : "bg-lacquer-ink/10"
                )}
              />
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-fraunces text-2xl mb-6">Contact Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block font-jetbrains text-xs uppercase mb-2">Full Name</label>
                    <input 
                      {...register("customerName")}
                      className="w-full bg-lacquer-canvas/50 border border-lacquer-ink/20 p-4 font-jakarta focus:outline-none focus:ring-1 focus:ring-lacquer-ink transition-colors"
                      placeholder="Jane Doe"
                    />
                    {errors.customerName && <p className="text-bordeaux-gloss text-sm mt-1">{errors.customerName.message}</p>}
                  </div>
                  <div>
                    <label className="block font-jetbrains text-xs uppercase mb-2">Email</label>
                    <input 
                      {...register("customerEmail")}
                      type="email"
                      className="w-full bg-lacquer-canvas/50 border border-lacquer-ink/20 p-4 font-jakarta focus:outline-none focus:ring-1 focus:ring-lacquer-ink transition-colors"
                      placeholder="jane@example.com"
                    />
                    {errors.customerEmail && <p className="text-bordeaux-gloss text-sm mt-1">{errors.customerEmail.message}</p>}
                  </div>
                </div>
                <div className="pt-6">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="w-full py-4 bg-lacquer-ink text-lacquer-canvas font-jakarta uppercase tracking-wider text-sm hover:bg-black transition-colors"
                  >
                    Next: Sizing & Shape
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-fraunces text-2xl mb-6">Sizing & Shape</h3>
                
                <div>
                  <label className="block font-jetbrains text-xs uppercase mb-2">Preferred Shape</label>
                  <select 
                    {...register("shape")}
                    className="w-full bg-lacquer-canvas/50 border border-lacquer-ink/20 p-4 font-jakarta focus:outline-none focus:ring-1 focus:ring-lacquer-ink"
                  >
                    <option value="Almond">Almond</option>
                    <option value="Coffin">Coffin</option>
                    <option value="Square">Square</option>
                    <option value="Stiletto">Stiletto</option>
                  </select>
                </div>

                <div>
                  <label className="block font-jetbrains text-xs uppercase mb-4">Measurements (mm)</label>
                  <div className="grid grid-cols-5 gap-4">
                    {["thumb", "index", "middle", "ring", "pinky"].map((finger) => (
                      <div key={finger}>
                        <label className="block font-jetbrains text-[10px] uppercase text-center mb-1">{finger}</label>
                        <input 
                          type="number"
                          {...register(finger as any, { valueAsNumber: true })}
                          className="w-full bg-lacquer-canvas/50 border border-lacquer-ink/20 p-2 text-center font-jetbrains focus:outline-none focus:ring-1 focus:ring-lacquer-ink"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Simplistic error check for demo */}
                  {(errors.thumb || errors.pinky) && (
                    <p className="text-bordeaux-gloss text-sm mt-2 text-center">Please fill all measurements.</p>
                  )}
                </div>

                <div className="pt-6 flex gap-4">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="w-1/3 py-4 bg-transparent border border-lacquer-ink/20 text-lacquer-ink font-jakarta uppercase tracking-wider text-sm hover:bg-lacquer-canvas transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="w-2/3 py-4 bg-lacquer-ink text-lacquer-canvas font-jakarta uppercase tracking-wider text-sm hover:bg-black transition-colors"
                  >
                    Next: Design Details
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-fraunces text-2xl mb-6">Design Details</h3>
                
                <div>
                  <label className="block font-jetbrains text-xs uppercase mb-2">Budget Range</label>
                  <select 
                    {...register("budget")}
                    className="w-full bg-lacquer-canvas/50 border border-lacquer-ink/20 p-4 font-jakarta focus:outline-none focus:ring-1 focus:ring-lacquer-ink"
                  >
                    <option value="">Select a range</option>
                    <option value="$80 - $120">$80 - $120</option>
                    <option value="$120 - $200">$120 - $200</option>
                    <option value="$200+">$200+</option>
                  </select>
                </div>

                <div>
                  <label className="block font-jetbrains text-xs uppercase mb-2">Inspiration (Drag & Drop images)</label>
                  <div 
                    className={cn(
                      "border-2 border-dashed p-12 text-center transition-colors",
                      isDragging ? "border-bordeaux-gloss bg-bordeaux-gloss/5" : "border-lacquer-ink/20"
                    )}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
                  >
                    <p className="font-jakarta text-lacquer-ink/60">Drop your reference images here, or click to browse.</p>
                    <p className="font-jetbrains text-xs text-lacquer-ink/40 mt-2">Supports JPG, PNG, WEBP (Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block font-jetbrains text-xs uppercase mb-2">Design Notes / Concept</label>
                  <textarea 
                    {...register("notes")}
                    rows={4}
                    className="w-full bg-lacquer-canvas/50 border border-lacquer-ink/20 p-4 font-jakarta focus:outline-none focus:ring-1 focus:ring-lacquer-ink resize-none"
                    placeholder="Describe your vision..."
                  />
                </div>

                <div className="pt-6 flex gap-4">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="w-1/3 py-4 bg-transparent border border-lacquer-ink/20 text-lacquer-ink font-jakarta uppercase tracking-wider text-sm hover:bg-lacquer-canvas transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-2/3 py-4 bg-lacquer-ink text-lacquer-canvas font-jakarta uppercase tracking-wider text-sm hover:bg-black transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                  ✓
                </div>
                <h3 className="font-fraunces text-3xl mb-4">Request Received</h3>
                <p className="font-jakarta text-lacquer-ink/70 mb-8 max-w-md mx-auto">
                  Our lead nail artist will review your bespoke request and get back to you with a quote within 48 hours.
                </p>
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-8 py-4 bg-lacquer-ink text-lacquer-canvas font-jakarta uppercase tracking-wider text-sm hover:bg-black transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
