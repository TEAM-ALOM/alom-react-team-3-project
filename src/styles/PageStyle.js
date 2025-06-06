import styled from "styled-components";

export const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
  letter-spacing: -0.03em;
`;

export const InfoCard = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
`;

export const Label = styled.p`
  font-size: 18px;
  margin: 12px 0;
  word-break: keep-all;
  font-weight: 600;
  letter-spacing: -0.03em;

  a {
    color: ${(props) => props.theme.accentColor};
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FixedButton = styled.button`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  padding: 14px 24px;
  border-radius: 16px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.accentColor + "CC"};
  }
`;

export const Parking = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    color: ${(props) => props.theme.accentColor};
  }
  font-weight: 600;
  letter-spacing: -0.03em;
`;

export const LoaderSpan = styled.span`
  text-align: center;
  display: block;
  padding: 20px;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.accentColor};
`;
