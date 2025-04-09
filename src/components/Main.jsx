import styles from '@/styles/main.module.scss';
import Section from './Section';
import SubSection from './SubSection';

function Main() {
  return (
    <section className={styles.main}>
      <Section title="ABOUT ME">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut.
        Nemo vero repellat omnis quidem? Saepe quod sit enim assumenda possimus
        itaque vero non voluptas minima tempora. Corporis, obcaecati impedit.
      </Section>
      <Section title="EDUCATION">
        <SubSection title="LOREM IPSUM" from={2017} to={2022}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit ratione quibusdam quaerat minus amet culpa consectetur,
          modi accusamus officia quam. Error, voluptatem repellat. Saepe rem
          dicta autem fugit expedita!
        </SubSection>
        <SubSection title="LOREM IPSUM" from={2017} to={2022}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit ratione quibusdam quaerat minus amet culpa consectetur,
          modi accusamus officia quam. Error, voluptatem repellat. Saepe rem
          dicta autem fugit expedita!
        </SubSection>
        <SubSection title="LOREM IPSUM" from={2017} to={2022}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit ratione quibusdam quaerat minus amet culpa consectetur,
          modi accusamus officia quam. Error, voluptatem repellat. Saepe rem
          dicta autem fugit expedita!
        </SubSection>
      </Section>
      <Section title="EXPERIENCE">
        <SubSection title="LOREM IPSUM" from={2017} to={2022}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit ratione quibusdam quaerat minus amet culpa consectetur,
          modi accusamus officia quam. Error, voluptatem repellat. Saepe rem
          dicta autem fugit expedita!
        </SubSection>
        <SubSection title="LOREM IPSUM" from={2017} to={2022}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit ratione quibusdam quaerat minus amet culpa consectetur,
          modi accusamus officia quam. Error, voluptatem repellat. Saepe rem
          dicta autem fugit expedita!
        </SubSection>
        <SubSection title="LOREM IPSUM" from={2017} to={2022}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit ratione quibusdam quaerat minus amet culpa consectetur,
          modi accusamus officia quam. Error, voluptatem repellat. Saepe rem
          dicta autem fugit expedita!
        </SubSection>
      </Section>
      <Section title="SKILLS">
        <SubSection title="LOREM IPSUM">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit ratione quibusdam.
        </SubSection>
        <SubSection title="LOREM IPSUM">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit ratione quibusdam.
        </SubSection>
      </Section>
    </section>
  );
}

export default Main;
