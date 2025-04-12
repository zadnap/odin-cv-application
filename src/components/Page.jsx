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
import { useState } from 'react';

function Page() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className={styles.page}>
      <aside className={styles.sidebar}>
        <Avatar />
        <div className={styles.info}>
          <Headline content="Hoang Thu Ha" isEditing={isEditing}>
            <Headline content="Event Manager" isEditing={isEditing} />
          </Headline>
          <Section isEditing={isEditing} title="CONTACT">
            <Contact
              icon={<FontAwesomeIcon icon={faPhone} />}
              content="+00 123 456 789"
              info="Phone number"
              isEditing={isEditing}
            />
            <Contact
              icon={<FontAwesomeIcon icon={faLocationDot} />}
              content="567 STREET, NY "
              info="Address"
              isEditing={isEditing}
            />
            <Contact
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              content="LOREMIPSUM@MAIL.COM"
              info="Email"
              isEditing={isEditing}
            />
          </Section>
          <Section isEditing={isEditing} title="REFERENCES">
            <Section
              isEditing={isEditing}
              title="LOREM IPSUM"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing"
            ></Section>
            <Section
              isEditing={isEditing}
              title="LOREM IPSUM"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
            ></Section>
          </Section>
          <Section isEditing={isEditing} title="LANGUAGE">
            <Section
              isEditing={isEditing}
              title="LOREM IPSUM"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
            ></Section>
          </Section>
        </div>
      </aside>
      <section isEditing={isEditing} className={styles.main}>
        <Section
          isEditing={isEditing}
          title="ABOUT ME"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut. Nemo vero repellat omnis quidem? Saepe quod sit enim assumenda possimus itaque vero non voluptas minima tempora. Corporis, obcaecati impedit."
        >
          <Section
            isEditing={isEditing}
            title="LOREM IPSUM"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
          ></Section>
        </Section>
        <Section isEditing={isEditing} title="EDUCATION">
          <Section
            isEditing={isEditing}
            title="LOREM IPSUM"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
          ></Section>
          <Section
            isEditing={isEditing}
            title="LOREM IPSUM"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
          ></Section>
        </Section>
        <Section isEditing={isEditing} title="EXPERIENCE">
          <Section
            isEditing={isEditing}
            title="LOREM IPSUM"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
          ></Section>
          <Section
            isEditing={isEditing}
            title="LOREM IPSUM"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
          ></Section>
        </Section>
        <Section isEditing={isEditing} title="SKILLS">
          <Section
            isEditing={isEditing}
            title="LOREM IPSUM"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
          ></Section>
          <Section
            isEditing={isEditing}
            title="LOREM IPSUM"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi blanditiis."
          ></Section>
        </Section>
      </section>
    </section>
  );
}

export default Page;
