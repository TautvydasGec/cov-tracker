import React from 'react'

import { Grid } from '@material-ui/core'

import CaseCard from './CaseCard'

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <CaseCard
          name={'infected'}
          lastUpdate={lastUpdate}
          confirmed={confirmed}
          label={'Number of active cases of COVID-19'}
        />
        <CaseCard
          name={'recovered'}
          lastUpdate={lastUpdate}
          confirmed={recovered}
          label={'Number of recoveries from COVID-19'}
        />
        <CaseCard
          name={'deaths'}
          lastUpdate={lastUpdate}
          confirmed={deaths}
          label={'Number of deaths caused by COVID-19'}
        />
      </Grid>
    </div>
  )
}

export default Cards
