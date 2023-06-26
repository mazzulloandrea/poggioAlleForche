import React from 'react';
import { Button } from './styles';

const FloatingButton = ({ onClick = () => {} }) => <Button color="white" onClick={onClick} />;

export default FloatingButton;
