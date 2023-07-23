import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import Layout from '../../layouts/Layout';
import { Title, FormWrapper, Form, SubmitButton } from './styles';
import { useMutation, useQueryClient } from 'react-query';
import { history, request, routes } from '../../utils';
import { EventDetailsLoader } from '../../components/Loader';
import { formTipology, addEventsFrom } from './formUtility';
import { defaultValues, validationSchema, useYupValidationResolver } from './schema';

const prefixTranslationStr = 'components.newEvent';

const NewEvent = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const resolver = useYupValidationResolver(validationSchema);

  const createEvent = async newEvent => {
    const { data } = await request.post('/events', newEvent);
    const imageFormData = new FormData();
    console.log(newEvent.image);
    imageFormData.append('image', newEvent.image[0]);
    await request.post('/events/' + data._id + '/images', imageFormData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  };

  const { isLoading, mutate } = useMutation(createEvent, {
    onSuccess: ({ _id }) => {
      history.replace(routes.event(_id));
    },
    onError: err => {
      console.error(err.response.data.error);
    },
    onSettled: () => {
      queryClient.invalidateQueries('events');
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver,
  });

  const onSubmit = data => {
    const { tags: tagsEl, dateFrom: dateFromEl, dateTo: dateToEl, ...rest } = data;
    const tags = (!isEmpty(tagsEl) && tagsEl[0].replace(/ /g, '').split(',')) || [];
    const dateFrom = new Date(dateFromEl).getTime();
    const dateTo = new Date(dateToEl).getTime();
    const newEvent = {
      ...rest,
      tags,
      dateFrom,
      dateTo,
    };

    mutate(newEvent);
  };

  if (isLoading)
    return (
      <div className="w-full">
        <EventDetailsLoader viewBox={`0 0 ${window.screen.width} ${window.screen.height}`} />
      </div>
    );

  return (
    <Layout>
      <Title>{t(`${prefixTranslationStr}.title`)}</Title>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {addEventsFrom(t, prefixTranslationStr).map(input =>
            formTipology(input, errors, register, t, prefixTranslationStr),
          )}
          <hr></hr>

          <SubmitButton
            type="submit"
            className="inline-flex items-center justify-center"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {t(`${prefixTranslationStr}.form.submit`)}
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Layout>
  );
};

export default NewEvent;
