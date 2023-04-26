import { Formik,Form } from "formik";
import CustomInput from "./CustomInput";
import { advenceSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";
const onSubmit=async(values,actions)=>{
    console.log(values)
    console.log(actions)
    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
    });
    actions.resetForm()
    }

function PortalForm() {
  return (
    <>
      <Formik
       initialValues={{ username: '', university: '', isAccepted:false, firstName: '', lastName: '' }}
       onSubmit={onSubmit}
       validationSchema={advenceSchema}
     >
       {({isSubmitting}) => (
         <Form>
          <CustomInput
          label='Kullanıcı Adı'
          name='username'
          type = 'text'
          placeholder='Kullanıcı Adını Giriniz'
          />
          <CustomSelect
          label='Okulunuz'
          name='university'
          placeholder='Üniversitenizi Seçiniz'>
            <option value=''>Lütfen Üniversitenizi Seçiniz</option>
            <option value='boğazici'>Boğaziçi Üniversitesi</option>
            <option value='gsu'>Galatasaray Üniversitesi</option>
            <option value='odtü'>ODTÜ</option>
            <option value='itü'>İTÜ</option>
          </CustomSelect>
          <CustomCheckbox
          type='checkbox'
          name='isAccepted'
          />
          <button disabled={isSubmitting} type="submit">Kaydet</button>
          <Link className="formLink" to='/'>Ana Forma Git</Link>
         </Form>
       )}
     </Formik>
    </>
  )
}

export default PortalForm
