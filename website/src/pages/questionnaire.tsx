import { useState } from "react";
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";

import Layout from "@theme/Layout";

const questions = [
  "Are you interested in joining the Waitemata Lodge of Freemasons?",
  "Do you view Freemasonry as a means to acquire status and advantage in business and in the community?",
  "Do you think that the Waitemata Lodge is involved in dark magic or evil?",
  "Do you enjoy ritual and initiation ceremony?",
  "Are you looking for fellowship and mentorship within a brotherhood?",
  "Would you donate time and money to charity?",
];

const initialSignup = {
  name: "",
  email: "",
  phone: "",
};

export default function QuestionnairePage(): ReactNode {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [screen, setScreen] = useState<"quiz" | "exit" | "result" | "signup">(
    "quiz"
  );
  const [exitMessage, setExitMessage] = useState("");
  const [signupData, setSignupData] = useState(initialSignup);
  const [signupSubmitted, setSignupSubmitted] = useState(false);

  const handleAnswer = (answerYes: boolean) => {
    if (screen !== "quiz") {
      return;
    }

    if (currentQuestion === 0) {
      if (answerYes) {
        setScore((prev) => prev + 1);
        setCurrentQuestion(1);
      } else {
        setScreen("exit");
        setExitMessage("Thanks for your time.");
      }
      return;
    }

    if (currentQuestion === 1) {
      if (!answerYes) {
        setScore((prev) => prev + 1);
      }
      setCurrentQuestion(2);
      return;
    }

    if (currentQuestion === 2) {
      if (answerYes) {
        setScreen("exit");
        setExitMessage("Freemasonry may not for you");
        return;
      }

      setScore((prev) => prev + 1);
      setCurrentQuestion(3);
      return;
    }

    if (currentQuestion === 3) {
      if (answerYes) {
        setScore((prev) => prev + 1);
      }
      setCurrentQuestion(4);
      return;
    }

    if (currentQuestion === 4) {
      if (answerYes) {
        setScore((prev) => prev + 1);
      }
      setCurrentQuestion(5);
      return;
    }

    if (currentQuestion === 5) {
      const updatedScore = answerYes ? score + 1 : score;
      setScore(updatedScore);

      if (updatedScore < 5) {
        setScreen("result");
        return;
      }

      setScreen("signup");
    }
  };

  const handleSignupChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("Waitemata Lodge questionnaire signup");
    const body = encodeURIComponent(
      `Name: ${signupData.name}\nEmail: ${signupData.email}\nPhone: ${signupData.phone}`
    );

    window.location.href = `mailto:aaron@skudder.nz?subject=${subject}&body=${body}`;
    setSignupSubmitted(true);
  };

  const renderQuestion = () => {
    return (
      <div className="card">
        <div className="card__header">
          <h1>Questionnaire</h1>
        </div>
        <div className="card__body">
          <p className="margin-bottom--lg">
            Score: <strong>{score}</strong>
          </p>

          <h2>{questions[currentQuestion]}</h2>

          <div className="margin-top--lg">
            <button
              className="button button--primary margin-right--sm"
              type="button"
              onClick={() => handleAnswer(true)}>
              Yes
            </button>
            <button
              className="button button--secondary"
              type="button"
              onClick={() => handleAnswer(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout
      title="Questionnaire"
      description="Questionnaire page for Waitemata Lodge 689 website">
      <header
        className="hero text--center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/img/b-pavement.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container padding-vert--xl">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "nowrap",
            }}
          >
            <img
              src="/img/mark-sc.png"
              alt="Waitemata Lodge mark"
              style={{
                width: "52px",
                height: "52px",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.65))",
                marginBottom: "0.1rem",
              }}
            />
            <h1
              className="hero__title"
              style={{
                color: "#ffffff",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.65)",
                margin: 0,
              }}
            >
              Questionnaire
            </h1>
          </div>
          <p
            className="hero__subtitle"
            style={{
              color: "#f3f3f3",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.65)",
            }}
          >
            Join the oldest English Constitution Lodge in New Zealand
          </p>
        </div>
      </header>
      <main className="container padding-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {screen === "quiz" && renderQuestion()}

            {screen === "exit" && (
              <div className="card">
                <div className="card__header">
                  <h1>Questionnaire</h1>
                </div>
                <div className="card__body">
                  <p>{exitMessage}</p>
                  <Link className="button button--primary" to="/">
                    Back home
                  </Link>
                </div>
              </div>
            )}

            {screen === "result" && (
              <div className="card">
                <div className="card__header">
                  <h1>Questionnaire</h1>
                </div>
                <div className="card__body">
                  <p>
                    The Waitemata lodge might not be the best fit your you
                  </p>
                  <Link className="button button--primary" to="/">
                    Back home
                  </Link>
                </div>
              </div>
            )}

            {screen === "signup" && (
              <div className="card">
                <div className="card__header">
                  <h1>Questionnaire</h1>
                </div>
                <div className="card__body">
                  <p>
                    Your score suggests you may be a strong fit. Please provide
                    your details below and we will email them to the lodge.
                  </p>

                  <form onSubmit={handleSignupSubmit}>
                    <div className="margin-bottom--md">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="margin-top--xs"
                        style={{ width: "100%", padding: "0.75rem" }}
                        value={signupData.name}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>

                    <div className="margin-bottom--md">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="margin-top--xs"
                        style={{ width: "100%", padding: "0.75rem" }}
                        value={signupData.email}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>

                    <div className="margin-bottom--md">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="margin-top--xs"
                        style={{ width: "100%", padding: "0.75rem" }}
                        value={signupData.phone}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>

                    <div className="margin-top--lg">
                      <button className="button button--primary" type="submit">
                        Submit details
                      </button>
                      <Link className="button button--secondary margin-left--sm" to="/">
                        Back home
                      </Link>
                    </div>
                  </form>

                  {signupSubmitted && (
                    <p className="margin-top--lg">
                      Your email app should now be opening with the details ready
                      to send to aaron@skudder.nz.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
