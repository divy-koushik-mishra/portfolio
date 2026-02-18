import React from 'react'
import DiagonalLineGradientBgFull from '../hero/diagonalLineGradientBgFull'
import StackSection from './stackSection'
import ExperienceSection from './experienceSection'

const AboutSection = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
          <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
            About
          </h2>
          <div className="font-mono space-y-4 px-4 py-6 text-[15px] leading-relaxed text-foreground">
            <p>
              Hi, I&apos;m <strong>Divy Koushik Mishra</strong> — a{" "}
              <strong>Full-Stack Developer</strong>,
              <strong> founding team member</strong> at multiple startups, and an
              aspiring entrepreneur. I&apos;m passionate about building scalable,
              impactful products that combine clean engineering, thoughtful
              design, and measurable business results.
            </p>

            <p>
              With hands-on experience in <strong>JavaScript</strong>,{" "}
              <strong>TypeScript</strong>,<strong> React</strong>,{" "}
              <strong>Next.js</strong>, <strong>Python</strong>,
              <strong> FastAPI</strong>, and modern backend stacks like{" "}
              <strong>T3 Stack</strong> (Next.js App Router, tRPC, Prisma,
              PostgreSQL, Tailwind CSS, Zustand, NextAuth), I specialize in{" "}
              <strong>end-to-end product development</strong> — from writing the
              first line of code to deploying on <strong>AWS</strong>,{" "}
              <strong>Vercel</strong>, and <strong>Coolify</strong>. My
              experience spans <strong>database modeling</strong>,
              <strong>API design</strong>,{" "}
              <strong>mobile app development</strong> with React Native,
              <strong> system architecture</strong>, and{" "}
              <strong>DevOps</strong>.
            </p>

            <p>
              I&apos;ve worked as the <strong>first technical hire</strong> at
              early-stage startups, building{" "}
              <strong>MVPs that secured VC funding</strong>, customer-facing
              applications, internal operations dashboards, and tools for
              licensed professionals. My projects often involve{" "}
              <strong>UI/UX design</strong>,{" "}
              <strong>performance optimization</strong>,
              <strong>cloud scaling</strong>, and{" "}
              <strong>data-driven improvements</strong> through A/B testing and
              analytics.
            </p>

            <p>
              Outside of pure development, I&apos;m exploring{" "}
              <strong>product management</strong>,
              <strong>personal branding</strong>, and{" "}
              <strong>content creation</strong>. I enjoy blending tech with
              creativity — whether it&apos;s experimenting with{" "}
              <strong>cinematography</strong> on my DSLR, producing music in FL
              Studio, sketching, or diving into calligraphy. I&apos;m also
              building <strong>FlipsideBrain</strong>, a productivity and
              self-growth platform with features like website blockers, browser
              activity tracking, and cross-device sync.
            </p>

            <p>
              My personal philosophy: treat life like an RPG —{" "}
              <strong>level up every day</strong>, acquire new skills, and create
              things that make a difference. Whether it&apos;s software that
              scales to thousands of users or a small creative project, my goal
              is to ship high-quality, meaningful work.
            </p>

            <p>
              If you&apos;re looking for a{" "}
              <strong>full-stack developer</strong> who can take an idea from
              concept to launch, lead technical execution, and align it with
              business goals, let&apos;s connect and build something remarkable
              together.
            </p>
          </div>
        </div>

      <DiagonalLineGradientBgFull />
      <ExperienceSection />
      <DiagonalLineGradientBgFull />
      <StackSection />
      <DiagonalLineGradientBgFull />
    </section>
  );
};

export default AboutSection;
