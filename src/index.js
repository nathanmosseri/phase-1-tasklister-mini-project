//add option for priority in form
const createDropdown = function() {
  //get my form
  const form = document.getElementById('create-task-form')
  //create appropriate nodes
  //populate nodes with data
  //append nodes
  let selectNode = document.createElement('select')
  selectNode.name = 'priority'
  let priorityAssociations = {
    high: 'red',
    medium: 'yellow',
    low: 'green'
  }
  Object.keys(priorityAssociations).forEach((keyWord) => {
    let option = document.createElement('option')
    option.innerText = keyWord
    option.value = priorityAssociations[keyWord]
    selectNode.append(option)
  })
  form.append(selectNode)
}

const addNewTask = function(e) {
  const form = document.getElementById('create-task-form')
  //let newTaskName = 'new-task-description'
  //get form values
  let val = e.target['new-task-description'].value //task description
  let priority = e.target.priority.value //color of priority

  //only add new task if string is not empty
  if(val !== '') {
    //put things in the DOM
    //1. createElement
    //2. put something in the element we create
    //3. append the element to something that already exists
        //1. get the element that already exists
        //2. append new node to said element

    let taskList = document.querySelector('#tasks')
    let newTaskNode = document.createElement('li')
    newTaskNode.textContent = val
    newTaskNode.style.background = priority
    taskList.appendChild(newTaskNode)

    //create deletionbutton
    let deleteNode = document.createElement('button')
    deleteNode.textContent = 'delete'
    newTaskNode.append(deleteNode)
    
    deleteNode.addEventListener('click', function(e) {
      //actual removing of list item
      //tasklist.removeChild(newTaskNode)
      newTaskNode.remove()
    })
    form.reset() //clears description input
  }
}

document.addEventListener('DOMContentLoaded', () => {
  //1. grab the form and assign to const
  const form = document.getElementById('create-task-form')
  createDropdown()
  //addEventListeners - take 1. the event 2. a callback function to run when event is triggered
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    addNewTask(e)
  })
})
