import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { crops } from "@/data/site";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Inquiry received", {
        description: "Thank you — our team will get back to you shortly.",
      });
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-primary-deep">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your full name" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-primary-deep">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
            placeholder="+92 300 000 0000"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-primary-deep">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="interest" className="text-sm font-medium text-primary-deep">
            Crop / Seed Interest
          </label>
          <select id="interest" name="interest" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a crop
            </option>
            {crops.map((crop) => (
              <option key={crop.id} value={crop.label}>
                {crop.label}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-primary-deep">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={fieldClass}
          placeholder="Tell us which seed varieties or quantities you need."
        />
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="justify-self-start">
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitting ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}