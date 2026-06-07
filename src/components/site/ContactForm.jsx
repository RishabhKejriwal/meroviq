import { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  function validateField(name, value) {
    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
    }
    return null;
  }
  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const newErrors = {};
    
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    else {
      const emailError = validateField("email", data.email);
      if (emailError) newErrors.email = emailError;
    }
    if (!data.message) newErrors.message = "Message is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }
    
    setErrors({});
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 700);
  }
  return <form
    onSubmit={onSubmit}
    className="rounded-2xl border border-hairline bg-white p-6 md:p-8 shadow-soft space-y-4"
    aria-label="Contact Meroviq"
  >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field 
          label="Name" 
          name="name" 
          required 
          placeholder="Jane Cooper" 
          error={errors.name}
          helper="Your full name"
        />
        <Field 
          label="Email" 
          name="email" 
          type="email" 
          required 
          placeholder="jane@company.com"
          error={errors.email}
          helper="We'll never share your email"
          onBlur={(e) => {
            const error = validateField("email", e.target.value);
            setErrors(prev => ({ ...prev, email: error }));
          }}
        />
      </div>
      <Field 
        label="Phone" 
        name="phone" 
        type="tel" 
        placeholder="+91 00000 00000"
        helper="Optional - for faster response"
      />
      <Field 
        label="Message" 
        name="message" 
        required 
        textarea 
        placeholder="Tell us a little about your project…"
        error={errors.message}
        helper="Describe your project or inquiry"
      />

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-ink-muted" role="status" aria-live="polite">
          {status === "sent" && "Thanks — we'll be in touch within one business day."}
          {status === "error" && "Please fix the errors above and try again."}
        </p>
        <Button type="submit" disabled={status === "sending"} className="gradient-brand text-white shadow-soft">
          {status === "sending" ? "Sending…" : <>Send Inquiry <Send className="h-4 w-4" /></>}
        </Button>
      </div>
    </form>;
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  textarea,
  error,
  helper,
  onBlur
}) {
  const base = "w-full min-h-[44px] rounded-lg border border-hairline bg-surface px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition";
  const errorBase = "w-full min-h-[44px] rounded-lg border border-destructive bg-destructive/5 px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-destructive/30 focus:border-destructive transition";
  return <label className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-accent2" aria-label="required">*</span>}
      </span>
      {textarea 
        ? <textarea 
            name={name} 
            required={required} 
            placeholder={placeholder} 
            rows={5} 
            className={error ? errorBase : base}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : helper ? `${name}-helper` : undefined}
          /> 
        : <input 
            name={name} 
            type={type} 
            required={required} 
            placeholder={placeholder} 
            className={error ? errorBase : base}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : helper ? `${name}-helper` : undefined}
            onBlur={onBlur}
          />
      }
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
      {helper && !error && (
        <p id={`${name}-helper`} className="mt-1.5 text-xs text-ink-muted">
          {helper}
        </p>
      )}
    </label>;
}
export {
  ContactForm
};
