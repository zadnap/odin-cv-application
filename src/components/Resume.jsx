import styles from '@/styles/Resume.module.scss';
import Headline from './Headline';
import Section from './Section';
import Contact from './Contact';
import InfoItem from './InfoItem';

function Resume() {
  return (
    <div className={styles.resume}>
      <Headline
        name="Jennifer Watson"
        title="User Interface Designer"
        webpage="www.jwatson.com"
      />
      <div className={styles.body}>
        <div className={styles.left}>
          <Section title="About Me">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit
            quisquam optio libero, ipsa labore dolorem odit expedita numquam eum
            quos mollitia rem et natus quo animi officiis. Magni, similique?
          </Section>
          <Section title="Contact">
            <Contact
              name="Address"
              content="12th Avenue Street Australia 40000"
            />
            <Contact name="Email" content="johnwatson@gmail.com" />
            <Contact name="Phone" content="02800200" />
          </Section>
        </div>
        <div className={styles.right}>
          <Section title="Experiences">
            <InfoItem
              title="Soft Design Studios"
              subtitle="Graphic Designer"
              from={2015}
              to={2017}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit"
            />
            <InfoItem
              title="Soft Design Studios"
              subtitle="Graphic Designer"
              from={2015}
              to={2017}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit"
            />
            <InfoItem
              title="Soft Design Studios"
              subtitle="Graphic Designer"
              from={2015}
              to={2017}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit"
            />
          </Section>
          <Section title="Education">
            <InfoItem
              title="Certificate of Webtraining"
              subtitle="University of Lorem"
              from={2015}
              to={2017}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit"
            />
            <InfoItem
              title="Certificate of Webtraining"
              subtitle="University of Lorem"
              from={2015}
              to={2017}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit"
            />
            <InfoItem
              title="Certificate of Webtraining"
              subtitle="University of Lorem"
              from={2015}
              to={2017}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit"
            />
          </Section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
