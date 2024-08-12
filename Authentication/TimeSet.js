import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const TimeSet = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };

  const handleStartTimeChange = (event, selectedTime) => {
    hideStartTimePicker();
    if (selectedTime) {
      setStartTime(moment(selectedTime).format("hh:mm A"));
    }
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };

  const handleEndTimeChange = (event, selectedTime) => {
    hideEndTimePicker();
    if (selectedTime) {
      setEndTime(moment(selectedTime).format("hh:mm A"));
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Start Time:</Text>
        <TouchableOpacity onPress={showStartTimePicker}>
          <TextInput
            style={styles.input}
            placeholder="Set Start Time"
            value={startTime}
            editable={false}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.label}>End Time:</Text>
        <TouchableOpacity onPress={showEndTimePicker}>
          <TextInput
            style={styles.input}
            placeholder="Set End Time"
            value={endTime}
            editable={false}
          />
        </TouchableOpacity>
      </View>

      {isStartTimePickerVisible && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          display="default"
          onChange={handleStartTimeChange}
        />
      )}

      {isEndTimePickerVisible && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          display="default"
          onChange={handleEndTimeChange}
        />
      )}
    </View>
  );
};

export default TimeSet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,

    borderRadius: 5,
    backgroundColor: "whitesmoke",
    width: 150,
    marginHorizontal: 5,
    padding: 10,
  },
});
