import { motion } from "framer-motion";
import HeroImg from "@/assets/images/pro-portrait-canva.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#04081A] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            About me
          </p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Full-stack developer, CS student, and freelance builder
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            I'm Zach, a self-taught web developer and Computer Science student
            based in Algeria, specializing in building full-stack web applications
            with React and Firebase.
          </p>
          <p className="mt-3 leading-relaxed text-gray-300">
            Over the past two years, I've gone from side projects to real-world
            client work—most notably a full clinic management system featuring
            role-based access control, trilingual support, and a production-ready
            architecture I designed end-to-end.
          </p>
          <p className="mt-3 leading-relaxed text-gray-300">
            I like solving practical problems with clean, scalable code and
            seeing projects through from database design to deployment. I'm
            currently open to remote freelance opportunities worldwide.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
            <img
              src={HeroImg}
              alt="Portrait"
              className="relative h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
              <h3 className="text-lg font-semibold text-blue-300">What I do</h3>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>Full-stack web apps with React and Firebase</li>
                <li>Database and auth architecture design</li>
                <li>Client-focused feature delivery</li>
                <li>Remote-friendly, async collaboration</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
              <h3 className="text-lg font-semibold text-purple-300">
                Currently
              </h3>
              <p className="mt-2 text-gray-300">
                Studying Computer Science and taking on freelance projects with
                modern web tooling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
