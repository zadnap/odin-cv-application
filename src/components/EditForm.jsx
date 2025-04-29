import styles from '@/styles/EditForm.module.scss';
import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import FormInfoItem from './FormInfoItem';

function EditForm({ cvData, setCvData }) {
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
        {cvData.education.map((edu) => (
          <FormInfoItem text={edu.school} />
        ))}
        <Button>Add</Button>
      </Fieldset>
      <Fieldset legend="Experience">
        {cvData.experience.map((exp) => (
          <FormInfoItem text={exp.company} />
        ))}
        <Button>Add</Button>
      </Fieldset>
      <div className={styles.buttonGroup}>
        <Button onClick={handleClearCv}>Clear</Button>
        <Button>Download</Button>
      </div>
    </form>
  );
}

export default EditForm;
