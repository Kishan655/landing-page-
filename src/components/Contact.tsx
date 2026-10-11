import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, MapPin, Phone } from 'lucide-react';

interface ContactState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ErrorState {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ErrorState>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: ErrorState = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field while typing
    if (errors[name as keyof ErrorState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate immediate JavaScript response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Contact Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Send us a message with any questions, feedback, or review inquiries about this responsive landing page.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f8fbff] rounded-2xl p-7 border border-sky-100 space-y-6">
              <h3 className="text-xl font-bold text-[#0f172a]">
                Project Information
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                This contact form includes instant client-side JavaScript validation. Fill in the fields below to see real-time error prevention and submission feedback.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Email</span>
                    <span className="text-sm font-medium text-slate-800">internship@example.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Assignment</span>
                    <span className="text-sm font-medium text-slate-800">Task 1: Responsive Landing Page</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Tech Stack</span>
                    <span className="text-sm font-medium text-slate-800">HTML5 · CSS3 · JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs">
              {isSuccess ? (
                /* Success Notification Banner */
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your message has been validated and submitted successfully.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white transition-colors focus:outline-hidden ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white transition-colors focus:outline-hidden ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Feedback or Question"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white transition-colors focus:outline-hidden ${
                        errors.subject
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white transition-colors focus:outline-hidden resize-y ${
                        errors.message
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-sky-600/15 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
