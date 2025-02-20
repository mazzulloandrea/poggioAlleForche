import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Img, ImgDescription, Multiline, YearsButtons, YearButton } from './styled';

const Product = ({
  lang,
  idToUse,
  src,
  srcDescr,
  full,
  spaceTop,
  oilRef,
  text,
  settings,
  imgDescription,
  ...defaultProps
}) => {
  const [yearSelected, setYearSelected] = useState(settings?.defaultYearSelected);

  useEffect(() => {
    console.log(yearSelected);
  }, [yearSelected]);

  const getProductImgSrc = () => {
    if (!settings || !settings.years) {
      return src;
    }
    const settingsSelected = settings.years.find(y => y.value === yearSelected);
    if (!settingsSelected) return src;
    return settingsSelected.src;
  };

  const getProductDescrSrc = () => {
    if (!settings || !settings.years) {
      return srcDescr;
    }
    const settingsSelected = settings.years.find(y => y.value === yearSelected);
    if (!settingsSelected) return srcDescr;
    return settingsSelected.srcDescr;
  };

  return (
    <>
      <Img
        id={`${idToUse}`}
        key={`${idToUse}_img`}
        src={getProductImgSrc()}
        {...defaultProps}
        full={full}
        spaceTop={spaceTop}
      />
      {settings && settings.years && (
        <Img
          id={`${idToUse}_descr`}
          key={`${idToUse}_imgDescr`}
          src={getProductDescrSrc()}
          {...defaultProps}
          full={full}
          spaceTop={spaceTop}
        />
      )}
      {settings?.years && (
        <YearsButtons {...defaultProps}>
          {settings.years.map(y => (
            <YearButton
              src={yearSelected === y.value ? y.buttonSrcActive : y.buttonSrc}
              onClick={() => setYearSelected(y.value)}
              {...defaultProps}
            />
          ))}
        </YearsButtons>
      )}
      {imgDescription && (
        <ImgDescription id={`${idToUse}`} key={`${idToUse}_img`} ref={oilRef} text={text}>
          {imgDescription.split('\n').map((txt, key) => (
            <Multiline key={key}>{txt}</Multiline>
          ))}
        </ImgDescription>
      )}
    </>
  );
};

export default Product;
