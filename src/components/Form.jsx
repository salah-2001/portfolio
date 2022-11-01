import React,{useRef } from 'react';
import './FormStyles.css';
import { Formik ,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Foorm = () => {

  const validationSchema = Yup.object({
    name : Yup.string().required('The name field is mandatory'),
    email: Yup.string().email("Email non Valide").required('The email field is mandatory'),
    subject: Yup.string().required('The subject field is mandatory'),
    message: Yup.string().min(5,"Message must contain at least 6 characters").required('The message field is mandatory'),
  })
  const initialValues={
    name:"",
    email:"",
    subject:"",
    message:"",
  }

 

  const form = useRef();

  const sendEmail = (e,actions) => {
  
    emailjs.sendForm('service_jngxrfg', 'template_3e7z06f', form.current, 'p5_7GqTOoWdQYCXBL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      actions.resetForm();
  };



  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    validateOnMount
     enableReinitialize
     onSubmit={sendEmail} 
  
    >
      {
        formik =>(
          <div className="form">
              <Form ref={form}>
                  <label >Name</label>
                  <Field type="text" name='name' id="name"  />
                  <p className="badge text-danger  font-weight-bold   "><ErrorMessage name='name'/></p>
                  <label >Email</label>
                  <Field type="text"  name='email' id="email"/>
                  <p className="badge text-danger  font-weight-bold   "><ErrorMessage name='email'/></p>
                  <label >Subject</label>
                  <Field type="text"  name='subject' id='subject'/>
                  <p className="badge text-danger  font-weight-bold   "><ErrorMessage name='subject'/></p>
                  <label >Message</label>
                  <Field as="textarea"  name='message' id='message' placeholder='type your message here'/>
                  <p className="badge text-danger  font-weight-bold  "><ErrorMessage name='message'/></p>
                  <button  type="submit"  className='btn'  disabled={!formik.isValid && !formik.dirty }>Save</button>
              </Form>
          </div>
        )
      }

    </Formik>

        

    

   
  )
}

export default Foorm
