import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInYears,
} from 'date-fns'

const units = {
  second: {
    short: 's',
    long: ' segundo',
  },
  minute: {
    short: 'm',
    long: ' minuto',
  },
  hour: {
    short: 'h',
    long: ' hora',
  },
}

const formatTimeUntilNow = (
  date: Date,
  options: { display?: 'short' | 'long' } = {},
): string => {
  const { display = 'long' } = options

  if (differenceInSeconds(new Date(), date) < 60) {
    return 'menos de um minuto'
  }

  if (
    differenceInSeconds(new Date(), date) >= 60 &&
    differenceInMinutes(new Date(), date) < 60
  ) {
    const minutes = differenceInMinutes(new Date(), date)
    return `Há ${Math.round(minutes)}${units.minute[display]}${
      minutes > 1 && display === 'long' ? 's' : ''
    }`
  }

  if (
    differenceInMinutes(new Date(), date) >= 60 &&
    differenceInHours(new Date(), date) < 24
  ) {
    const hours = differenceInHours(new Date(), date)
    return `Há ${Math.round(hours)}${units.hour[display]}${
      hours > 1 && display === 'long' ? 's' : ''
    }`
  }

  if (
    differenceInHours(new Date(), date) >= 24 &&
    differenceInDays(new Date(), date) < 30
  ) {
    const days = differenceInDays(new Date(), date)
    return `Há ${Math.round(days)} dia${days > 1 ? 's' : ''}`
  }

  if (
    differenceInDays(new Date(), date) >= 30 &&
    differenceInMonths(new Date(), date) < 12
  ) {
    const months = differenceInMonths(new Date(), date)
    return `Há ${Math.round(months)} ${months > 1 ? 'meses' : 'mês'}`
  }

  if (differenceInMonths(new Date(), date) >= 12) {
    const years = differenceInYears(new Date(), date)
    return `Há ${Math.round(years)} ano${years > 1 ? 's' : ''}`
  }

  return ''
}

export { formatTimeUntilNow }
