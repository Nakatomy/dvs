import { useForm } from "react-hook-form";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";
import styles from "./style.module.css";
import cn from "classnames";
import {
  Container,
  Section,
  Title,
  Header,
  Form,
  FormData,
  FormLabel,
  FormDataGroup,
  FormTextArea,
  Paragraph,
  LinkComponent,
  Button,
  ButtonWrapper,
  ButtonForm,
  Spacer
} from "components";
import { Spa } from "@material-ui/icons";

const WhitepaperForm = ({ t }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };

  return (
    <>
      <Header />
      <Section>
        <Container margin="marginTop96">
          <Title align="alignCenter" >{t("pageTitle")}</Title>
          <Paragraph align="alignCenter">{t("paragraph1")}</Paragraph>
          <Spacer size="s" />
        </Container>
        <Container width="normal-width" align="alignCenter">
          <Form width="width50" onSubmit={handleSubmit(onSubmit)}>
            <FormData>
              <FormLabel>{t("firstName")}</FormLabel>
              <input
                className={styles.form__input}
                name="firstName"
                type="text"
                ref={register({ required: true })}
              ></input>
              {errors.firstName && (
                <Alert variant="danger">
                  {errors.firstName?.type === "required" && (
                    <p
                      className={cn(
                        styles["form__input-error"],
                        styles["form__input-error--active"]
                      )}
                    >
                      {t("requiredField")}
                    </p>
                  )}
                </Alert>
              )}
            </FormData>
            <FormData>
              <FormLabel>{t("lastName")}</FormLabel>
              <input
                className={styles.form__input}
                name="lastName"
                type="text"
                ref={register({ required: true })}
              ></input>
              {errors.lastName && (
                <Alert variant="danger">
                  {errors.lastName?.type === "required" && (
                    <p
                      className={cn(
                        styles["form__input-error"],
                        styles["form__input-error--active"]
                      )}
                    >
                        {t("requiredField")}
                    </p>
                  )}
                </Alert>
              )}
            </FormData>
            <FormData>
              <FormLabel>{t("companyName")}</FormLabel>
              <input
                className={styles.form__input}
                name="company"
                type="text"
                ref={register({ required: true })}
              ></input>
              {errors.company && (
                <Alert variant="danger">
                  {errors.company?.type === "required" && (
                    <p
                      className={cn(
                        styles["form__input-error"],
                        styles["form__input-error--active"]
                      )}
                    >
                        {t("requiredField")}
                    </p>
                  )}
                </Alert>
              )}
            </FormData>
            <FormData>
              <FormLabel>{t("country")}</FormLabel>
              <input
                className={styles.form__input}
                name="country"
                type="text"
                ref={register({ required: true })}
              ></input>
              {errors.country && (
                <Alert variant="danger">
                  {errors.country?.type === "required" && (
                    <p
                      className={cn(
                        styles["form__input-error"],
                        styles["form__input-error--active"]
                      )}
                    >
                        {t("requiredField")}
                    </p>
                  )}
                </Alert>
              )}
            </FormData>
            <FormData>
              <FormLabel>{t("position")}</FormLabel>
              <input
                className={styles.form__input}
                name="position"
                type="text"
                ref={register({ required: true })}
              ></input>
              {errors.position && (
                <Alert variant="danger">
                  {errors.position?.type === "required" && (
                    <p
                      className={cn(
                        styles["form__input-error"],
                        styles["form__input-error--active"]
                      )}
                    >
                        {t("requiredField")}
                    </p>
                  )}
                </Alert>
              )}
            </FormData>

        
              <FormData>
                <FormLabel>{t("email")}</FormLabel>
                <input
                  className={styles.form__input}
                  name="email"
                  type="email"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                ></input>
                {errors.email && (
                  <Alert variant="danger">
                    {errors.email?.type === "required" && (
                      <p
                        className={cn(
                          styles["form__input-error"],
                          styles["form__input-error--active"]
                        )}
                      >
                          {t("requiredField")}
                      </p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p
                        className={cn(
                          styles["form__input-error"],
                          styles["form__input-error--active"]
                        )}
                      >
                        {t("errorEmail")}
                      </p>
                    )}
                  </Alert>
                )}
              </FormData>
              <FormData>
                <FormLabel>{t("phone")}</FormLabel>
                <input className={styles.form__input}></input>
              </FormData>
         
            <FormData>
              <FormLabel>{t("inquiry")}</FormLabel>
              <FormTextArea></FormTextArea>
            </FormData>
            <div>
              <div>
                <input
                  name="checkbox"
                  ref={register({ required: true })}
                  type="checkbox"
                ></input>
                <FormLabel>
                  {" "}
                  {t("paragraph2-1")}{" "}
                  <LinkComponent color="blue" href="/privacy-policy">
                    {t("paragraph2-2")}
                  </LinkComponent>{" "}
                  {t("paragraph2-3")}
                </FormLabel>
                {errors.checkbox && (
                  <Alert variant="danger">
                    {errors.checkbox?.type === "required" && (
                      <p
                        className={cn(
                          styles["form__input-error"],
                          styles["form__input-error--active"]
                        )}
                      >
                        {t("requiredField")}
                      </p>
                    )}
                  </Alert>
                )}
              </div>
            </div>
            <ButtonWrapper>
              <ButtonForm
                type="submit"
                textColor="text-white"
                background="blue"
                size="fullWidth"
                title="Send message"
              ></ButtonForm>
            </ButtonWrapper>
          </Form>
        </Container>
      </Section>
    </>
  );
};

WhitepaperForm.getInitialProps = async () => ({
  namespacesRequired: ["whitepaperForm"],
});

WhitepaperForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("whitepaperForm")(WhitepaperForm);
