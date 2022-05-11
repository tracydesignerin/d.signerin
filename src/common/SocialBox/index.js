import React from 'react';
import styled from 'styled-components';

export const SocialBox = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      {props.mail !== '' ? <a href={`mailto: ${props.mail}`}>{props.children}</a> : props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(81, 46, 11, 0.83);
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(125, 83, 40, 1);

  padding: 0.75rem 1.5rem;

  border-radius: 16px 0;
  transition: 275ms;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 4px 4px rgba(125, 83, 40, 1);
  }
`;
