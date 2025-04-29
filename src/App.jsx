import { useState } from 'react';
import styles from './App.module.scss';
import EditForm from './components/EditForm';
import Resume from './components/Resume';

function App() {
  const [cvData, setCvData] = useState({
    personal: {
      fullname: 'Jennifer Watson',
      title: 'User Experience Designer',
      aboutMe:
        'My Name is Jenny Watson lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada erat ut turpis suscipit porttitor. Donec posuere dictum mi, eu consequat tortor ornare sit amet. Suspendisse potenti. Integer aliquam ultricies mi, eu facilisis ex pharetra sit amet. Pellentesque fermentum est in nisl pretium malesuada. Vivamus ullamcorper risus nec tincidunt feugiat.',
      address: '12th Avenue Street Australia 40000',
      email: 'johnwatson@gmail.com',
      phone: '02800200',
    },
    education: [
      {
        id: 0,
        school: 'University of Lorem',
        degree: 'Certificate of Web Training',
        start: 2008,
        end: 2010,
        desc: 'Porttitor amet massa Donec consectetur dolor et nisl medium lorem facilisis non lorem quam donec tincidunt lorem ipsum euismod, dui etiam donec.',
      },
      {
        id: 1,
        school: 'University of Lorem',
        degree: 'Bachelor of Art Director',
        start: 2007,
        end: 2009,
        desc: 'Porttitor amet massa Donec consectetur dolor et nisl medium lorem facilisis non lorem quam donec tincidunt lorem ipsum euismod, dui etiam donec.',
      },
      {
        id: 2,
        school: 'University of Lorem',
        degree: 'Bachelor of Art Director',
        start: 2007,
        end: 2009,
        desc: 'Porttitor amet massa Donec consectetur dolor et nisl medium lorem facilisis non lorem quam donec tincidunt lorem ipsum euismod, dui etiam donec.',
      },
    ],
    experience: [
      {
        id: 0,
        company: 'Soft Design Studios',
        title: 'Graphic Designer',
        start: 2015,
        end: 2017,
        desc: 'Porttitor amet massa Donec consectetur dolor et nisl medium lorem facilisis non lorem quam donec tincidunt lorem ipsum euismod, dui etiam donec.',
      },
      {
        id: 1,
        company: 'Web Tech Ltd',
        title: 'Web Designer',
        start: 2013,
        end: 2015,
        desc: 'Porttitor amet massa Donec consectetur dolor et nisl medium lorem facilisis non lorem quam donec tincidunt lorem ipsum euismod, dui etiam donec.',
      },
      {
        id: 2,
        company: 'Dev Creative Solutions',
        title: 'Lead Web Designer',
        start: 2010,
        end: 2013,
        desc: 'Porttitor amet massa Donec consectetur dolor et nisl medium lorem facilisis non lorem quam donec tincidunt lorem ipsum euismod, dui etiam donec.',
      },
    ],
  });

  return (
    <div className={styles.app}>
      <EditForm cvData={cvData} setCvData={setCvData} />
      <Resume cvData={cvData} />
    </div>
  );
}

export default App;
