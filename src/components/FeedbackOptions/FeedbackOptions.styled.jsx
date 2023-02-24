import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  padding: 5px 16px;
  color: white;
  background-color: #5e5e73;
  border-radius: 5px;
  &:hover {
    background-color: ${props => {
      if (!props) {
        return 'white';
      }
      switch (props.label) {
        case 'good':
          return '#00f300';
        case 'neutral':
          return '#ffff39';
        case 'bad':
          return '#ff2300';
        default:
          return 'white';
      }
    }};
    color: ${props => {
      return props.isActive ? 'white' : 'black';
    }};
  }
`;
