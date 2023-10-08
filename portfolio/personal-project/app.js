const button = document.querySelector('button')
const query = document.querySelector('.query')
const form = document.querySelector('form')
const addTask = document.getElementById('add')
const taskContainer = document.getElementById('taskContainer')
const cancel = document.getElementById('cancel')
const title = document.getElementById('title')
const desc = document.getElementById('description')
const warning = document.getElementById('warning')
const yesRadio = document.querySelector('#yes')
const noRadio = document.querySelector('#no')
let start = document.getElementById('startDate')
let due = document.getElementById('dueDate')


let records = []

if(localStorage.length>0){
  let result = JSON.parse(localStorage.records)

for(let x = 0;x<result.length;x++){
    const queryContainer = document.createElement('div')
    queryContainer.classList.add('table')
    taskContainer.appendChild(queryContainer)

    const queryTitle = document.createElement('input')
    queryTitle.value = result[x].title.toUpperCase()
    queryTitle.style.backgroundColor = '#4f72e3'
    queryTitle.style.width = '98%'
    queryTitle.style.marginTop = '0px'
    queryTitle.style.textAlign = 'center'
    queryTitle.style.borderTopLeftRadius = '20px'
    queryTitle.style.borderTopRightRadius = '20px'
    queryTitle.style.fontSize = '1.5em'
    queryTitle.disabled = true
    queryContainer.appendChild(queryTitle)
   
    
    const label_desc = document.createElement('h3')
    label_desc.textContent = 'Description'
    label_desc.style.marginLeft = '20px'
    label_desc.style.marginBottom = '5px'

    queryContainer.appendChild(label_desc)

    const queryDesc = document.createElement('textArea')
    //queryDesc.value = desc.value
    queryDesc.classList.add('textArea')
    queryDesc.disabled = true

    
      queryDesc.value = result[x].description
    
    
    queryContainer.appendChild(queryDesc)
    if (start.value != '' && due.value != '') {
      const divOne = document.createElement('div')
      divOne.setAttribute('class', 'date_start')
      queryContainer.appendChild(divOne)

      const startDateLabel = document.createElement('label')
      startDateLabel.textContent = 'Start Date: '
      divOne.appendChild(startDateLabel)

      const startDate = document.createElement('p')
      startDate.textContent = getDate(start.value)
      divOne.appendChild(startDate)

      const divTwo = document.createElement('div')
      divTwo.setAttribute('class', 'date_start')
      divTwo.classList.add('marginBottom')

      queryContainer.appendChild(divTwo)

      const dueDateLabel = document.createElement('label')
      dueDateLabel.textContent = 'Due Date: '
      divTwo.appendChild(dueDateLabel)

      const dueDate = document.createElement('p')
      dueDate.textContent = getDate(due.value)
      divTwo.appendChild(dueDate)

      function getDate(date) {
        const dateObj = new Date(date)
        const monthAbbrevations = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ]

        const year = dateObj.getFullYear()
        const month = monthAbbrevations[dateObj.getMonth()]
        const day = dateObj.getDate()

        const output = `${month}-${day}-${year}`

        return output
      }
    }
    records.push({title:queryTitle.value,description:queryDesc.value})// add this ,Start_Date:start.value,Due_Date:due.value
    localStorage.setItem('records',JSON.stringify(records))
    //container for 3 buttons
    const button_container = document.createElement('div')
    button_container.classList.add('button_container')
    queryContainer.appendChild(button_container)

    const done = document.createElement('button')
    done.textContent = '✔️Done'
    button_container.appendChild(done)
    //make edit button
    const edit = document.createElement('button')
    edit.textContent = '✏️Edit'
    button_container.appendChild(edit)

    //query.classList.toggle('invisible')
    button.disabled = false
    //make delete button
    const del = document.createElement('button')
    del.textContent = '🗑️delete'
    button_container.appendChild(del)

    done.onclick = blur
    edit.onclick = editInputs
    del.onclick = deleteContainer
    function deleteContainer() {
      result.splice(x,1)
      const updateLocalStorage = JSON.stringify(result)
      localStorage.setItem('records',updateLocalStorage)
      queryContainer.remove()
      
    }
    let saveTitle = []
    let isModified = false
    function editInputs() {
      let currentTitle = queryTitle.value
      let currentDesc = queryDesc.value

      done.classList.add('invisible')
      edit.classList.add('invisible')
      del.classList.add('invisible')

      queryTitle.disabled = false
      queryDesc.disabled = false
      //add save button
      const save = document.createElement('button')
      save.textContent = '💾Save'
      queryContainer.appendChild(save)
      //add cancel button for edit window
      const cancel_edit = document.createElement('button')
      cancel_edit.textContent = '❌Cancel'
      queryContainer.appendChild(cancel_edit)

      save.onclick = saveData

      cancel_edit.onclick = returnPrevValues
      function returnPrevValues() {
        queryTitle.value = currentTitle
        queryDesc.value = currentDesc
        queryTitle.disabled = true
        queryDesc.disabled = true
        done.classList.toggle('invisible')
        edit.classList.toggle('invisible')
        del.classList.toggle('invisible')
        save.remove()
        cancel_edit.remove()
      }

      function saveData() {
        isModified = true
        saveTitle.push(queryTitle.value)
        queryTitle.disabled = true
        queryDesc.disabled = true
        done.classList.toggle('invisible')
        edit.classList.toggle('invisible')
        del.classList.toggle('invisible')
        save.remove()
        cancel_edit.remove()
      }
    }
    function blur() {
      queryTitle.classList.toggle('opacity')
      queryDesc.classList.toggle('opacity')
      label_desc.classList.toggle('opacity')
      done.classList.toggle('invisible')
      edit.classList.toggle('invisible')
      del.classList.toggle('invisible')

      let message = document.createElement('h1')
      if (isModified) {
        message.textContent = saveTitle + '✔️'
      } else {
        message.textContent = title.value + '✔️'
      }
      queryContainer.style.background = 'green'
      message.classList.add('message')
      done.disabled = true
      queryContainer.appendChild(message)

      if (queryContainer.style.background == 'green') {
        const cancel = document.createElement('button')
        cancel.textContent = 'Cancel'

        queryContainer.appendChild(cancel)

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'

        queryContainer.appendChild(deleteButton)
        cancel.onclick = removeBlur
        deleteButton.onclick = removeElement

        function removeBlur() {
          queryTitle.classList.toggle('opacity')
          queryDesc.classList.toggle('opacity')
          label_desc.classList.toggle('opacity')
          done.classList.toggle('invisible')
          edit.classList.toggle('invisible')
          message.classList.add('invisible')
          queryContainer.style.background = 'white'
          cancel.classList.add('invisible')
          deleteButton.classList.add('invisible')
          del.classList.toggle('invisible')
          done.disabled = false
        }

        function removeElement() {
          queryContainer.remove()
        }
      }
    }
  }
}
/// need to refactor the first lines haha
button.onclick = displayQuery
cancel.onclick = cancelQuery
addTask.onclick = addQuery

