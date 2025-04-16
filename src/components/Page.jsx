import styles from '@/styles/page.module.scss';
import { useState } from 'react';
import Section from './Section';
import Avatar from './Avatar';
import Headline from './Headline';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

function Page({ isEditing }) {
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [headlineData, setHeadlineData] = useState([
    {
      name: 'fullname',
      content: 'Henry Smith',
      isSubHeadline: false,
    },
    {
      name: 'title',
      content: 'Art Director',
      isSubHeadline: true,
    },
  ]);
  const [sectionData, setSectionData] = useState([
    {
      id: 1,
      title: 'Contact',
      desc: '',
      list: [
        {
          id: 1,
          title: 'Phone Number',
          icon: faPhone,
          desc: '+00 123 456 789',
        },
        {
          id: 2,
          title: 'Address',
          icon: faLocationDot,
          desc: '567 STREET, NY',
        },
        {
          id: 3,
          title: 'Email',
          icon: faEnvelope,
          desc: 'loremipsum@mail.com',
        },
      ],
    },
    {
      id: 2,
      title: 'References',
      desc: '',
      list: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
      ],
    },
    {
      id: 3,
      title: 'Language',
      desc: '',
      list: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
      ],
    },
    {
      id: 4,
      title: 'About Me',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      list: [],
    },
    {
      id: 5,
      title: 'Education',
      desc: '',
      list: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
      ],
    },
    {
      id: 6,
      title: 'Experience',
      desc: '',
      list: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
      ],
    },
    {
      id: 7,
      title: 'Skills',
      desc: '',
      list: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
      ],
    },
  ]);

  const renderCvHeadlines = () => {
    return headlineData.map((hl) => (
      <Headline
        key={hl.name}
        name={hl.name}
        content={hl.content}
        isEditing={isEditing}
        isSubHeadline={hl.isSubHeadline}
        onChange={(e) => updateHeadline(hl.name, e.target.value)}
      />
    ));
  };

  const updateHeadline = (name, content) => {
    setHeadlineData((prev) =>
      prev.map((item) => (item.name === name ? { ...item, content } : item))
    );
  };

  const renderCvSections = (isLeft) => {
    const mid = sectionData.length / 2 - 1;

    let filteredSections = [];
    if (isLeft) {
      filteredSections = sectionData.filter((_, index) => index < mid);
    } else {
      filteredSections = sectionData.filter((_, index) => index >= mid);
    }

    return filteredSections.map((data) => (
      <Section
        key={data.id}
        title={data.title}
        icon={data.icon}
        description={data.desc}
        isEditing={isEditing}
        onChangeTitle={(e) => updateSection(data.id, e.target.value, data.desc)}
        onChangeDesc={(e) => updateSection(data.id, data.title, e.target.value)}
      >
        {data.list.map((item) => (
          <Section
            key={item.id}
            title={item.title}
            icon={item.icon}
            description={item.desc}
            isEditing={isEditing}
            onChangeTitle={(e) =>
              updateSubSection(data.id, item.id, e.target.value, item.desc)
            }
            onChangeDesc={(e) =>
              updateSubSection(data.id, item.id, item.title, e.target.value)
            }
          />
        ))}
      </Section>
    ));
  };

  const updateSection = (id, newTitle, newDesc) => {
    setSectionData((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, title: newTitle, desc: newDesc } : item
      )
    );
  };

  const updateSubSection = (sectionId, itemId, newTitle, newDesc) => {
    setSectionData((prevSections) =>
      prevSections.map((section) => {
        if (section.id !== sectionId) return section;

        const updatedList = section.list.map((item) =>
          item.id === itemId
            ? { ...item, title: newTitle, desc: newDesc }
            : item
        );

        return { ...section, list: updatedList };
      })
    );
  };

  const updateAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className={styles.page}>
      <aside className={styles.sidebar}>
        <Avatar src={avatarSrc} isEditing={isEditing} onChange={updateAvatar} />
        {renderCvHeadlines()}
        {renderCvSections(true)}
      </aside>
      <section className={styles.main}>{renderCvSections(false)}</section>
    </section>
  );
}

export default Page;
