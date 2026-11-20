import {useState, useEffect} from 'react';


const SearchBar = (props) => {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    type: "",
    experience: ""
  });

  console.log(props)

  useEffect(()=>{
    if(props.clearFilter){
      setJobCriteria({
        title: "",
        location: "",
        type: "",
        experience: "",
      });
      props.handleClearFilter(false);
    }
  },[props.clearFilter])

  const handleChange = (e) => {
    const {name , value} = e.target;
    setJobCriteria((prev)=>({
      ...prev,
      [name]: value
    })) 
  }

  const search = async () =>{
    await props.fetchJobsCustom(jobCriteria);
  }

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>

      <select onChange={handleChange} name="title" value={jobCriteria.title}  className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden>Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
      </select>

      <select onChange={handleChange} name="type" value={jobCriteria.type}  className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      <select onChange={handleChange} name="location" value={jobCriteria.location}  className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-office">In-office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select onChange={handleChange} name="experience" value={jobCriteria.experience}  className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>

      <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>
        Search
      </button>

    </div>
  )
}

export default SearchBar
