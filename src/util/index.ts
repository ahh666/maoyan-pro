const sortAsc = (a: CityItems, b: CityItems) => {
  const sortKey = 'py'
  if (a[sortKey] < b[sortKey]) return -1
  else if (a[sortKey] > b[sortKey]) return 1
  else return 0
}
const sortDesc = (a: CityItems, b: CityItems) => {
  const sortKey = 'py'
  if (a[sortKey] < b[sortKey]) return 1
  else if (a[sortKey] > b[sortKey]) return -1
  else return 0
}
const arraySort = (arr: CityItems[], type?: boolean) => {
  const desc = type || false
  if (desc) 
    return arr.sort(sortDesc)
  return arr.sort(sortAsc)
}

export default {
  arraySort
}
