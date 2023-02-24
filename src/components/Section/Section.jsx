import PropTypes from 'prop-types';
import { SectionS, Title } from '../Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionS>
      <Title>{title}</Title>
      {children}
    </SectionS>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
