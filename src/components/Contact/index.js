import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';

export const Contact = () => {
  return (
    <Wrapper id='contact'>
      <Name>Ha Thanh, Nguyen</Name>

      <Contacts>
        <ContactDetail>
          <Icon>
            <Location width={24} height={24} />
          </Icon>
          <Text>Hanoi, Vietnam</Text>
        </ContactDetail>
        <ContactDetail>
          <Icon>
            <Email width={24} height={24} />
          </Icon>
          <Text>
            <a href="mailto:hathanh1996@gmail.com">hathanh1996@gmail.com</a>
          </Text>
        </ContactDetail>
        <ContactDetail>
          <Icon>
            <Phone width={24} height={24} />
          </Icon>
          <Text>(+84) 963 464 496</Text>
        </ContactDetail>
      </Contacts>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  padding: 2rem;
  background-color: #a37e48;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 42px;
  color: #fff;
  text-shadow: 0px 4px 4px #000000;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  height: 32px;
`;

const Text = styled.div`
  color: #fff;
  font-size: 24px;

  a {
    color: inherit;

    &:hover {
      color: inherit;
    }
  }
`;
