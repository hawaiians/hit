import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import MetaTags from "../../components/Metatags.js";
import { Heading, Subheading } from "../../components/Heading";
import Button from "../../components/Button";
import Input from "../../components/form/Input";
import ErrorMessage, {
  ErrorMessageProps,
} from "../../components/form/ErrorMessage";
import ProgressBar from "../../components/form/ProgressBar";
import { scrollToTop } from "../../helpers.js";

export default function JoinStep4() {
  const router = useRouter();
  const { name, location, website, focus } = router.query;
  return (
    <div className="container">
      <Head>
        <title>Hawaiians in Technology | Join</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>
      <Link href="/join" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>
      <ProgressBar
        headline="Private"
        label="How to Reach You"
        currentCount={3}
        totalCount={3}
      />
      <div style={{ marginTop: "4rem" }}>
        <Heading>Welcome to our little hui.</Heading>
        <Subheading>
          This email will be used to confirm any changes to your profile going
          forward. We <strong>will not</strong> share your contact information
          without your permission.
        </Subheading>
      </div>
      <div
        style={{
          margin: "2rem auto 0",
          maxWidth: "var(--width-page-interior)",
        }}
      >
        <FormikForm />
      </div>
    </div>
  );
}

const Form = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = props;
  const router = useRouter();
  const { name, location, website, focus, suggestedFocus, title } =
    router.query;
  const { email } = values;
  const [error, setError] = useState<ErrorMessageProps>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(undefined);

  useEffect(() => {
    if (error) {
      scrollToTop();
    }
  }, [error]);

  const createMember = async () => {
    return new Promise((resolve, reject) => {
      fetch("/api/create-member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          location,
          website,
          email,
          focus,
          suggestedFocus,
          title,
        }),
      }).then(
        (response: Response) => {
          resolve(response);
        },
        (error: Response) => {
          reject(error);
        }
      );
    });
  };

  const onSubmit = async (e) => {
    handleSubmit();
    e.preventDefault();
    setError(undefined);
    setIsLoading(true);

    if (!isValid) {
      setIsLoading(false);
      setError({
        headline: "An email address is required.",
        body: "Please try again below.",
      });
      return;
    }

    const res: Response | any = await createMember();
    if (res.ok) {
      router.push({ pathname: "thank-you" });
      return;
    } else if (res.status === 422) {
      setError({
        headline: "This email is associated with another member.",
        body: "We only allow one member per email address.",
      });
    } else {
      setError({
        headline: "Gonfunnit, looks like something went wrong!",
        body: "Please try again later.",
      });
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <div style={{ marginBottom: "1rem" }}>
          <ErrorMessage headline={error.headline} body={error.body} />
        </div>
      )}
      <div style={{ marginBottom: "2rem" }}>
        <Input
          name="email"
          label="What’s your email?"
          labelTranslation="He aha kou wahi leka uila?"
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.email && errors.email}
        />
      </div>
      <Button type="submit" loading={isLoading}>
        Submit
      </Button>
    </form>
  );
};

const FormikForm = withFormik({
  displayName: "email-form",
  validateOnMount: true,
  handleSubmit: () => {},
  mapPropsToValues: () => ({ email: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("That email doesn't look right. Please try again.")
      .required("It's important that we can reach you. Email is required."),
  }),
})(Form);