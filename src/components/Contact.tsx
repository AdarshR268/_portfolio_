import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '5df87373-b4ae-4492-8bf2-adf2d7ba9a7a',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: 'adarshofficial268@gmail.com'
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMsg('Network error. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto scroll-mt-24 select-none">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary font-body">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-2xl border border-stroke bg-surface/50 p-6 md:p-8 backdrop-blur-md shadow-sm relative overflow-hidden mt-8"
        >
          <div className="absolute top-0 left-0 w-32 h-32 accent-gradient rounded-full blur-[60px] opacity-[0.03] pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Field Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-primary/75 font-body">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-surface/30 border border-stroke focus:border-text-primary/60 focus:ring-1 focus:ring-text-primary/20 rounded-xl outline-none px-4 py-3.5 text-text-primary placeholder:text-muted/50 transition-all duration-200 font-body text-sm"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-primary/75 font-body">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-surface/30 border border-stroke focus:border-text-primary/60 focus:ring-1 focus:ring-text-primary/20 rounded-xl outline-none px-4 py-3.5 text-text-primary placeholder:text-muted/50 transition-all duration-200 font-body text-sm"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-text-primary/75 font-body">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration Inquiry"
                className="w-full bg-surface/30 border border-stroke focus:border-text-primary/60 focus:ring-1 focus:ring-text-primary/20 rounded-xl outline-none px-4 py-3.5 text-text-primary placeholder:text-muted/50 transition-all duration-200 font-body text-sm"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-primary/75 font-body">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full bg-surface/30 border border-stroke focus:border-text-primary/60 focus:ring-1 focus:ring-text-primary/20 rounded-xl outline-none px-4 py-3.5 text-text-primary placeholder:text-muted/50 transition-all duration-200 font-body text-sm resize-none"
              />
            </div>

            {/* Status Notifications */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
              >
                <span className="text-sm font-semibold font-body">Message received! I'll get back to you shortly.</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
              >
                <span className="text-sm font-semibold font-body">{responseMsg}</span>
              </motion.div>
            )}

            {/* Submit Action Handle */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full relative inline-flex justify-center items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider accent-gradient text-white hover:opacity-90 disabled:opacity-50 transition-all duration-200 shadow-md select-none cursor-pointer"
            >
              <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
