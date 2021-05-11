import { ChallengeContext } from '@contexts/ChallengesContexts';
import styles from '@styles-components/LevelUpModal.module.css';
import { useContext } from 'react';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Voce alcancou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="close icon" />
        </button>
      </div>
    </div>
  );
}
