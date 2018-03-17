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
    text: 'Total: 16 MIL/PER YR - Salary 11 MIL/PER YR Bonus 5 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'LB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 16 MIL/PER YR - Salary 11 MIL/PER YR Bonus 5 MIL\n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'DT - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 14 MIL/PER YR - Salary 10 MIL/PER YR Bonus 4 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'DE - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 12 MIL/PER YR - Salary 8.5 MIL/PER YR Bonus 3.5 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'FS - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 5.5 MIL/PER YR - Salary 3.75 MIL/PER YR Bonus 1.5 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'SS - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 3.1 MIL/PER YR - Salary 2 MIL/PER YR Bonus 1.1 MIL\n',
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