function cancelQuery() {
  query.classList.toggle('invisible')
  button.disabled = false
}
function print() {
  console.log('adsf')
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
})

function displayQuery() {
  start.value = ''
  due.value = ''
  warning.textContent = ''
  const date = document.querySelectorAll('.date')
  let isYesClicked = false
  let isNoClicked = false

  yesRadio.onclick = displayDates
  noRadio.onclick = removeDates

  displayDates()
  function displayDates() {
    if (
      yesRadio.checked &&
      !isYesClicked &&
      start.getAttribute('class').includes('invisible')
    ) {
      isYesClicked = true
      isNoClicked = false
      for (let dates of date) {
        dates.classList.toggle('invisible')
      }
    } else {
      return
    }
  }
  function removeDates() {
    if (
      noRadio.checked &&
      !isNoClicked &&
      !start.getAttribute('class').includes('invisible')
    ) {
      isNoClicked = true
      isYesClicked = false
      for (let dates of date) {
        dates.classList.toggle('invisible')
      }
    } else {
      return
    }
  }

  title.value = ''
  desc.value = ''
  query.classList.toggle('invisible')
  button.disabled = true
}

function addQuery() {
  //if set duration is yes
  //create element dates under fieldset
  //should have start date and end date
  //or a timer

  function checkIfDateIsValid() {
    const startDate = new Date(start.value)
    const dueDate = new Date(due.value)
    if (startDate > dueDate) {
      return false
    } else {
      return true
    }
  }

  if (title.value.trim() == '') {
    warning.textContent = 'Enter title'
  } else if (!checkIfDateIsValid()) {
    warning.textContent = 'Invalid date'
  }
  //!start.getAttribute('class').includes('invisible') is used if ever user click no it should escape the condition
  else if (
    start.value == '' &&
    due.value == '' &&
    !start.getAttribute('class').includes('invisible')
  ) {
    warning.textContent = 'Enter duration'
  } else {
    
    const taskContainer = document.querySelector('.task_container')
    const queryContainer = document.createElement('div')
    queryContainer.classList.add('table')
    taskContainer.appendChild(queryContainer)

    const queryTitle = document.createElement('input')
    queryTitle.value = title.value.toUpperCase()
    queryTitle.style.backgroundColor = '#4f72e3'
    queryTitle.style.width = '98%'
    queryTitle.style.marginTop = '0px'
    queryTitle.style.textAlign = 'center'
    queryTitle.style.borderTopLeftRadius = '20px'
    queryTitle.style.borderTopRightRadius = '20px'
    queryTitle.style.fontSize = '1.5em'
    queryTitle.disabled = true
    queryContainer.appendChild(queryTitle)
   
    
    const label_desc = document.createElement('h3')
    label_desc.textContent = 'Description'
    label_desc.style.marginLeft = '20px'
    label_desc.style.marginBottom = '5px'

    queryContainer.appendChild(label_desc)

    const queryDesc = document.createElement('textArea')
    //queryDesc.value = desc.value
    queryDesc.classList.add('textArea')
    queryDesc.disabled = true

    if (desc.value.trim() == '') {
      queryDesc.value = '???'
    } else {
      queryDesc.value = desc.value
    }
    queryContainer.appendChild(queryDesc)
    if (start.value != '' && due.value != '') {
      const divOne = document.createElement('div')
      divOne.setAttribute('class', 'date_start')
      queryContainer.appendChild(divOne)

      const startDateLabel = document.createElement('label')
      startDateLabel.textContent = 'Start Date: '
      divOne.appendChild(startDateLabel)

      const startDate = document.createElement('p')
      startDate.textContent = getDate(start.value)
      divOne.appendChild(startDate)

      const divTwo = document.createElement('div')
      divTwo.setAttribute('class', 'date_start')
      divTwo.classList.add('marginBottom')

      queryContainer.appendChild(divTwo)

      const dueDateLabel = document.createElement('label')
      dueDateLabel.textContent = 'Due Date: '
      divTwo.appendChild(dueDateLabel)

      const dueDate = document.createElement('p')
      dueDate.textContent = getDate(due.value)
      divTwo.appendChild(dueDate)

      function getDate(date) {
        const dateObj = new Date(date)
        const monthAbbrevations = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ]

        const year = dateObj.getFullYear()
        const month = monthAbbrevations[dateObj.getMonth()]
        const day = dateObj.getDate()

        const output = `${month}-${day}-${year}`

        return output
      }
    }
    records.push({title:queryTitle.value,description:queryDesc.value})// add this ,Start_Date:start.value,Due_Date:due.value
    localStorage.setItem('records',JSON.stringify(records))
  
    
    
    
    //container for 3 buttons
    const button_container = document.createElement('div')
    button_container.classList.add('button_container')
    queryContainer.appendChild(button_container)

    const done = document.createElement('button')
    done.textContent = '✔️Done'
    button_container.appendChild(done)
    //make edit button
    const edit = document.createElement('button')
    edit.textContent = '✏️Edit'
    button_container.appendChild(edit)

    query.classList.toggle('invisible')
    button.disabled = false
    //make delete button
    const del = document.createElement('button')
    del.textContent = '🗑️delete'
    button_container.appendChild(del)

    done.onclick = blur
    edit.onclick = editInputs
    del.onclick = deleteContainer
    function deleteContainer() {
      queryContainer.remove()
    }
    let saveTitle = []
    let isModified = false
    function editInputs() {
      let currentTitle = queryTitle.value
      let currentDesc = queryDesc.value

      done.classList.add('invisible')
      edit.classList.add('invisible')
      del.classList.add('invisible')

      queryTitle.disabled = false
      queryDesc.disabled = false
      //add save button
      const save = document.createElement('button')
      save.textContent = '💾Save'
      queryContainer.appendChild(save)
      //add cancel button for edit window
      const cancel_edit = document.createElement('button')
      cancel_edit.textContent = '❌Cancel'
      queryContainer.appendChild(cancel_edit)

      save.onclick = saveData

      cancel_edit.onclick = returnPrevValues
      function returnPrevValues() {
        queryTitle.value = currentTitle
        queryDesc.value = currentDesc
        queryTitle.disabled = true
        queryDesc.disabled = true
        done.classList.toggle('invisible')
        edit.classList.toggle('invisible')
        del.classList.toggle('invisible')
        save.remove()
        cancel_edit.remove()
      }

      function saveData() {
        isModified = true
        saveTitle.push(queryTitle.value)
        queryTitle.disabled = true
        queryDesc.disabled = true
        done.classList.toggle('invisible')
        edit.classList.toggle('invisible')
        del.classList.toggle('invisible')
        save.remove()
        cancel_edit.remove()
      }
    }
    function blur() {
      queryTitle.classList.toggle('opacity')
      queryDesc.classList.toggle('opacity')
      label_desc.classList.toggle('opacity')
      done.classList.toggle('invisible')
      edit.classList.toggle('invisible')
      del.classList.toggle('invisible')

      let message = document.createElement('h1')
      if (isModified) {
        message.textContent = saveTitle + '✔️'
      } else {
        message.textContent = title.value + '✔️'
      }
      queryContainer.style.background = 'green'
      message.classList.add('message')
      done.disabled = true
      queryContainer.appendChild(message)

      if (queryContainer.style.background == 'green') {
        const cancel = document.createElement('button')
        cancel.textContent = 'Cancel'

        queryContainer.appendChild(cancel)

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'

        queryContainer.appendChild(deleteButton)
        cancel.onclick = removeBlur
        deleteButton.onclick = removeElement

        function removeBlur() {
          queryTitle.classList.toggle('opacity')
          queryDesc.classList.toggle('opacity')
          label_desc.classList.toggle('opacity')
          done.classList.toggle('invisible')
          edit.classList.toggle('invisible')
          message.classList.add('invisible')
          queryContainer.style.background = 'white'
          cancel.classList.add('invisible')
          deleteButton.classList.add('invisible')
          del.classList.toggle('invisible')
          done.disabled = false
        }

        function removeElement() {
          queryContainer.remove()
        }
      }
    }
  }
}
//add delete
