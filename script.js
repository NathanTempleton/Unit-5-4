// These will all cause the even listener to activate when the button is clicked which will activate the function changing whatever the was was for in get getElementById.
document.getElementById('image-button').addEventListener('click', image)
document.getElementById('text-button').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('change-background').addEventListener('click', background)

// These will cause something to change when the button is clicked that the function is associated with.
function image () {
  document.getElementById('apple').src ="./Images/core.PNG"
}
function text () {
  document.getElementById('text-change').innerHTML = "The text has now changed color" 
  document.getElementById('text-change').style.color = "tomato"
}

function hide () {
  document.getElementById('text-change').style.display = "none"
}

function show () {
  document.getElementById('text-change').style.display = "block"
}

function background () {
  document.body.style.backgroundColor = "beige"
}
