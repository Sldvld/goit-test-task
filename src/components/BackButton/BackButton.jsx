import { useNavigate } from 'react-router-dom';
import css from './BackButton.module.css';

export function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className={css.backButton} onClick={goBack}>
      〈 Back
    </button>
  );
}
