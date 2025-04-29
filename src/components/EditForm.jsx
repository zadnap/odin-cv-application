import styles from '@/styles/EditForm.module.scss';
import { useState } from 'react';
import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import FormInfoItem from './FormInfoItem';

function EditForm({ cvData, setCvData }) {
  const [currentExperienceID, setCurrentExperienceID] = useState(-1);
  const [currentEducationID, setCurrentEducationID] = useState(-1);

  const handleEditPersonal = (e, field) =>
    setCvData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: e.target.value },
    }));

  const handleClearCv = () => {
    setCvData({
      personal: {
        fullname: '',
        title: '',
        aboutMe: '',
        address: '',
        email: '',
        phone: '',
      },
      education: [],
      experience: [],
    });
  };

  const generateUniqueId = () => Date.now() + Math.floor(Math.random() * 1000);

  const handleAddItem = (list) => {
    const newId = generateUniqueId();
    const isExperience = list === cvData.experience;
    const newItem = isExperience
      ? {
          id: newId,
          company: '',
          title: '',
          start: '',
          end: '',
          desc: '',
        }
      : {
          id: newId,
          school: '',
          degree: '',
          start: '',
          end: '',
          desc: '',
        };

    setCvData((prev) => ({
      ...prev,
      [isExperience ? 'experience' : 'education']: [
        ...prev[isExperience ? 'experience' : 'education'],
        newItem,
      ],
    }));

    if (isExperience) {
      setCurrentExperienceID(newId);
    } else {
      setCurrentEducationID(newId);
    }
  };

  const renderEditForm = (id, list) => {
    const item = list.find((it) => it.id === id);
    const isExperience = list === cvData.experience;
    const handleEdit = (e, field) => {
      const newList = list.map((el) =>
        el.id === id ? { ...el, [field]: e.target.value } : el
      );

      setCvData((prev) => ({
        ...prev,
        [isExperience ? 'experience' : 'education']: newList,
      }));
    };

    const handleSave = () => {
      isExperience ? setCurrentExperienceID(-1) : setCurrentEducationID(-1);
    };

    const handleDelete = () => {
      const newList = list.filter((el) => el.id !== id);

      setCvData((prev) => ({
        ...prev,
        [isExperience ? 'experience' : 'education']: newList,
      }));

      handleSave();
    };

    return (
      <>
        <Input
          name={isExperience ? 'Company' : 'School'}
          value={isExperience ? item.company : item.school}
          onChange={(e) => handleEdit(e, isExperience ? 'company' : 'school')}
        />
        <Input
          name={isExperience ? 'Title' : 'Degree'}
          value={isExperience ? item.title : item.degree}
          onChange={(e) => handleEdit(e, isExperience ? 'title' : 'degree')}
        />
        <Input
          name="Start Date"
          value={item.start}
          onChange={(e) => handleEdit(e, 'start')}
        />
        <Input
          name="End Date"
          value={item.end}
          onChange={(e) => handleEdit(e, 'end')}
        />
        <Input
          name="Description"
          value={item.desc}
          onChange={(e) => handleEdit(e, 'desc')}
        />
        <div className={styles.buttonGroup}>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </>
    );
  };

  return (
    <form className={styles.editForm} onSubmit={(e) => e.preventDefault()}>
      <Fieldset legend="Personal Details">
        <Input
          name="Full Name"
          value={cvData.personal.fullname}
          onChange={(e) => handleEditPersonal(e, 'fullname')}
        />
        <Input
          name="Title"
          value={cvData.personal.title}
          onChange={(e) => handleEditPersonal(e, 'title')}
        />
        <Input
          name="About Me"
          value={cvData.personal.aboutMe}
          onChange={(e) => handleEditPersonal(e, 'aboutMe')}
        />
        <Input
          name="Address"
          value={cvData.personal.address}
          onChange={(e) => handleEditPersonal(e, 'address')}
        />
        <Input
          name="Email"
          value={cvData.personal.email}
          onChange={(e) => handleEditPersonal(e, 'email')}
        />
        <Input
          name="Phone"
          value={cvData.personal.phone}
          onChange={(e) => handleEditPersonal(e, 'phone')}
        />
      </Fieldset>
      <Fieldset legend="Education">
        {currentEducationID == -1 ? (
          <>
            {cvData.education.map((edu) => (
              <FormInfoItem
                text={edu.school}
                key={edu.id}
                onClick={() => setCurrentEducationID(edu.id)}
              />
            ))}
            <Button onClick={() => handleAddItem(cvData.education)}>Add</Button>
          </>
        ) : (
          <>{renderEditForm(currentEducationID, cvData.education)}</>
        )}
      </Fieldset>
      <Fieldset legend="Experience">
        {currentExperienceID == -1 ? (
          <>
            {cvData.experience.map((exp) => (
              <FormInfoItem
                text={exp.company}
                key={exp.id}
                onClick={() => setCurrentExperienceID(exp.id)}
              />
            ))}
            <Button onClick={() => handleAddItem(cvData.experience)}>
              Add
            </Button>
          </>
        ) : (
          <>{renderEditForm(currentExperienceID, cvData.experience)}</>
        )}
      </Fieldset>
      <div className={styles.buttonGroup}>
        <Button onClick={handleClearCv}>Clear</Button>
      </div>
    </form>
  );
}

export default EditForm;
