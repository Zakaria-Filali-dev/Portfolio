import React, { useState } from "react";
import { Send, MapPin, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zakaria-filali-webdev/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/Zakaria-Filali-dev",
      icon: <Github className="h-5 w-5" />,
    },
    {
      label: "Twitter / X",
      href: "https://x.com/ZakariaFil50879",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      label: "Email",
      href: "mailto:zakaria.filali.dev@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isValid =
    formData.name.trim() &&
    /^\S+@\S+\.\S+$/.test(formData.email) &&
    formData.message.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Opening your email app…");
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailto = `mailto:zakaria.filali.dev@gmail.com?subject=${encodeURIComponent(formData.subject || "New Contact Form Submission")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04081A] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-10 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#04081A] to-transparent" />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Get in touch
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Let&apos;s build something together
            </h2>
            <p className="mt-4 max-w-md text-gray-300">
              I&apos;m open to remote freelance work. Share your idea, timeline,
              and goals — I&apos;ll reply with a clear next step.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Algeria</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>zakaria.filali.dev@gmail.com</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Socials
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:border-white/20 hover:bg-white/10"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="mb-1 block text-sm text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-400/70"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-400/70"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-400/70"
                    placeholder="Project / opportunity"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-400/70"
                    placeholder="Tell me about your project…"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>

              {status && (
                <p className="text-center text-sm text-gray-300">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
