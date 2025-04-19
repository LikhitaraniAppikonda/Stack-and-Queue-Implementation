let stack = [];
let queue = [];

function push() {
  let input = document.getElementById("stackInput");
  let value = input.value.trim();
  if (value === "") {
    alert("Enter a value to push");
    return;
  }
  stack.push(value);
  updateStackUI();
  input.value = "";
}

function pop() {
  if (stack.length === 0) {
    alert("Stack is empty!");
    return;
  }

  const stackContainer = document.getElementById("stack");
  const lastElement = stackContainer.lastElementChild;
  if (lastElement) {
    lastElement.style.animation = "fadeOutShrink 0.3s ease forwards";
    setTimeout(() => {
      stack.pop();
      updateStackUI();
    }, 300);
  }
}

function enqueue() {
  let input = document.getElementById("queueInput");
  let value = input.value.trim();
  if (value === "") {
    alert("Enter a value to enqueue");
    return;
  }
  queue.push(value);
  updateQueueUI();
  input.value = "";
}

function dequeue() {
  if (queue.length === 0) {
    alert("Queue is empty!");
    return;
  }

  const queueContainer = document.getElementById("queue");
  const firstElement = queueContainer.firstElementChild;
  if (firstElement) {
    firstElement.style.animation = "fadeOutShrink 0.3s ease forwards";
    setTimeout(() => {
      queue.shift();
      updateQueueUI();
    }, 300);
  }
}

function updateStackUI() {
  const stackContainer = document.getElementById("stack");
  stackContainer.innerHTML = "";
  stack.forEach(item => {
    const el = document.createElement("div");
    el.className = "stack-item";
    el.textContent = item;
    stackContainer.appendChild(el);
  });
}

function updateQueueUI() {
  const queueContainer = document.getElementById("queue");
  queueContainer.innerHTML = "";
  queue.forEach(item => {
    const el = document.createElement("div");
    el.className = "queue-item";
    el.textContent = item;
    queueContainer.appendChild(el);
  });
}
