import classNames from "classnames";
import { logo } from "../assets/photos";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
    return (
        <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
                <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
                    <div className="flex-1 flex flex-col justify-start mr-10">
                        <img src={logo} className="w-[266px] h-[72.14px] object-containt"/>
                        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
                        A new way to make the payments easy, reliable and secure.
                        </p>
                    </div>

                    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                        {footerLinks.map(footerlink => (
                            <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                    {footerlink.title}
                                </h4>
                                <ul className="list-none mt-4">
                                {footerlink.links.map((link, index) => (
                                        <li
                                        key={link.name}
                                        className={classNames("font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4", {
                                            "mb-4": index !== footerlink.links.length - 1,
                                            "mb-0": index == footerlink.links.length - 1,
                                        })}>
                                            {link.name}
                                        </li>
                                ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

               

                <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
                    </p>

                    <div className="flex md:mt-0 mt-6">
                        {
                            socialMedia.map((social, index) => (
                                <img
                                key={social.id}
                                src={social.icon}
                                onClick={() => window.open(social.link)}
                                className={classNames("w-[21px] h-[21px] object-contain cursor-pointer", {
                                    "mr-6": index !==socialMedia.length - 1, 
                                    "mr-0": index ==socialMedia.length - 1 
                                })}
                                />
                            ))
                        }
                    </div>
                </div>
        </section>
    )
}