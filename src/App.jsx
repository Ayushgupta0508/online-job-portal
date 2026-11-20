import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job Card";
import "./App.css";
import { collection, where, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);

  function handleClearFilter(value){
    setClearFilter(value);
  }

  const fetchJobs = async () =>{
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job)=>{
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  useEffect(()=>{
    fetchJobs();
  },[])

  const fetchJobsCustom = async (jobCriteria) =>{
    setCustomSearch(true);
    const filters = [];

    Object.entries(jobCriteria).forEach(([key, value])=>{
      if(value){
        filters.push(where(key, "==", value));
      }
    });

    const q = query(
      collection(db, "jobs"),
      ...filters,
      orderBy("postedOn", "desc")
    );

    const req = await getDocs(q);

    const tempJobs = [];
    req.forEach((job)=>{
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
    });
    });
    setJobs(tempJobs);
  }

  return (
    <>
      <Navbar />
      <Header />
      <SearchBar
        clearFilter = {clearFilter}
        handleClearFilter = {handleClearFilter} 
        fetchJobsCustom= {fetchJobsCustom} 
        />

      {customSearch &&  
        <button
          onClick={()=>{fetchJobs(); 
          handleClearFilter(true); } } 
          className="flex pl-275 mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filter</p>
        </button>
      }
      {jobs.map((job) => {
        return <JobCard key={job.id} {...job} />;
      })}
    </>
  );
}

export default App;
