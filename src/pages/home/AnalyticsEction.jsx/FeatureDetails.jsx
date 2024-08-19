import CustomHeading from "@/components/CustomHeading"
import Description from "@/components/Description"

const details = [
    {
        title: "Beautiful Design",
        description : "Say goodbye to unnecessary complexities and embrace the simplicity of Spectra."
    },
    {
        title: "Beautiful Design",
        description : "Say goodbye to unnecessary complexities and embrace the simplicity of Spectra."
    },
    {
        title: "Beautiful Design",
        description : "Say goodbye to unnecessary complexities and embrace the simplicity of Spectra."
    },

]

const FeatureDetails = ({setValue}) => {
  return (
    <div className="featureDetails grid grid-cols-1 2md:grid-cols-3 gap-8 ">
      {details.map((detail, index) => (
        <div
          className="flex flex-col gap-2 cursor-pointer "
          key={index}
          onClick={() => setValue(index)}
        >
          <CustomHeading Tag="h5">{detail.title}</CustomHeading>
          <Description>{detail.description}</Description>
        </div>
      ))}
    </div>
  );
}

export default FeatureDetails