import React from 'react';
import language from '../../assets/language.json';

const Label = ({ name }) => <span>{language[name]}</span>;

export default Label;
