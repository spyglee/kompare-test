export default (stringDate: string): number => {
  if (stringDate && stringDate.includes('-')) {
    const [year, month, day] = stringDate.split('-')
    const date = new Date(+year, +month -1, +day)
    const ageDifMs = Date.now() - date.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  return NaN
}