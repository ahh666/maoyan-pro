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

const cityListFormat = (list: CityItems[]): CityList[] => {
  arraySort(list)
  let cityList = []
  let items = []
  let tag = 'a'
  const len = list.length
  for(let i = 0; i < len; i++) {
    if (list[i].py[0] === tag) {
      items.push(list[i])
    } else {
      items.length > 0 && cityList.push({tag, items})
      tag = String.fromCharCode(tag.charCodeAt(0) + 1)
      items = []
      continue
    }
    if (i === len - 1)
      cityList.push({tag, items})
  }
  return cityList
}

const imgUrlReplace = (img: string) => {
  return img.replace('w.h', '128.180')
}

export default {
  arraySort,
  cityListFormat,
  imgUrlReplace
}
