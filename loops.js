function forLoop(array)
{
  for(var i=0; i<25; i++)
  {
    if(i===0)
    {
      array[i] = "I am ${i} strange loop.";
    }
    else {
      array.push("I am ${i} strange loops.");
    }
  }
  return array;
}

function whileLoop(number)
{
  var i = number;
  while(i > 0)
  {
    console.log(i--)
  }
  return "done";
}


function doWhileLoop(array)
{
  function maybeTrue()
  {
    return Math.random() >= 0.5
  }

  do {
    array.pop();
  } while (maybeTrue() && array.length>0);
  return array;
}
