import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { FormikInput } from '../../ui-components/Input';
import { Title } from '../../ui-components/Typography';
import { Button, Form, Link } from './common';

export const ResetPasswordPage = () => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Title>{t('auth.resetPasswordTitle')}</Title>
          <FormikInput
            type="text"
            name="email"
            placeholder="jon@example.com"
            label={t('auth.email')}
            value={values.email}
            required
          />
          <Button type="submit">{t('auth.sendPasswordReset')}</Button>
          <Link to="/login">{t('auth.backToLogin')}</Link>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordPage;
