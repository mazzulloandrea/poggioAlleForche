import { FieldContainer, ErrorContainer, Label, Input, TextArea } from './styles';

export const formTipology = (input, errors, register, t, prefixTranslationStr) => {
  switch (input.type) {
    case 'text':
      return (
        <FieldContainer key={input.name}>
          <Label>{input.label}</Label>
          <Input
            {...register(input.name, input.rules)}
            type="text"
            name={input.name}
            autoComplete={input.autoComplete}
          />
          {errors[input.name] && <ErrorContainer>{errors[input.name].message}</ErrorContainer>}
        </FieldContainer>
      );
    case 'textarea':
      return (
        <FieldContainer key={input.name}>
          <Label>{input.label}</Label>
          <TextArea
            {...register(input.name, input.rules)}
            type="textarea"
            name={input.name}
            rows={input.rows}
          />
          {errors.description && <ErrorContainer>{errors.description.message}</ErrorContainer>}
        </FieldContainer>
      );
    case 'datetime-local':
      return (
        <FieldContainer key={input.name}>
          <Label>{t(`${prefixTranslationStr}.form.dateTo`)}</Label>
          <Input
            {...register(input.name, input.rules)}
            type="datetime-local"
            min={`${new Date().toISOString().substring(0, 10)}T00:00`}
            name="dateTo"
            autoComplete={input.autoComplete}
          />
          {errors.dateTo && <ErrorContainer>{errors.dateTo.message}</ErrorContainer>}
        </FieldContainer>
      );
    case 'image':
      return (
        <FieldContainer key={input.name}>
          <Label>{t(`${prefixTranslationStr}.form.image`)}</Label>
          <Input {...register(input.name, input.rules)} type="file" name="image" />
          {errors.image && <ErrorContainer>{errors.image.message}</ErrorContainer>}
        </FieldContainer>
      );
    default:
      return '';
  }
};

export const addEventsFrom = (t, prefixTranslationStr) => [
  {
    name: 'title',
    label: t(`${prefixTranslationStr}.form.title`),
    rules: {
      required: t('global.formRequired'),
      maxLength: { value: 30, message: t(`${prefixTranslationStr}.form.titleMaxLength`) },
    },
    type: 'text',
    autocomplete: 'off',
    disabled: false,
  },
  {
    name: 'description',
    label: t(`${prefixTranslationStr}.form.description`),
    rules: {
      required: t('global.formRequired'),
      maxLength: {
        value: 2000,
        message: t(`${prefixTranslationStr}.form.descriptionMaxLength`),
      },
    },
    type: 'textarea',
    rows: '3',
    disabled: false,
  },
  {
    name: 'dateFrom',
    label: t(`${prefixTranslationStr}.form.description`),
    rules: {
      required: t('global.formRequired'),
    },
    type: 'datetime-local',
    min: `${new Date().toISOString().substring(0, 10)}T00:00`,
    disabled: false,
    autoComplete: 'off',
  },
  {
    name: 'dateTo',
    label: t(`${prefixTranslationStr}.form.dateTo`),
    rules: {
      required: t('global.formRequired'),
    },
    type: 'datetime-local',
    min: `${new Date().toISOString().substring(0, 10)}T00:00`,
    disabled: false,
    autoComplete: 'off',
  },
  {
    name: 'image',
    label: t(`${prefixTranslationStr}.form.image`),
    rules: {
      required: t('global.formRequired'),
    },
    type: 'image',
    disabled: false,
  },
  {
    name: 'tags',
    label: t(`${prefixTranslationStr}.form.tags`),
    rules: {
      required: t('global.formRequired'),
      maxLength: { value: 30, message: t(`${prefixTranslationStr}.form.tagsMaxLength`) },
    },
    type: 'text',
    autocomplete: 'off',
    disabled: false,
  },
  {
    name: 'location',
    label: t(`${prefixTranslationStr}.form.location`),
    rules: {
      required: t('global.formRequired'),
      maxLength: { value: 30, message: t(`${prefixTranslationStr}.form.locationMaxLength`) },
    },
    type: 'text',
    autocomplete: 'off',
    disabled: false,
  },
];
