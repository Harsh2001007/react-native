import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setEditIndex(-1);
      } else {
        // add new task
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };
  const handleEditTask = index => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };
  const handleDeleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({item, index}) => (
    <View
      style={{
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: hp(1),
        width: wp(90),
        marginTop: hp(1),
      }}>
      <Text style={{marginTop: hp(0.5), marginLeft: wp(2), color: 'white'}}>
        {item}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: wp(85),
          justifyContent: 'flex-end',
          paddingBottom: hp(1),
          marginTop: hp(1),
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'black',
            paddingVertical: hp(0.4),
            paddingHorizontal: wp(5),
            borderRadius: hp(4),
            backgroundColor: 'orange',
            marginHorizontal: wp(1),
          }}
          onPress={() => handleEditTask(index)}>
          <Text style={{color: 'black', fontWeight: '600'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'black',
            paddingVertical: hp(0.4),
            paddingHorizontal: wp(5),
            borderRadius: hp(4),
            backgroundColor: 'crimson',
          }}
          onPress={() => handleDeleteTask(index)}>
          <Text style={{color: 'black', fontWeight: '600'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={{
        height: hp(100),
        width: wp(100),
        backgroundColor: '#0C2D57',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: hp(5), marginTop: hp(3)}}>
        ToDo App 1
      </Text>
      <Text style={{color: 'white', fontSize: hp(2)}}>
        by -- Harsh Sachan --
      </Text>
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 2,
          width: wp(90),
          height: hp(5),
          marginTop: hp(3),
          backgroundColor: 'white',
          borderRadius: wp(2),
          color: 'black',
          paddingLeft: wp(2),
        }}
        placeholder="Enter your task"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity
        onPress={handleAddTask}
        style={{
          borderWidth: 2,
          borderColor: 'black',
          marginTop: hp(1),
          borderRadius: hp(4),
          backgroundColor: '#0D9276',
          elevation: 20,
          shadowColor: '#52006A',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: hp(2),
            paddingVertical: hp(1),
            paddingHorizontal: wp(3),
          }}>
          {editIndex !== -1 ? 'Update Task' : 'Add Task'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
