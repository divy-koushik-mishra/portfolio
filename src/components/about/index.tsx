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
              I&apos;m <strong>Divy Koushik Mishra</strong> — a{" "}
              <strong>full-stack developer</strong> who helps startups and
              businesses go from idea to shipped product. I&apos;ve been the{" "}
              <strong>first technical hire</strong> at two startups, building
              MVPs that <strong>secured VC funding</strong> and scaled to
              thousands of users.
            </p>

            <p>
              My sweet spot is <strong>end-to-end product development</strong>:
              architecture, UI/UX, backend, deployment, and iteration — all in
              one person. I work with the <strong>T3 Stack</strong> (Next.js,
              tRPC, Prisma, PostgreSQL), <strong>React Native</strong> for
              mobile, and <strong>AWS</strong> for infrastructure. I ship fast,
              write clean code, and care about the business outcomes.
            </p>

            <p>
              If you need someone who can <strong>own the technical side</strong>{" "}
              of your product — from writing the first line of code to deploying
              it at scale — let&apos;s talk.
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
