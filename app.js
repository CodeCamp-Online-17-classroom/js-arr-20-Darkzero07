function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("I'm agree with you ?");
}

function showcancel() {
  alert("whyyyyyyy !");
}

ask("DO you agree?", showOk, showcancel);
