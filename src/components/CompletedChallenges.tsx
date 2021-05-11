import { ChallengeContext } from '@contexts/ChallengesContexts';
import styles from '@styles-components/CompletedChallenges.module.css';
import { useContext } from 'react';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengeContext);
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
