import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Card } from "../../components/Card";
import { Counter } from "../../components/Counter"
import { styles } from "./styles"

interface TaskProps {
  description: string;
  checkbox: boolean;
}

export const Home = () => {
  const [tasks, setTasks ] = useState<TaskProps[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [countCreated, setCountCreated] = useState(0);
  const [countFinished, setCountFinished] = useState(0);

  function handleTaskAdd(){
    if (tasks.map(item => item.description).includes(taskDescription)) {
      return Alert.alert("Task existente", "Já existe uma task criada com essa descrição.")
    }

    setCountCreated(countCreated + 1);
    setTasks(prevState => [...prevState, {description: taskDescription, checkbox: false}])
  }

  
  function handleParticipantRemove(name: string){
    Alert.alert("Remover", `Remover tarefa ?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.description !== name));
          setCountCreated(countCreated - 1);
          if (countFinished === 0) {
            return;
          } else {
            setCountFinished(countFinished - 1);
          }
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    
    console.log(`Você clicou no botão de remover task`);
  }

  function handleConclusionTask(description: string, value: boolean){
    tasks
      .filter(task => task.description === description)
      .map(task => task.checkbox = value);

    if (!value && countFinished === 0) {
      return
    } else if(value) {
      setCountFinished(countFinished + 1);
    } else {
      setCountFinished(countFinished - 1);
    }
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <TextInput 
            style={styles.inputText}
            placeholder="Adicione uma nova tarefa" 
            placeholderTextColor='#808080'
            onChangeText={setTaskDescription}
            value={taskDescription} 
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <View style={styles.buttonBorderText}>
              <Text style={styles.buttonText}>
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.counterContainer}>
          <Counter title="Criadas" counter={countCreated} color="#4EA8DE"/>
          <Counter title="Concluídas" counter={countFinished} color="#8284FA"/>
        </View>

        <View style={styles.divider} />

        <FlatList 
          data={tasks} 
          keyExtractor={item => item.description} 
          renderItem={({item}) => ( 
            <Card 
              isSelected={item.checkbox} 
              description={item.description} 
              onChange={(newValue: boolean) => {handleConclusionTask(item.description, newValue)}}
              onDelete={() => handleParticipantRemove(item.description)} 
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Image style={{ marginBottom: 16 }} source={require('../../../assets/clipboard.png')} />
              <Text style={[styles.listEmptyText, styles.listEmptyBoldText]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  )
}