import styled from 'styled-components';

const color = 'blue';

export const Title = styled.h1`
  color: ${color};
  font-size: 40px;

  p {
    border: 1px solid black;
    font-size: 15px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => (props.color ? props.color : color)};
  color: ${(props) => (props.color ? props.color : color)};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
