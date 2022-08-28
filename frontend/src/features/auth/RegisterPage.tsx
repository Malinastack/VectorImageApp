import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { FormikInput } from '../../ui-components/Input';
import { Title } from '../../ui-components/Typography';
import { Button, Form, Link } from './common';
import { authActions } from './store';
import { getRegisterSchema } from './validation';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { signUp } = authActions;
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ email: '', password: '', repeatPassword: '', firstName: '', lastName: '' }}
      onSubmit={async values => dispatch(signUp(values))}
      validationSchema={getRegisterSchema()}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Title>
            {t('auth.getStarted')}
            <br />
            {t('auth.withFreeAccount')}
          </Title>
          <FormikInput type="text" name="firstName" placeholder="Jon" label={t('auth.firstName')} />
          <FormikInput type="text" name="lastName" placeholder="Doe" label={t('auth.lastName')} />
          <FormikInput
            type="email"
            name="email"
            placeholder="joe@example.com"
            label={t('auth.email')}
          />
          <FormikInput
            type="password"
            name="password"
            placeholder="********"
            label={t('auth.password')}
          />
          <FormikInput
            type="password"
            name="repeatPassword"
            label={t('auth.repeatPassword')}
            placeholder="********"
          />
          <Button type="submit">{t('auth.getStarted')}</Button>
          <Link to="/login">{t('auth.loginLink')}</Link>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterPage;
