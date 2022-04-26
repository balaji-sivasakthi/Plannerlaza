import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { colors } from "../theme"
import { Agenda, Calendar } from "react-native-calendars"
import { useState } from "react"

const Calender = () => {
  const [events, setevents] = useState({})
  const timeToString = (time) => {
    const date = new Date(time)
    return date.toISOString().split("T")[0]
  }
  const loadItems = (day) => {
    const items = events || {}

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000
        const strTime = timeToString(time)

        if (!items[strTime]) {
          items[strTime] = []

          const numItems = Math.floor(Math.random() * 3 + 1)
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            })
          }
        }
      }

      const newItems = {}
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key]
      })
      setevents({
        items: newItems,
      })
    }, 1000)
  }
  return (
    <View style={styles.container}>
      <Agenda
        items={loadItems}
        loadItemsForMonth={loadItems} // Function
        renderItem={(item) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
})

export default Calender
