import Button from '../../ui/Button/Button';
import classes from './\ResultsTitle.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/Events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
