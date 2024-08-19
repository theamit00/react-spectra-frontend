import Icon from "@/components/Icon";
import Button from "@/components/Button";

const Tabs = ({tabs, value, setValue, className , tabClassName}) => {


  return (
    <div className={`tabs-container flex p-1 rounded-full ${className} `}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          className={`border-none shadow-none transition-all duration-200 px-[32px] py-[8px] flex gap-[6px] text-[#434447]  ${
            value === tab.value ? "activeTab" : "hover:bg-[unset]"
          } ${tabClassName} `}
          onClick={() => setValue(tab.value)}
        >
          <Icon className="w-6 h-6">
            <tab.icon className="w-5 h-5" />
          </Icon>
          <span className="sm-p">{tab.text}</span>
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
