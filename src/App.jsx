import { useState } from 'react';
import styles from './App.module.scss';
import EditForm from './components/EditForm';
import Resume from './components/Resume';

function App() {
  const [cvData, setCvData] = useState({
    personal: {
      fullname: 'Jennifer Watson',
      title: 'User Interface Designer',
      aboutMe:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit quisquam optio libero, ipsa labore dolorem odit expedita numquam eum quos mollitia rem et natus quo animi officiis. Magni, similique?',
      address: '12th Avenue Street Australia 40000',
      email: 'johnwatson@gmail.com',
      phone: '02800200',
    },
    education: [
      {
        id: 0,
        school: 'University of Lorem',
        degree: 'Certificate of Webtraining',
        start: 2015,
        end: 2017,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit',
      },
      {
        id: 1,
        school: 'University of Lorem',
        degree: 'Certificate of Webtraining',
        start: 2015,
        end: 2017,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit',
      },
    ],
    experience: [
      {
        id: 0,
        company: 'Soft Design Studios',
        title: 'Graphic Designer',
        start: 2015,
        end: 2017,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit',
      },
      {
        id: 1,
        company: 'Soft Design Studios',
        title: 'Graphic Designer',
        start: 2015,
        end: 2017,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit',
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
