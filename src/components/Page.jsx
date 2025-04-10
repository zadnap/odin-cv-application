import styles from '@/styles/page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import Contact from './Contact';
import Headline from './Headline';
import Avatar from './Avatar';

function Page() {
  return (
    <section className={styles.page}>
      <aside className={styles.sidebar}>
        <Avatar />
        <div className={styles.info}>
          <Headline
            firstName="HENRY"
            lastName="SMITH"
            position="ART DIRECTOR"
          />
          <Section title="CONTACT">
            <Contact
              icon={<FontAwesomeIcon icon={faPhone} />}
              content="+00 123 456 789"
            />
            <Contact
              icon={<FontAwesomeIcon icon={faLocationDot} />}
              content="567 STREET, NY"
            />
            <Contact
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              content="LOREMIPSUM@MAIL.COM"
            />
          </Section>
          <Section title="REFERENCES">
            <Section title="LOREM IPSUM">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              modi blanditiis.
            </Section>
            <Section title="LOREM IPSUM">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              modi blanditiis.
            </Section>
          </Section>
          <Section title="LANGUAGE">
            <Section title="LOREM IPSUM">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              modi blanditiis.
            </Section>
            <Section title="LOREM IPSUM">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              modi blanditiis.
            </Section>
          </Section>
        </div>
      </aside>
      <section className={styles.main}>
        <Section
          title="ABOUT ME"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut.
            Nemo vero repellat omnis quidem? Saepe quod sit enim assumenda
            possimus itaque vero non voluptas minima tempora. Corporis,
            obcaecati impedit."
        >
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam quaerat minus amet culpa
            consectetur, modi accusamus officia quam. Error, voluptatem
            repellat. Saepe rem dicta autem fugit expedita!
          </Section>
        </Section>
        <Section title="EDUCATION">
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam quaerat minus amet culpa
            consectetur, modi accusamus officia quam. Error, voluptatem
            repellat. Saepe rem dicta autem fugit expedita!
          </Section>
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam quaerat minus amet culpa
            consectetur, modi accusamus officia quam. Error, voluptatem
            repellat. Saepe rem dicta autem fugit expedita!
          </Section>
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam quaerat minus amet culpa
            consectetur, modi accusamus officia quam. Error, voluptatem
            repellat. Saepe rem dicta autem fugit expedita!
          </Section>
        </Section>
        <Section title="EXPERIENCE">
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam quaerat minus amet culpa
            consectetur, modi accusamus officia quam. Error, voluptatem
            repellat. Saepe rem dicta autem fugit expedita!
          </Section>
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam quaerat minus amet culpa
            consectetur, modi accusamus officia quam. Error, voluptatem
            repellat. Saepe rem dicta autem fugit expedita!
          </Section>
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam quaerat minus amet culpa
            consectetur, modi accusamus officia quam. Error, voluptatem
            repellat. Saepe rem dicta autem fugit expedita!
          </Section>
        </Section>
        <Section title="SKILLS">
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam.
          </Section>
          <Section title="LOREM IPSUM">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit ratione quibusdam.
          </Section>
        </Section>
      </section>
    </section>
  );
}

export default Page;
