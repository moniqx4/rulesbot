'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Rulesbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'CB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 15 MIL/PER YR - Salary 10 MIL/PER YR Bonus 5 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'LB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 19 MIL/PER YR - Salary 13.3 MIL/PER YR Bonus 5.7 MIL\n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'DT - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 17.1 MIL/PER YR - Salary 12 MIL/PER YR Bonus 5.1 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'DE - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 17.1 MIL/PER YR - Salary 12 MIL/PER YR Bonus 5.1 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'S - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 13 MIL/PER YR - Salary 9.1 MIL/PER YR Bonus 3.9 MIL\n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /deftopdollar/ig, handler: handler }
