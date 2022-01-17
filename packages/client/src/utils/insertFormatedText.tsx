import React from 'react';

type Props = {
  text: string;
  findText: string;
  className: string;
};

export const InsertFormatedText: React.FC<Props> = ({
  text,
  findText,
  className,
}) => {
  const replacement = <span className={className}>{findText}</span>;
  const result = text.split(findText);
  const resultLeigth = result.length - 1;

  return (
    <>
      {result.map((item, key) => (
        <>
          {item}
          {key !== resultLeigth && replacement}
        </>
      ))}
    </>
  );
};
