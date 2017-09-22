let i
let oldStr
let newStr
let node
let textNode
let record
let att
let num
let numStr
let status = 0

const multiplyDivide = ["*", "/"]
const plusMinus = ["+", "-"]

function errorChecker(str) {
  str = str.replace(/\xD7/g, '*').replace(/\xF7/g, '/')
  for (i = 0; i < str.length; i++) {
    if (multiplyDivide.indexOf(str[i]) !== -1 && multiplyDivide.indexOf(str[i + 1]) !== -1) {
      document.getElementById("bottomScreen").innerHTML = "Malformed Expression"
    } else if ((multiplyDivide.indexOf(str[str.length - 1]) !== -1) || (plusMinus.indexOf(str[str.length - 1]) !== -1) || (multiplyDivide.indexOf(str[0]) !== -1)) {
      document.getElementById("bottomScreen").innerHTML = "Malformed Expression"
    } else if ((str[i] === "." && str[i + 1] === ".") || (str[i] === "." && str[i + 2] === ".")) {
      document.getElementById("bottomScreen").innerHTML = "Malformed Expression"
    } else if (plusMinus.indexOf(str[i]) !== -1 && plusMinus.indexOf(str[i + 1]) !== -1 && plusMinus.indexOf(str[i + 2]) !== -1) {
      document.getElementById("bottomScreen").innerHTML = "Malformed Expression"
    } else {
      document.getElementById("topScreen").innerHTML = str.replace(/\++|\--/g, "+")
    }
  }
  return
}

//Need to add the first 'if' to the other numbers and operators.
document.getElementById("zero").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "0"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "0"
    status = 0
  }
})

document.getElementById("one").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "1"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "1"
    status = 0
  }
})

document.getElementById("two").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "2"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "2"
    status = 0
  }
})

document.getElementById("three").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "3"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "3"
    status = 0
  }
})

document.getElementById("four").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "4"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "4"
    status = 0
  }
})

document.getElementById("five").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "5"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "5"
    status = 0
  }
})

document.getElementById("six").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "6"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "6"
    status = 0
  }
})

document.getElementById("seven").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "7"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "7"
    status = 0
  }
})

document.getElementById("eight").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "8"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "8"
    status = 0
  }
})

document.getElementById("nine").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "9"
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "9"
    status = 0
  }
})

document.getElementById("point").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (status == 0 && document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "."
  } else if (status == 1) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML = "."
    status = 0
  }
})

document.getElementById("clearEntry").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  length = document.getElementById("topScreen").innerHTML.length - 1
  document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML.slice(0, length)
})

document.getElementById("allClear").addEventListener("click", function() {
  document.getElementById("topScreen").innerHTML = ""
  document.getElementById("bottomScreen").innerHTML = ""
})

document.getElementById("divide").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + '\xF7'
    status = 0
  }
})

document.getElementById("multiply").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "\xD7"
    status = 0
  }
})

document.getElementById("minus").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "-"
    status = 0
  }
})

document.getElementById("plus").addEventListener("click", function() {
  document.getElementById("bottomScreen").innerHTML = ""
  if (document.getElementById('topScreen').innerHTML.length >= 13) {
    document.getElementById("bottomScreen").innerHTML = "Maximum Length Exceeded"
  } else if (document.getElementById('topScreen').innerHTML.length <= 12) {
    document.getElementById("topScreen").innerHTML = document.getElementById("topScreen").innerHTML + "+"
    status = 0
  }
})

function check() {
  if (oldStr.length === 0) {
    return false
  } else if (document.getElementById("bottomScreen").innerHTML === "Malformed Expression") {
    return false
  } else if (document.getElementById("record").childNodes[0] !== undefined && (oldStr + "=" + oldStr) === document.getElementById("record").childNodes[0].textContent){
    return false
  } else {
    return true
  }
}

document.getElementById('equals').addEventListener("click", function() {
  oldStr = document.getElementById('topScreen').innerHTML
  errorChecker(document.getElementById('topScreen').innerHTML)
  if (check() === true) {
    document.getElementById('topScreen').innerHTML = document.getElementById('topScreen').innerHTML.replace(/\xD7/g, '*')
    document.getElementById('topScreen').innerHTML = document.getElementById('topScreen').innerHTML.replace(/\xF7/g, '/')
    numStr = String(eval(document.getElementById('topScreen').innerHTML))
    if (numStr.length <= 12) {
      document.getElementById('topScreen').innerHTML = eval(document.getElementById('topScreen').innerHTML)
    } else if (numStr.length > 12) {
      num = eval(document.getElementById('topScreen').innerHTML)
      document.getElementById('topScreen').innerHTML = num.toExponential(4)
    }
    status = 1
    toRecord()
  } else {
    document.getElementById('topScreen').innerHTML = oldStr
    return
  }
})

function toRecord() {
  newStr = oldStr + "=" + document.getElementById('topScreen').innerHTML
  node = document.createElement("P")
  att = document.createAttribute("class")
  att.value = "entries"
  node.setAttributeNode(att)
  textNode = document.createTextNode(newStr)
  node.appendChild(textNode)
  record = document.getElementById("record")
  record.insertBefore(node, record.childNodes[0])
}
