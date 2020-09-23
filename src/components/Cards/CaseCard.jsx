import React from 'react'

import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './CaseCard.module.css'

const CaseCard = ({ name, label, lastUpdate, confirmed }) => {
  return (
    <Grid
      item component={Card}
      className={cx(styles.card, styles[name])}
      xs={12}
      md={3}
    >
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        <Typography variant='h5'>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={1}
            separator=","
          />
        </Typography>
        <Typography color='textSecondary'>
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant='body2'>
          {label}
        </Typography>
      </CardContent>
    </Grid>
  )
}

export default CaseCard
