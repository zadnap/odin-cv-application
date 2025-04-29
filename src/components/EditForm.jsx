import styles from '@/styles/EditForm.module.scss';
import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import FormInfoItem from './FormInfoItem';

function EditForm() {
  return (
    <form className={styles.editForm} onSubmit={(e) => e.preventDefault()}>
      <Fieldset legend="Personal Details">
        <Input name="Full name" />
        <Input name="Title" />
        <Input name="About" />
        <Input name="Address" />
        <Input name="Email" />
        <Input name="Phone" />
      </Fieldset>
      <Fieldset legend="Experience">
        <FormInfoItem text="Soft Design Studios" />
        <FormInfoItem text="Soft Design Studios" />
        <FormInfoItem text="Soft Design Studios" />
        <Button>Add</Button>
      </Fieldset>
      <Fieldset legend="Education">
        <Input name="School" />
        <Input name="Degree" />
        <Input name="Start Date" />
        <Input name="End Date" />
        <Input name="Description" />
        <div className={styles.buttonGroup}>
          <Button>Cancel</Button>
          <Button>Add</Button>
        </div>
      </Fieldset>
      <div className={styles.buttonGroup}>
        <Button>Clear</Button>
        <Button>Download</Button>
      </div>
    </form>
  );
}

export default EditForm;
