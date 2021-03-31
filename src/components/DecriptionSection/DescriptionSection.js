import 'bootstrap/dist/css/bootstrap.min.css';
import './DescriptionSection.scss';
import MainTitle from '../Common/MainTitle/MainTitle';
import Paragraph from '../Common/Paragraph/Paragraph';

function DescriptionSection() {
  return (
    <div>
      <MainTitle titleText="Related Articles" className="mainTitle_text pb-4" />
      <Paragraph className="paragraph_text text-secondary"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    </div>
  );
}

export default DescriptionSection;
