import { gql } from '@apollo/client';
export const GET_JOBS = gql`query jobs($input: JobsInput) {
  jobs(input: $input) {
    id
    title
    company {
      name
    }
    cities {
      name
    }
    countries {
      name
    }
    remotes {
      name
    }
  }
}`;