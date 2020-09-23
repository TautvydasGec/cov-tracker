import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetcedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setFetcedCountries(await fetchCountries())
    }

    fetchAPI()
  }, [setFetcedCountries])

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }}>
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i + country} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
