import styles from '@/styles/sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import SubSection from './SubSection';
import Contact from './Contact';
import Headline from './Headline';
import Avatar from './Avatar';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Avatar />
      <div className={styles.info}>
        <Headline firstName="HENRY" lastName="SMITH" position="ART DIRECTOR" />
        <Section title="ABOUT ME">
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
          <SubSection title="LOREM IPSUM">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi
            blanditiis.
          </SubSection>
          <SubSection title="LOREM IPSUM">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi
            blanditiis.
          </SubSection>
        </Section>
        <Section title="LANGUAGE">
          <SubSection title="LOREM IPSUM">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi
            blanditiis.
          </SubSection>
          <SubSection title="LOREM IPSUM">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi
            blanditiis.
          </SubSection>
        </Section>
      </div>
    </aside>
  );
}

export default Sidebar;
