import react, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_jobs } from '../../actions/jobs';
import JobListCard from './JobListCard';
import EmptyCard from './EmptyCard';


function JobsList({ get_jobs, jobs }) {

  useEffect(() => {
    get_jobs();
  }, [])
  if(jobs.loading)
    return <p>Loading jobs...</p>
  else if(jobs.jobs.length == 0)
    return <EmptyCard title="No Jobs available" />
  else
  return (
    <>
    {
      jobs.jobs.map(item=><JobListCard key={item.id} job={item} />)
    }
    </>
  );
}

const dispatchStateToProps = {
  get_jobs
}

const mapStateToProps = ({ jobs }) => ({
  jobs: jobs
})

export default connect(mapStateToProps, dispatchStateToProps)(JobsList);
