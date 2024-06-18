import { JobsSection } from "@/components/jobs-section";
import styles from "./page.module.css";
import { Hero } from "@/components/hero";

const JOBS = [
  {
    team: "Conversion Optimization",
    title: "(Senior) Sales Manager (w/m/d)",
    link: "https://peaksandpies.com/jobs/975974",
  },
  {
    team: "Conversion Optimization",
    title: "CRO Consultant (m/w/d)",
    link: "https://peaksandpies.com/jobs/975974",
  },
  {
    team: "Conversion Optimization",
    title: "UX/UI Design (m/w/d)",
    link: "https://peaksandpies.com/jobs/975974",
  },
  {
    team: "Conversion Optimization",
    title: "Werkstudent Frontend Development (m/w/d))",
    link: "https://peaksandpies.com/jobs/975974",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero headline="jobs" />

      <JobsSection />
    </main>
  );
}
