"use client"
import React, { useState } from 'react'
import "../app/globals.css"
const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPopular, setIsPopular] = useState(true);
    const [examType, setExamType] = useState("");
    const [classType, setClassType] = useState("");
    const [questionType, setQuestionType] = useState("");
    const [subject, setSubject] = useState("");
    const [YearofquestionType, setYearofquestionType] = useState("");
    const Experience = ["0-1 year", "1-3 year", "3-5 year", "5+ year"];
    const Language = ["Hindi", "Punjabi","English-Hindi", "English", "Hindi-Urdu","Urdu", "Bengali", "Marathi", "Telugu", "Tamil", "Gujarati", "Malayalam", "Kannada", "Odia", "Assamese", "Maithili", "Santali", "Kashmiri", "Nepali", "Sindhi", "Dogri", "Manipuri", "Bodo", "Santhali",];
    const Budget = ["500-1500/day", "8,000-15,000/month", "15,000-25,000/month", "25,000-50,000/month", "50,000+ month"];

    const subjectOptions = {
        CBSE: ["Physics", "Chemistry", "Mathematics", "Biology", "History", "Geography", "Science", "Math"],
        JEE: ["Physics", "Chemistry", "Mathematics"],
        NEET: ["Physics", "Chemistry", "Biology"],
        UPSC: ["Economics", "Literature", "Computer Science", "Engineering"],
    };

    const appliedFilterCount = [
        examType,
        classType,
        subject,
        questionType,
        YearofquestionType,
    ].filter((value) => value !== "").length;
    const generateHeading = () => {
        const parts = [
            examType || "Exam Type", // Default value if filter is not applied
            classType ? `Class ${classType}` : "",
            subject || "",
            isPopular ? "Repeated" : "New",
            questionType || "",
            ` Question- ${YearofquestionType || "All"}`
        ];

        return parts.filter(Boolean).join(" "); // Remove empty parts and join them
    };

    return (

        <div className='pl-2 pr-2'>
            <div className="flex mb-5 md:mb-10 w-full justify-between">
                <button onClick={(() => setIsOpen(!isOpen))} className=' cursor-pointer relative border text-sm md:text-base h-10 pt-2 pb-2 pl-5 pr-5 rounded bg-gray-100 text-black'>
                    Filters
                    {appliedFilterCount != 0 &&

                        <div className="absolute right-0 top-0 md:text-sm rounded-full h-5 w-5 text-white  bg-black ">{appliedFilterCount}</div>
                    }
                </button>
            </div>

            <div className='block md:hidden'>

                <div className={`fixed bottom-0 left-0 w-full h-0 bg-gray-100 shadow overflow-hidden z-10 block md:hidden   rounded-tl-[40px] transition-all duration-300 rounded-tr-[40px]     ${isOpen ? "h-[70%]" : "hidden"}`}>
                    <div className="offcanvas-content flex flex-col items-center justify-center pt-2 pb-2 ">
                        <div className="flex itmes-center justify-center pt-0 pb-2">

                            <div onClick={(() => { setIsOpen(!isOpen) })} className=" cursor-pointer border pt-2 pl-5 pr-5 pb-2  border-gray-500 bg-white rounded-full   ">
                                <p>Close</p>
                            </div>
                        </div>
                        <div className="pt-4 pl-2 pr-2 md:p-5  filterslidebar overflow-auto scroll-smooth">
                            <div className="flex flex-col  gap-8 ">
                                <div className="flex items-center justify-between  w-full">
                                    <label htmlFor="examType" className="text-lg font-medium text-gray-600 ">
                                        Experience
                                    </label>
                                    <select
                                        id="examType"
                                        value={examType}
                                        onChange={((e) => {
                                            setExamType(e.target.value)
                                            setSubject("")
                                            if (examType != "CBSE") {
                                                setClassType("")
                                            }
                                        })}
                                        className="block cursor-pointer w-[60%] px-4 py-2 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black "
                                    >
                                        <option value="" disabled>
                                            Select Experience Level
                                        </option>
                                        {Experience.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex items-center justify-between  w-full">
                                    <label htmlFor="questiontype" className="text-lg font-medium text-gray-600 ">
                                        Language Spoken
                                    </label>
                                    <select
                                        id="questiontype"
                                        value={questionType}
                                        onChange={((e) => {
                                            setQuestionType(e.target.value)
                                        })}
                                        className="block cursor-pointer w-[60%] px-4 py-2 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black "
                                    >
                                        <option value="" disabled>
                                            Select Language Spoken
                                        </option>
                                        {Language.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex items-center justify-between  w-full">
                                    <label htmlFor="yearofquestiontype" className="text-lg font-medium text-gray-600 ">
                                        Budget
                                    </label>
                                    <select
                                        id="yearofquestiontype"
                                        value={YearofquestionType}
                                        onChange={((e) => {
                                            setYearofquestionType(e.target.value)
                                        })}
                                        className="block cursor-pointer w-[60%] px-4 py-2 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black "
                                    >
                                        <option value="" disabled>
                                            Select Budget
                                        </option>
                                        {Budget.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex items-center justify-between  w-full">
                                    <label htmlFor="PopularorNew" className="text-lg font-medium text-gray-600 ">
                                        Gender
                                    </label>
                                    <div className="flex flex-col items-center ">
                                        <div className="flex items-center bg-white  rounded-full w-48 p-1">
                                            <button
                                                onClick={() => setIsPopular(true)}
                                                className={`${isPopular ? " bg-[#f4f4f4f4] " : "text-gray-500"
                                                    } flex-1 py-2 rounded-full text-center font-medium transition`}
                                            >
                                                Male
                                            </button>
                                            <button
                                                onClick={() => setIsPopular(false)}
                                                className={`${!isPopular ? "bg-[#f4f4f4f4] " : "text-gray-500"
                                                    } flex-1 py-2 rounded-full text-center font-medium transition`}
                                            >
                                                Female
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="absolute  pt-5  pb-5 bg-gray-100 items-center w-full bottom-0 flex flex-col gap-2 left-0">
                <div className="w-[90%] ">
                    <button onClick={(() => {
                        setIsOpen(false)

                    })} className=' w-full pl-5 pr-5 pt-3 pb-3 bg-black text-gray-300  font-bold hover:bg-gray-900 rounded-xl '>Apply</button>
                </div>
                <div className="w-[90%] ">
                    <button onClick={(() => {
                        setIsOpen(false)
                        setClassType("")
                        setExamType("")
                        setIsPopular(true)
                        setSubject("")
                        setQuestionType("")
                        setYearofquestionType("")
                    })} className=' w-full pl-5 pr-5 pt-3 pb-3 font-bold  text-gray-500 '>Reset</button>
                </div>
            </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className={`fixed  top-0 right-0 w-[30%] h-0  bg-gray-100 overflow-hidden z-10   rounded-tl-[40px] rounded-tr-[40px] md:rounded  ${isOpen ? "h-full" : "hidden"}`}>
                <div className="offcanvas-content flex flex-col items-end p-2">
                        <div className=" p-3 items-center w-full flex justify-between">
                            <p className='text-3xl font-medium'>Filter</p>
                            <div onClick={(() => { setIsOpen(!isOpen) })} className=" cursor-pointer border pt-2 pl-5 pr-5 pb-2  border-gray-500 bg-white rounded-full   ">
                                <p>Close</p>
                            </div>
                        </div>
                        <div className=" p-5 h-screen  w-full filterslidebar overflow-auto scroll-smooth">
                            <div className="flex flex-col gap-8 ">
                                <div className="flex items-center justify-between  w-full">
                                    <label htmlFor="examType" className="text-lg font-medium text-gray-600  ">
                                    Experience
                                    </label>
                                    <select
                                        id="examType"
                                        value={examType}
                                        onChange={((e) => {
                                            setExamType(e.target.value)
                                            setSubject("")
                                            if (examType != "CBSE") {
                                                setClassType("")
                                            }
                                        })}
                                        className="block cursor-pointer w-[60%] px-4 py-2 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black "
                                    >
                                        <option value="" disabled>
                                            Select Experience 
                                        </option>
                                        {Experience.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="flex items-center justify-between  w-full">
                                    <label htmlFor="subject" className="text-lg font-medium text-gray-600  ">
                                    Language
                                    </label>
                                    <select
                                        id="subject"
                                        value={subject}
                                        onChange={((e) => {
                                            setSubject(e.target.value)
                                        })}
                                        className="block cursor-pointer w-[60%] px-4 py-2 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                                        disabled={!examType} // Disable if no exam type is selected
                                    >
                                        <option value="" disabled>
                                           Select Language
                                        </option>
                                        {examType &&
                                            subjectOptions[examType]?.map((sub, index) => (
                                                <option key={index} value={sub}>
                                                    {sub}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div className="flex items-center justify-between  w-full">
                                    <label htmlFor="questiontype" className="text-lg font-medium text-gray-600  ">
                                    Budget
                                    </label>
                                    <select
                                        id="questiontype"
                                        value={questionType}
                                        onChange={((e) => {
                                            setQuestionType(e.target.value)
                                        })}
                                        className="block cursor-pointer w-[60%] px-4 py-2 text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black "
                                    >
                                        <option value="" disabled>
                                            Select Budget
                                        </option>
                                        {Language.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="flex items-center justify-between  w-full">
                                    <label htmlFor="PopularorNew" className="text-lg font-medium text-gray-600  ">
                                      Gender
                                    </label>
                                    <div className="flex flex-col items-center ">
                                        <div className="flex items-center bg-white  rounded-full w-48 p-1">
                                            <button
                                                onClick={() => setIsPopular(true)}
                                                className={`${isPopular ? " bg-[#f4f4f4f4]  " : "text-gray-500"
                                                    } flex-1 py-2 rounded-full text-center font-medium transition`}
                                            >
                                                Male
                                            </button>
                                            <button
                                                onClick={() => setIsPopular(false)}
                                                className={`${!isPopular ? " bg-[#f4f4f4f4]  " : "text-gray-500"
                                                    } flex-1 py-2 rounded-full text-center font-medium transition`}
                                            >
                                                Female
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="absolute z-100  pt-5  pb-5  bg-gray-100 items-center w-full bottom-0 flex flex-col gap-2 left-0">
                        <div className="w-[90%] ">
                            <button onClick={(() => { 
                                setIsOpen(false)

                                })} className=' w-full pl-5 pr-5 pt-3 pb-3 bg-black text-gray-300 font-bold hover:bg-gray-900 rounded-xl '>Apply</button>
                        </div>
                        <div className="w-[90%] ">
                            <button onClick={(() => {
                                setIsOpen(false)
                                setClassType("")
                                setExamType("")
                                setIsPopular(true)
                                setSubject("")
                                setQuestionType("")
                                setYearofquestionType("")
                            })} className=' w-full pl-5 pr-5 pt-3 pb-3 font-bold  text-gray-500 '>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
