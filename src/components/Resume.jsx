import styles from '@/styles/Resume.module.scss';
import Headline from './Headline';
import Section from './Section';
import Contact from './Contact';
import InfoItem from './InfoItem';

function Resume({ cvData }) {
  return (
    <div className={styles.resume}>
      <Headline name={cvData.personal.fullname} title={cvData.personal.title} />
      <div className={styles.body}>
        <div className={styles.left}>
          <Section title="About Me">{cvData.personal.aboutMe}</Section>
          <Section title="Contact">
            <Contact name="Address" content={cvData.personal.address} />
            <Contact name="Email" content={cvData.personal.email} />
            <Contact name="Phone" content={cvData.personal.phone} />
          </Section>
        </div>
        <div className={styles.right}>
          <Section title="Education">
            {cvData.education.map((edu) => (
              <InfoItem
                key={edu.id}
                title={edu.degree}
                subtitle={edu.school}
                from={edu.start}
                to={edu.end}
                desc={edu.desc}
              />
            ))}
          </Section>
          <Section title="Experiences">
            {cvData.experience.map((exp) => (
              <InfoItem
                key={exp.id}
                title={exp.title}
                subtitle={exp.company}
                from={exp.start}
                to={exp.end}
                desc={exp.desc}
              />
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
