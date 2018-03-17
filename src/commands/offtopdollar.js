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
    title: 'QB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 23 MIL/PER YR - Salary 16 MIL/PER YR Bonus 7 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'HB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 12 MIL/PER YR - Salary 8.5 MIL/PER YR Bonus 3.5 MIL\n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'FB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 2 MIL/PER YR - Salary 1.4 MIL/PER YR Bonus 500 K\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'WR - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 13 MIL/PER YR - Salary 9 MIL/PER YR Bonus 4 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'TE - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 7 MIL/PER YR - Salary 5 MIL/PER YR Bonus 2 MIL\n',
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

module.exports = { pattern: /offtopdollar/ig, handler: handler }
