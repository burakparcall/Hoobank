import { features } from "../constants";

export default function FeatureCard() {
    return (
        <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
            {features.map(feature => (
                <div key={feature.id} className="flex p-6 rounded-[20px] mb-6 feature-card"> 
                    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                        <img src={feature.icon}  className="w-[50%] h-[50%] object-contain"/>
                    </div>
                    
                    <div className="flex-1 flex flex-col ml-3">
                        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">{feature.title}</h4>
                        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                        {feature.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

