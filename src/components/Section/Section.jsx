import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};