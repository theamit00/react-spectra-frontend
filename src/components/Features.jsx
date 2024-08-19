import Feature from "./Feature";
import { FaRegChartBar } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import RightIn from "./animations/RightIn";

const features = [
  {
    icon: FaRegChartBar,
    title: "Real-Time Data Insights",
    description:
      "Leave mediocrity behind and embark on a journey of exploration",
  },
  {
    icon: FaRegChartBar,
    title: "Customizable Alerts",
    description:
      "Say goodbye to unnecessary complexities and embrace the simplicity of Spectra.",
  },
  {
    icon: LuCalendarClock,
    title: "Automated Financial Report",
    description:
      "We  keep our promises, provide upfront timelines and bring predictability.",
  },
];

const Features = ({className, details=features ,featureClassNames , Animation = RightIn }) => {
  return (
    <div className={`featureDetails grid grid-cols-1 2md:grid-cols-3 ${className}`}>
      {details.map((detail, index) => (
        <Animation delay={1+(Number(index)/4)} key={index} >
          <Feature detail={detail} className={featureClassNames} />
        </Animation>
      ))}
    </div>
  );
};

export default Features;
