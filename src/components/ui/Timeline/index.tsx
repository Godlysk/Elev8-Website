import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
  showDate: boolean;
}

const Timeline: React.FC<Props> = ({ title, subtitle, content, startDate, endDate, showDate }) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Details>
      {showDate &&
        <Styled.Date>
          {startDate} - {endDate}
        </Styled.Date>
      }
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Details>
    <Styled.Content>{content}</Styled.Content>
  </Styled.Timeline>
);

export default Timeline;
