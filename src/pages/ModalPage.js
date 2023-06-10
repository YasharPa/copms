import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary rounded onClick={handleClose}>
        Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
      <p>
        "English learning apps are a convenient and effective way to improve
        your language skills. Duolingo, Babbel, Rosetta Stone, and Memrise are
        popular options that offer interactive lessons, covering vocabulary,
        grammar, speaking, listening, and writing. HelloTalk and Tandem connect
        you with native English speakers for language exchange. FluentU utilizes
        authentic videos, while Busuu provides personalized study plans.
        Additionally, platforms like EnglishClass101 and Lingoda offer online
        classes with qualified teachers. Explore these apps to find the one that
        suits your learning style and goals."
      </p>
    </div>
  );
}
export default ModalPage;
