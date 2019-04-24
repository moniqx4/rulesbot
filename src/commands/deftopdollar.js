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
    title: 'OLB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 23.5 MIL/PER YR - Salary 16.4 MIL/PER YR Bonus 7.1 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'MLB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 17 MIL/PER YR - Salary 12 MIL/PER YR Bonus 5 MIL\n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'DT - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 22.5 MIL/PER YR - Salary 15 MIL/PER YR Bonus 7.5 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'DE - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 21 MIL/PER YR - Salary 15 MIL/PER YR Bonus 6 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'S - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 14 MIL/PER YR - Salary 9 MIL/PER YR Bonus 5 MIL\n',
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
