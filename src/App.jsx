// src/App.jsx
import React, { useState } from "react";
import styles from "./App.module.css";
// Example banner images paths or imports (add your images in src/assets and update paths)
import img1 from "./assets/parent1.jpg";
import img2 from "./assets/parent1.jpg";
import img3 from "./assets/parent1.jpg";

// User types and labels
const userTypes = [
  { id: "parents", label: "Parents" },
  { id: "kids", label: "Kids" },
  { id: "students", label: "Students" },
  { id: "professionals", label: "Professionals" },
  { id: "tutors", label: "Tutors" },
];



// How it works content for each tabs
const howItWorksData = {
  parents: [
    "Tap any button to share your number — we’ll do the rest.",
    "Friendly call from Madrasa to understand your child’s needs.",
    "1st free demo class with a gentle, verified Ustaad.",
    "Start monthly learning or try a second free demo.",
  ],
  kids: [
    "Choose your favorite subject and tutor.",
    "Schedule classes as per your convenience.",
    "Join interactive and fun learning sessions.",
    "Track progress with personalized reports.",
  ],
  students: [
    "Register for courses easily.",
    "Track your progress and grades.",
    "Join study groups and forums.",
    "Get support from mentors and tutors anytime.",
  ],
  professionals: [
    "Select skills to upgrade and experts to connect.",
    "Attend flexible sessions around your schedule.",
    "Gain practical project experience.",
    "Earn certifications for career growth.",
  ],
  tutors: [
    "Create your profile and showcase your expertise.",
    "Connect with students and parents easily.",
    "Manage your schedule and classes seamlessly.",
    "Get rated and grow your tutoring business.",
  ],
};

const App = () => {
  const [selectedTab, setSelectedTab] = useState("parents");

  return (
    <div className={styles.wrapper}>
      {/* Tabs */}
      <nav className={styles.tabs} role="tablist" aria-label="User Types Tabs">
        {userTypes.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            aria-selected={selectedTab === id}
            aria-controls={`tabpanel-${id}`}
            id={`tab-${id}`}
            className={`${styles.tab} ${
              selectedTab === id ? styles.activeTab : ""
            }`}
            onClick={() => setSelectedTab(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Top Banner */}
      <section className={styles.banner}>
        <div className={styles.imagesRow}>
          <img src={img1} alt="Banner 1" className={styles.bannerImg} />
          <img src={img2} alt="Banner 2" className={styles.bannerImg} />
          <img src={img3} alt="Banner 3" className={styles.bannerImg} />
        </div>
        <h1 className={styles.bannerTitle}>Welcome to Maktab Platform</h1>
        <p className={styles.bannerSubtitle}>
          A thoughtful way to deepen your learning and understanding — no matter
          your routine.
        </p>
      </section>

      {/* Tab Content */}
      <section
        key={selectedTab}
        role="tabpanel"
        aria-labelledby={`tab-${selectedTab}`}
        className={styles.tabPanel}
      >
        <h2 className={styles.howItWorksTitle}>How it works</h2>
        <ul className={styles.howItWorksList}>
          {howItWorksData[selectedTab].map((step, index) => (
            <li key={index} className={styles.step}>
              {step}
            </li>
          ))}
        </ul>

        <button
          className={styles.ctaButton}
          onClick={() =>
            alert("Thanks for choosing to start with 2 free demo classes!")
          }
        >
          Start With 2 Free Demo
        </button>
      </section>
    </div>
  );
};

export default App;
