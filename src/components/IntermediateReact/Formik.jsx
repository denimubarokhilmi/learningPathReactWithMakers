import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FormContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  /* position: relative;     */
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e1e1;
  border-top: none;
  border-right: none;
  border-left: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 8px rgba(74, 144, 226, 0.2);
    background-color: transparent;
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #ccc;
  }
`;

const FormilError = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  font-weight: 500;
  animation: ${fadeIn} 0.3s ease-out;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.1s;

  &:hover:not(:disabled) {
    background-color: #357abd;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function ExampleFormik() {
  const validationSchemaYup = Yup.object({
    firstName: Yup.string().min(3, "Min 3 chars").required("Required"),
    lastName: Yup.string().min(3, "Min 3 chars").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <FormContainer>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Sign Up</h2>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={validationSchemaYup}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            alert("Success!");
            resetForm();
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Field name="firstName" placeholder="Deni" as={Input} />
              <ErrorMessage name="firstName" component={FormilError} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Field name="lastName" placeholder="Acil" as={Input} />
              <ErrorMessage name="lastName" component={FormilError} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Field name="email" placeholder="deni@example.com" as={Input} />
              <ErrorMessage name="email" component={FormilError} />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Prosses..." : "Submit Form"}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default ExampleFormik;
