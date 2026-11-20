import dayjs from "dayjs"; 

const JobCard = ({title , company , location , type, experience, postedOn , skills , job_links }) => {
  // const skills = ["Javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const differInDays = date1.diff(postedOn , "day");

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">{title} - {company}</h1>
          <p>{type} &#x2022; {experience} &#x2022; {location}</p>
          <div className="flex items-center gap-2">
            {skills.map((skill, index) => {
              return <span className="text-gray-500 py-1 px-2 rounded-md border border-black" key={index}>{skill} </span>;
            })}
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <p className="text-gray-500"> Posted {differInDays > 1 ? `${differInDays} days` : `${differInDays} day` } ago </p>
          <a href={job_links} target="_blank" rel="noopener noreferrer">
          <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">Apply</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
