import React, { useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

export function DatePickerExample2 () {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        mode='date'
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}
