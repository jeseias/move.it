import { ChallengeContext } from '@contexts/ChallengesContexts';
import styles from '@styles-components/Profile.module.css';
import { useContext } from 'react';

export default function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jeseias.png" alt="Jeseias Domingos" />
      <div>
        <strong>Jeseias Domingos</strong>
        <p>Level {level}</p>
      </div>
    </div>
  );
}
