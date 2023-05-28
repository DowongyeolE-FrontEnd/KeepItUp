import { flexCenter } from "@/styles/flexCenter";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
const MyPage = () => {
  const initialDate = new Date(2023, 4, 28);
  const initialDate2 = new Date(2023, 4, 28);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => {
      console.log("unmount");
    };
  }, []);
  useEffect(() => {
    if (didMount) {
      setStartDate(new Date(initialDate.setDate(initialDate.getDate())));
      setEndDate(new Date(initialDate2.setDate(initialDate.getDate() + 6)));
    }
  }, [didMount]);

  const prevWeek = () => {
    console.log("start", startDate.toDateString());
    console.log("end", endDate.toDateString());
    setStartDate((prev) => new Date(prev.setDate(prev.getDate() - 7)));
    setEndDate((prev) => new Date(prev.setDate(prev.getDate() - 7)));
  };

  const nextWeek = () => {
    console.log("start", startDate.toDateString());
    console.log("end", endDate.toDateString());
    setStartDate((prev) => new Date(prev.setDate(prev.getDate() + 7)));
    setEndDate((prev) => new Date(prev.setDate(prev.getDate() + 7)));
  };
  return (
    <Container>
      <WeekSelectBox>
        <ArrowLeft onClick={prevWeek}>⬅</ArrowLeft>
        <Title>
          {startDate.toDateString()} ~ {endDate.toDateString()}
        </Title>
        <ArrowRight onClick={nextWeek}>➡</ArrowRight>
      </WeekSelectBox>
      <WeekContainer>
        <DayBox>
          <Title>Mon</Title>
          <SubTitle>총 10시간 공부</SubTitle>
          <InnerBox>
            <RecordBox>111</RecordBox>
          </InnerBox>
        </DayBox>
        <DayBox>
          <Title>Tue</Title>
          <LogoIcon src="./public/logo.png" />
          <SubTitle>공부 시간이 없네요?</SubTitle>
        </DayBox>
        <DayBox>
          <Title>Wed</Title>
        </DayBox>
        <DayBox>
          <Title>Thur</Title>
        </DayBox>
        <DayBox>
          <Title>Fri</Title>
        </DayBox>
        <DayBox>
          <Title>Sun</Title>
        </DayBox>
        <DayBox>
          <Title>Mon</Title>
        </DayBox>
      </WeekContainer>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
  border: 1px black solid;
  width: 1600px;
  height: 900px;
  display: flex;
`;

const WeekContainer = styled.div`
  ${flexCenter}
  flex-direction: row;
  text-align: center;
  height: 90%;
  width: 95%;
  justify-content: center;
  border: 1px black solid;
`;

const DayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  height: 90%;
  padding: 1rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor["grey-4"]};
`;

const Title = styled.p`
  font-size: 1.5rem;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 0.5rem;
`;

const WeekSelectBox = styled.div`
  ${flexCenter}
  width: 90%;
  height: 3rem;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const ArrowRight = styled.span`
  margin-left: auto;
  font-size: 1.5rem;
`;
const ArrowLeft = styled.span`
  margin-right: auto;
  font-size: 1.5rem;
`;

const RecordBox = styled.div`
  width: 90%;
  height: 10%;
  border-radius: 5%;
  ${flexCenter}
  background-color: ${({ theme }) => theme.backgroundColor["grey-1"]};
`;

const InnerBox = styled.div`
  /* ${flexCenter} */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LogoIcon = styled.img`
  width: 6rem;
  height: 6rem;
`;
