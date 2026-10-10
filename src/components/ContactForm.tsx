import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle, Info, Mail, Loader2 } from 'lucide-react';

interface ContactFormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'unconfigured'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const isConfigured = Boolean(serviceId && templateId && publicKey);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!isConfigured) {
      // In development / before keys are provided in .env
      setIsSubmitting(false);
      setSubmitStatus('unconfigured');
      setStatusMessage(
        'Email service is awaiting environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY). In the meantime, you can reach me directly via email at deepandj72@gmail.com!'
      );
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.user_name,
          reply_to: data.user_email,
          subject: data.subject,
          message: data.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. Deepan will respond shortly.');
      reset();
    } catch (err) {
      console.error('EmailJS Submission Error:', err);
      setSubmitStatus('error');
      setStatusMessage('Failed to deliver message. Please send an email directly to deepandj72@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-panel card-glow rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Send a Direct Message
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Have an idea, project collaboration, or internship opportunity? Drop a note below.
        </p>
      </div>

      {!isConfigured && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-3">
          <Info className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-semibold block mb-0.5">Contact Service Notice</span>
            <span>
              Direct browser email dispatch is configured for EmailJS. To activate online dispatch, provide your keys in <code className="bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded font-mono">.env</code>. You can always click below to email directly.
            </span>
          </div>
        </div>
      )}

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Message Sent!</span>
            <span>{statusMessage}</span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40 text-rose-800 dark:text-rose-300 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Delivery Notice</span>
            <span>{statusMessage}</span>
          </div>
        </div>
      )}

      {submitStatus === 'unconfigured' && (
        <div className="mb-6 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/40 text-indigo-900 dark:text-indigo-200 text-sm flex items-start gap-3">
          <Mail className="w-5 h-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5" />
          <div className="space-y-2">
            <span className="font-bold block">Quick Email Fallback</span>
            <p className="text-xs leading-relaxed">{statusMessage}</p>
            <a
              href="mailto:deepandj72@gmail.com?subject=Portfolio%20Inquiry"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Open Mail App (deepandj72@gmail.com)</span>
            </a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Name and Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="user_name"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="user_name"
              type="text"
              placeholder="e.g. Alex Morgan"
              {...register('user_name', {
                required: 'Please enter your name.',
                minLength: { value: 2, message: 'Name must be at least 2 characters.' },
              })}
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border ${
                errors.user_name
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
              } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
            />
            {errors.user_name && (
              <p className="mt-1 text-xs text-rose-500">{errors.user_name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Your Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="user_email"
              type="email"
              placeholder="alex@company.com"
              {...register('user_email', {
                required: 'Please enter your email.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please provide a valid email address.',
                },
              })}
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border ${
                errors.user_email
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
              } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
            />
            {errors.user_email && (
              <p className="mt-1 text-xs text-rose-500">{errors.user_email.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Subject <span className="text-rose-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. AI Internship Opportunity / Collaboration"
            {...register('subject', {
              required: 'Please enter a subject.',
              minLength: { value: 3, message: 'Subject must be at least 3 characters.' },
            })}
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border ${
              errors.subject
                ? 'border-rose-400 focus:border-rose-500'
                : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
            } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-rose-500">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Write your message here..."
            {...register('message', {
              required: 'Please enter your message.',
              minLength: { value: 10, message: 'Message should be at least 10 characters.' },
            })}
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border ${
              errors.message
                ? 'border-rose-400 focus:border-rose-500'
                : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
            } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="submit-contact-btn"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-md shadow-indigo-500/25 transition-all hover:shadow-indigo-500/35 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
