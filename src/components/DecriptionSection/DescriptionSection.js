import MainTitle from '../Common/MainTitle/MainTitle';
import Paragraph from '../Common/Paragraph/Paragraph';

import './DescriptionSection.scss';

import descriptionData from './dummyData';

function DescriptionSection() {
  return (
    <div>
      {descriptionData.map((data) => (
        <div key={data.id}>
          <MainTitle titleText={data.titleText} className="mainTitle_text pb-4" />
          <Paragraph className="paragraph_text text-secondary"
            text={data.descriptionText} />
        </div>
      ))}
    </div>
  );
}

export default DescriptionSection;
