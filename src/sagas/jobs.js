import { put, takeLatest } from 'redux-saga/effects';
import { initializeApollo } from '../apolloClient';
import { GET_JOBS } from '../queries/index';

function* fetchJobs(data) {
  const client = initializeApollo()
  const json = yield client.query({
    query: GET_JOBS,
    variables: {},
  })
  if(json.networkStatus == 7)
    yield put({ type: "ALL_JOBS", payload: json.data.jobs, });
  else
    yield put({ type: "ALL_JOBS", payload: [], });

}

function* actionWatcher() {
     yield takeLatest('GET_JOBS', fetchJobs)
}

export const jobsSaga = [
  actionWatcher()
]
