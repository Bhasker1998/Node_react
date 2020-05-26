import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'El', label: 'EL' },
  { value: 'SL', label: 'SL' },
  { value: 'LWP', label: 'LWP' }
]

const MyComponent = () => (
  <Select options={options} placeholder="type" />
)

export default MyComponent