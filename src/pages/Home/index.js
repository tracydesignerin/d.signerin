import React from 'react';
import styled from 'styled-components';
import MyProfilePic from '../../assets/images/Ava.png';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/socials/linkedIn.svg';
import { ReactComponent as InstaIcon } from '../../assets/icons/socials/insta.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/socials/mail.svg';
import { SocialBox } from '../../common/SocialBox';
import CV from '../../assets/cv/cv.pdf';

const Home = () => {
  const SOCIALS = [
    {
      id: 0,
      icon: <LinkedInIcon width={24} height={24} />,
      mail: '',
      onClick: () => window.open('https://www.linkedin.com/in/thanh-nguyen-2b4a04211/', '_blank'),
    },
    {
      id: 1,
      icon: <EmailIcon width={24} height={24} />,
      mail: 'hathanh1996@gmail.com',
      onClick: null,
    },
    {
      id: 2,
      icon: <InstaIcon width={24} height={24} />,
      mail: '',
      onClick: () =>
        window.open('https://instagram.com/thanhnguyen.96?igshid=YmMyMTA2M2Y=', '_blank'),
    },
  ];

  return (
    <Wrapper>
      <MyPicture>
        <img src={MyProfilePic} alt="my-profile-pic" />
      </MyPicture>

      <MyBio>
        <Greeting>Hi, I'm Thanh</Greeting>

        <Bio>
          Due to designing passion, I’ve decided to change my career path from a specialist in
          logistics field into a UX/UI designer.
        </Bio>

        <Quote>“Design creates culture. Culture shapes values. Values determine the future.”</Quote>
        <Author>— Robert L. Peters</Author>

        <SocialBoxes>
          {SOCIALS.map((i) => (
            <SocialBox key={i.id} mail={i.mail} onClick={i.onClick}>
              {i.icon}
            </SocialBox>
          ))}
        </SocialBoxes>

        <Resume>
          <button type="button" onClick={() => window.open(CV, '_blank')}>
            Resumé
          </button>
        </Resume>
      </MyBio>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MyPicture = styled.div`
  img {
    width: 400px;
    height: 400px;
    filter: drop-shadow(16px 16px 4px rgba(125, 83, 40, 0.55));
  }
`;

const MyBio = styled.div`
  width: 400px;
`;

const Greeting = styled.p`
  font-family: 'Caveat';
  font-size: 56px;
`;

const Bio = styled.div`
  font-family: 'Caudex';
  font-size: 20px;
  padding-left: 42px;
  margin-top: 1rem;
`;

const Quote = styled.div`
  font-family: 'Caudex';
  font-size: 16px;
  font-style: italic;
  padding-left: 42px;
  margin-top: 1rem;
`;

const Author = styled.div`
  font-family: 'Caudex';
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  display: flex;
  justify-content: flex-end;
`;

const SocialBoxes = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 1rem;
  justify-content: center;
`;

const Resume = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  button {
    width: 200px;
    background: #a37e48;
    color: #fff;
    border: 1px solid rgba(125, 83, 40, 1);
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
    font-size: 20px;
    font-family: 'Caudex';
    cursor: pointer;
    transition: 275ms;

    &:hover {
      background: #7d5328;
    }

    &:active {
      transform: translateY(2px);
    }
  }
`;
