import ExperienceItem from "../components/ExperienceItem";
import Heading from "../components/Heading";
import { educationExperience , workExperienceTemplate} from "../data/data";

const ExperiencePage = () => {
  return (
    <div className="text-selection">
      <ol className="timeline flex-col">
  {workExperienceTemplate.map((workEx) => (
    <ExperienceItem experience={workEx} onlyTimeline={false} key={workEx.key} />
  ))}
</ol>


      <div className="my-2">&nbsp;</div>

      <Heading heading={"Education"} />
      <ol className="timeline flex-col">
        {educationExperience.map((eduEx) => (
          <ExperienceItem experience={eduEx} onlyTimeline={false} key={eduEx.key} />
        ))}
      </ol>
    </div>
  );
};

export default ExperiencePage;
