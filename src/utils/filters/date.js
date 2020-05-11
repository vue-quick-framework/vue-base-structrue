import ExtDate from '../ExtNative/ExtDate'
export default function (date, dateFormat = '%Y-%M-%d %H:%m:%s') {
  if (date) {
    if (!(date instanceof Date)) {
      date = new ExtDate(date)
    }
    return date.strftime(dateFormat)
  }
  return ''
}
