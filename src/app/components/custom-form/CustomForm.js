import React from "react";
import { Formik, Form, Field } from "formik";
import { LucideChevronDown } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const FormField = ({
  icon: Icon,
  name,
  type = "text",
  placeholder,
  options,
  errors,
  touched,
  handleChange,
  as,
}) => {
  return (
    <div>
      <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem] z-[2001] pointer-events-auto">
        {Icon && <Icon size={25} className="text-[#666666]" />}
        {options ? (
          <Field
            as="select"
            name={name}
            onChange={handleChange}
            className="w-full bg-inherit border-none outline-none block text-[#666] text-base font-normal font-sans appearance-none pr-[2rem]"
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
        ) : as === "textarea" ? (
          <Field
            as="textarea"
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            className="w-full bg-[#F5F5F5] border-none h-[9rem] rounded-[5px] outline-none text-black text-base font-normal font-sans p-[1.5rem]"
          />
        ) : (
          <Field
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            className="bg-inherit w-full border-none outline-none text-black text-base font-normal font-sans"
          />
        )}
        {options && (
          <LucideChevronDown
            size={25}
            className="absolute right-[0.75rem] text-[#666] pointer-events-none"
          />
        )}
      </div>
      {errors[name] && touched[name] && (
        <div className="text-red-500 text-base">{errors[name]}</div>
      )}
    </div>
  );
};
function CustomForm({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  fieldSections,
  submitButton,
  showGoogleAuth = false,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleChange, isSubmitting }) => (
        <Form className="w-full">
          {showGoogleAuth && (
            <div>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  console.log(jwtDecode(credentialResponse.credential));
                }}
                onError={() => {
                  console.log("SignUp Failed");
                }}
              />
              <p className="no-underline text-base font-normal font-sans mt-[1.5rem] mb-[1rem] text-center">
                or
              </p>
            </div>
          )}
          {fieldSections
            ? fieldSections.map((section, index) => (
                <div
                  key={index}
                  className={
                    section.isGrid
                      ? "xl:grid xl:grid-cols-2 gap-x-[2rem] grid grid-cols-1"
                      : "flex flex-col"
                  }
                >
                  {section.fields.map((field) => (
                    <FormField
                      key={field.name}
                      icon={field.icon}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      options={field.options}
                      as={field.as}
                      disabled={field.disabled || false}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                    />
                  ))}
                </div>
              ))
            : fields.map((field) => (
                <FormField
                  key={field.name}
                  icon={field.icon}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  options={field.options}
                  as={field.as}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                />
              ))}
          {submitButton ? (
            submitButton(isSubmitting)
          ) : (
            <button type="submit">Submit</button>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default CustomForm;
