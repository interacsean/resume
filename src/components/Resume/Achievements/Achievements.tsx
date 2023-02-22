import {
  AchTitle,
  ItemCtnr,
  Place,
  AchievementDateCtnr,
  Date
} from "./Achievements.styles";

type Props = {
  achievements: {
    title: string;
    date: string;
    place: string;
  }[];
};

function Achievements(props: Props) {
  return (
    <>
      {props.achievements.map((achievement) => (
        <ItemCtnr>
          <AchievementDateCtnr>
            <AchTitle>{achievement.title}</AchTitle>
            <Date>{achievement.date}</Date>
          </AchievementDateCtnr>
          <Place>{achievement.place}</Place>
        </ItemCtnr>
      ))}
    </>
  );
}

export default Achievements;
