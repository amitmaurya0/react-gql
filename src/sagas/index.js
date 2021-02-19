import { all } from 'redux-saga/effects';
import { jobsSaga } from './jobs';

export default function* rootSaga() {
  yield all([
  ...jobsSaga,
  ]);
}