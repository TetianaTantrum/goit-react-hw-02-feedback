import styled from 'styled-components';

export const Options = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
`;

export const OptionsList = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  margin-bottom: 15px;
`;
export const Gradient = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 20px;
`;
export const TotalItem = styled.li`
  text-decoration: underline;
`;
