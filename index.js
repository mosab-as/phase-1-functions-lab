// Code your solution in this file!
function distanceFromHqInBlocks(distance)
{
  if(distance > 42)
  {
    return distance-42
  }
  else if(distance < 42)
  {
    return 42-distance
  }
}

function distanceFromHqInFeet(distanceInFeet)
{
  return distanceFromHqInBlocks(distanceInFeet)*264
}

function distanceTravelledInFeet(start, destination)
{
  if(start < destination)
  {
    return (destination-start)*264
  }
  else if(start > destination)
  {
    return (start-destination)*264
  }
}

function calculatesFarePrice(start, destination)
{
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if(distanceInFeet <= 400)
  {
    return 0
  }else if(distanceInFeet > 400 && distanceInFeet < 2000)
  {
    return (distanceInFeet-400)*2/100
  }else if(distanceInFeet > 2000 && distanceInFeet < 2500)
  {
    return 25
  }else if(distanceInFeet > 2500)
  {
    return 'cannot travel that far'
  }

}
